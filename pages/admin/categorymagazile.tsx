import { Home } from "@/combonet/admin/categorymagazile/home";
import { Main } from "@/combonet/admin/main";
import { Box, Paper, Typography } from "@mui/material";

import * as React from "react";

export interface IAdminProps {}

function Categorymagazile(props: IAdminProps) {
  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Categorymagazile
      </Typography>
      <Box>
        <Home />
      </Box>
    </Main>
  );
}

Categorymagazile.layout = Main;

export default Categorymagazile;
