// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();
export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req.method);
  if (req.method !== "POST") {
    return res.status(404).json({ message: "not method" });
  }
  return new Promise((resolve) => {
    const handlelogin: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          const isSuccess =
            proxyRes.statusCode &&
            proxyRes.statusCode >= 200 &&
            proxyRes.statusCode < 300;
          if (isSuccess) {
            const { data } = JSON.parse(body);
            const cookies = new Cookies(req, res, {
              secure: process.env.NODE_ENV !== "development",
            });

            cookies.set("accessToken", data, {
              httpOnly: true,
              sameSite: "lax",
            });
            (res as NextApiResponse)
              .status(200)
              .json({ error: 0, message: "success" });
          } else {
            (res as NextApiResponse)
              .status(200)
              .json({ error: 1, message: body });
          }
        } catch (error) {
          res.end(error);
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handlelogin);

    proxy.web(req, res, {
      target: "http://localhost:8080/",
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
