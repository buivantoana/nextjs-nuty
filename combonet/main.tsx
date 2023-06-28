import { Box, Stack } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";
import { Footer } from "./footer";
import { LayoutProps, LayoutPropsindex } from "@/modal/main";
import Container from "@mui/material/Container";

export const MyContext = createContext<any>(null);
const Header = dynamic(() => import("./header"), {
  ssr: false,
});

export function Main({ children }: LayoutProps) {
  let [flag, setflag] = useState({ data: [], authen: false });
  const [cartItems, setCartItems] = useState(false);

  const handlecheck = (data: any) => {
    setflag(data);
  };
  const setcart = () => {
    setCartItems(!cartItems);
  };
  const logout = () => {
    setflag({ data: [], authen: false });
  };
  return (
    <MyContext.Provider value={{ flag, setcart, cartItems, logout }}>
      <Box>
        <Header check={handlecheck} />
        <Box>
          <Box>{children}</Box>
        </Box>
        <Footer />
      </Box>
    </MyContext.Provider>
  );
}
