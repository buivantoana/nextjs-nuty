import Head from "next/head";

import { Main } from "../../combonet/main";

import { Seo } from "@/combonet/seo/seo";

import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

import { ListProductcategory } from "@/combonet/productcategory/home";
import { ListProductSearch } from "@/combonet/search/home";
import { searchproduct } from "@/service";
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

function Search({ product }: IListIndexProps) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ListProductSearch product={product} />
      </Main>
    </>
  );
}

Search.Layout = Main;
export default Search;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let search = params?.search?.[0];
  let product = await searchproduct({
    limit: 8,
    offset: 0,
    search: search,
  });
  console.log(product);
  return {
    props: {
      product: product,
    },
  };
}
