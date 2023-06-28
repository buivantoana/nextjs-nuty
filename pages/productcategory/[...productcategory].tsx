import Head from "next/head";

import { Main } from "../../combonet/main";

import { Seo } from "@/combonet/seo/seo";

import { useRouter } from "next/router";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { getproduct, getproductcategory, getroletype } from "@/service";

import { ListProductcategory } from "@/combonet/productcategory/home";
export interface IListIndexProps {
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
}

function List({ product }: IListIndexProps) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ListProductcategory product={product} />
      </Main>
    </>
  );
}

List.Layout = Main;
export default List;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let id = params?.productcategory?.[1];
  let name: string | undefined = params?.productcategory?.[0];
  let text = name?.split(" ");
  let arrtext: any = text?.map((item) => item.charAt(0));
  let key = arrtext?.join("").toLocaleLowerCase();

  let product = await getproductcategory({
    types: key,
    limit: 8,
    page: 1,
    offset: 0,
    role_id: id,
  });

  return {
    props: { product: product },
  };
}
