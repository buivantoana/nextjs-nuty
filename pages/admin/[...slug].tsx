import { Main } from "@/combonet/admin/main";
import { Home } from "@/combonet/admin/product/home";
import { Box, Paper, Typography } from "@mui/material";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";

import * as React from "react";

export interface IAdminProps {}

function Slug(props: IAdminProps) {
  let router: any = useRouter();

  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Product {router && router.query.slug && router.query?.slug[0]}
      </Typography>
      <Box>
        <Home />
      </Box>
    </Main>
  );
}

Slug.layout = Main;

export default Slug;
