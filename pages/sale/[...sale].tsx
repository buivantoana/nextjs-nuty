import Head from "next/head";

import { Main } from "../../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { ListProduct } from "@/combonet/listproduct";
import { useRouter } from "next/router";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { getproduct, getroletype, getsaleproduct } from "@/service";
import { useEffect } from "react";
import { ListSale } from "@/combonet/sale/home";
interface IListIndexProps {
  product: [
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
  limit: number;
  count: number;
}

function List({ product, limit, count }: IListIndexProps) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ListSale product={product} limit={limit} count={count} />
      </Main>
    </>
  );
}

List.Layout = Main;
export default List;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let id: string | undefined = params?.sale?.[1];
  let product: any = await getsaleproduct({ id: id, limit: 8, offset: 0 });

  return {
    props: {
      product: product.data,
      limit: product.limit,
      count: product.count,
    },
  };
}
