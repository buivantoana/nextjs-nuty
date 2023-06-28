import { getcart, getcategory, getrole, logoutuser } from "@/service";
import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import { MyContext } from "../main";
import { useRouter } from "next/router";
import Link from "next/link";

export interface IModalProps {}

export function Profile({
  check,
  toggle,
  data,
  logout,
}: {
  check: boolean;
  toggle: any;
  data: any;
  logout: any;
}) {
  const handlelogout = async () => {
    let res = await logoutuser();
    if (res && res.status === 0) {
      localStorage.removeItem("token");
      logout();
      toggle();
    }
  };
  return (
    <div>
      <div className={`profile ${check ? "visible" : "hidden"}`}>
        <img
          style={{ margin: "0 auto" }}
          width={50}
          height={50}
          src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png'
          alt=''
        />
        <p>Name:{data.name}</p>

        <Link href={"../profile"}>
          <Typography sx={{ mt: "20px", textAlign: "center" }}>
            Hồ sơ
          </Typography>
        </Link>
        <Typography
          onClick={handlelogout}
          sx={{ mt: "20px", textAlign: "center" }}>
          Đăng xuất
        </Typography>
      </div>
    </div>
  );
}
