import { Home } from "@/combonet/admin/brand/home";
import { Main } from "@/combonet/admin/main";
import { Box, Paper, Typography } from "@mui/material";

import * as React from "react";

export interface IAdminProps {}

function Brand(props: IAdminProps) {
  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Brand
      </Typography>

      <Box>
        <Home />
      </Box>
    </Main>
  );
}

Brand.layout = Main;

export default Brand;
