import Head from "next/head";

import { Main } from "../../combonet/main";

import { Seo } from "@/combonet/seo/seo";

import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

import { ListProductcategory } from "@/combonet/productcategory/home";
import { ListProductSearch } from "@/combonet/search/home";
import { getbrandproduct, searchproduct } from "@/service";
import { ListBrandSearch } from "@/combonet/brandclient/home";
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

function Brand({ product }: IListIndexProps) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ListBrandSearch product={product} />
      </Main>
    </>
  );
}

Brand.Layout = Main;
export default Brand;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let id: any = params?.brand?.[1];

  let product = await getbrandproduct({
    limit: 8,
    offset: 0,
    id: +id,
  });

  return {
    props: {
      product: product,
    },
  };
}
