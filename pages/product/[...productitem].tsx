import Head from "next/head";

import { Main } from "../../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import SliderImage from "@/combonet/slider";
import { ProductItem } from "@/combonet/productitem";
import { GetServerSidePropsContext } from "next";
import {
  getcomment,
  getdetaildes,
  getdetailimg,
  getproductitem,
} from "@/service";
export interface item {
  product: [
    {
      id: number;
      productname: string;
      price: number;
      saleprice: number;
      productdes: string;
      type: number;
      present: number;
      Brand: { brandname: string };
      image: string;
      Stars: any;
      Presents: [
        {
          id: number;
          presentname: string;
          product_id: string;

          image: string;
        }
      ];
    }
  ];
  detailimg: [
    {
      image: string;
    }
  ];
  detaildes: [
    {
      introduce: string;
      ingredient: string;
      uses: string;
      use: string;
      parameter: string;
    }
  ];
}
function Product({ product, detailimg, detaildes }: item) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />

        <ProductItem
          product={product}
          detailimg={detailimg}
          detaildes={detaildes}
        />
      </Main>
    </>
  );
}

Product.Layout = Main;
export default Product;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { req, res, params } = context;

  let id = params?.productitem?.[1];
  let name: string | undefined = params?.productitem?.[0];
  let text = name?.split(" ");
  let arrtext: any = text?.map((item) => item.charAt(0));
  let key = arrtext?.join("").toLocaleLowerCase();
  let data = await getproductitem({ types: key, product_id: id });
  let detailimg = await getdetailimg({ types: key, product_id: id });
  let detaildes = await getdetaildes({ types: key, product_id: id });

  return {
    props: {
      product: data.data,
      detailimg: detailimg.data,
      detaildes: detaildes.data,
    },
  };
}
