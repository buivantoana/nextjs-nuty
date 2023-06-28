import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { ListProduct } from "@/combonet/listproduct";
import { useRouter } from "next/router";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { getproduct, getroletype } from "@/service";
import { useEffect } from "react";
interface IListIndexProps {
  role: [
    {
      id: number;
      Rolename: string;
    }
  ];
  product: {
    limit: number;
    count: number;

    data: [
      {
        productname: string;
        price: number;
        saleprice: number;
        image: string;
        type: number;
        present: number;
        role_id: number;
      }
    ];
  };
  productrole: [
    {
      productname: string;
      price: number;
      saleprice: number;
      image: string;
      type: number;
      present: number;
      role_id: number;
    }
  ];
}

function List({ role, product, productrole }: IListIndexProps) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ListProduct role={role} product={product} productrole={productrole} />
      </Main>
    </>
  );
}

List.Layout = Main;
export default List;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let id = params?.listproduct?.[1];
  let name: string | undefined = params?.listproduct?.[0];
  let text = name?.split(" ");
  let arrtext: any = text?.map((item) => item.charAt(0));
  let key = arrtext?.join("").toLocaleLowerCase();

  let product = await getproduct({ types: key, limit: 8, page: 1, offset: 0 });

  let productrole = await getproduct({ types: key });

  let role = await getroletype({ id: id });
  role = role.data;

  return {
    props: { role, product: product, productrole: productrole.data },
  };
}
