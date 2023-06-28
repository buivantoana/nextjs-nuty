import { Box, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import logo from "../../image/logo.png";

export interface IHeaderProps {
  name: string;
}

export function Header({ name }: IHeaderProps) {
  return (
    <Box>
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          gap: "12px",
          marginBottom: "15px",
          marginTop: "20px",
        }}>
        <Image src={logo} width={47} height={24} alt='logo' />
        <i className='fa-solid fa-chevron-right'></i>
        <Typography fontSize='12px' color='grey'>
          {name}
        </Typography>
      </Box>
      <hr style={{ color: "#c47ef6", marginBottom: "40px" }} />
    </Box>
  );
}
