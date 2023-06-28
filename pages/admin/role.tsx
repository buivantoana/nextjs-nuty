import { Main } from "@/combonet/admin/main";
import { Home } from "@/combonet/admin/role/home";
import { Box, Paper, Typography } from "@mui/material";

import * as React from "react";

export interface IAdminProps {}

function Category(props: IAdminProps) {
  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Role
      </Typography>
      <Box>
        <Home />
      </Box>
    </Main>
  );
}

Category.layout = Main;

export default Category;
