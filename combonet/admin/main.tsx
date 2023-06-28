import { Box, Stack } from "@mui/material";
import * as React from "react";
import dynamic from "next/dynamic";
import { LayoutProps } from "@/modal/main";
import Header from "../admin/header";

// const Header = dynamic(() => import("../admin/header"), {
//   ssr: false,
// });

export function Main({ children }: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />
      <Box flexGrow={1}>
        <Box>{children}</Box>
      </Box>
    </Stack>
  );
}
