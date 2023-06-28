import { Home } from "@/combonet/admin/category/home";
import { Main } from "@/combonet/admin/main";
import { Box, Paper, Typography } from "@mui/material";

import * as React from "react";

export interface IAdminProps {}

function Category(props: IAdminProps) {
  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Category
      </Typography>
      <Box>
        <Home />
      </Box>
    </Main>
  );
}

Category.layout = Main;

export default Category;
