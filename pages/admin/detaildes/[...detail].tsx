import { Main } from "@/combonet/admin/main";
import { Home } from "@/combonet/admin/detaides/index";
import { Paper, Typography } from "@mui/material";

import { useRouter } from "next/router";

import * as React from "react";
import { GetServerSidePropsContext } from "next";
import { getproduct } from "@/service";

export interface IAdminProps {
  product: [
    {
      id: number;
      productname: string;
    }
  ];
}

function Detaildes({ product }: IAdminProps) {
  let router: any = useRouter();

  return (
    <Main>
      <Typography textAlign={"center"} my={3} variant='h3'>
        ADD Detail DES {router && router.query.detail && router.query.detail[0]}
      </Typography>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          py: "40px",
          mt: "50px",
          textAlign: "center",
          px: "20px",
          height: "auto",
        }}>
        <Home product={product} />
      </Paper>
    </Main>
  );
}

Detaildes.layout = Main;

export default Detaildes;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let name: string | undefined = params?.detail?.[0];
  let text = name?.split(" ");
  let arrtext: any = text?.map((item) => item.charAt(0));
  let key = arrtext?.join("").toLocaleLowerCase();

  let product = await getproduct({ types: key });

  product = product.data;

  return {
    props: { product: product },
  };
}
