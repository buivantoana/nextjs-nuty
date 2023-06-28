// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import httpProxy from "http-proxy";
// import Cookies from "cookies";

// const proxy = httpProxy.createProxyServer();
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   const cookies = new Cookies(req, res);
//   let data = cookies.get("accessToken");
//   if (data) {
//     req.headers.authorization = `Bearer ${data}`;
//   }
//   proxy.web(req, res, {
//     target: "https://js-post-api.herokuapp.com",
//     changeOrigin: true,
//     selfHandleResponse: false,
//   });
// }
