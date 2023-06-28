import { Home } from "@/combonet/admin/magazile/home";
import { Main } from "@/combonet/admin/main";
import { Box, Paper, Typography } from "@mui/material";

import * as React from "react";

export interface IAdminProps {}

function Magazile(props: IAdminProps) {
  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Magazile
      </Typography>
      <Box>
        <Home />
      </Box>
    </Main>
  );
}

Magazile.layout = Main;

export default Magazile;
