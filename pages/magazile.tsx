import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { HomeIndex, IHomeIndexProps } from "@/combonet/home/home";

import SliderImage from "@/combonet/slider";
import { Magazilehome } from "@/combonet/magazile/home";
import { getcategorymagazile, getmagazile } from "@/service";

function Magazile({ categorymagazile, magazile }: any) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <SliderImage />
        <Magazilehome categorymagazile={categorymagazile} magazile={magazile} />
      </Main>
    </>
  );
}

Magazile.Layout = Main;
export default Magazile;
export async function getStaticProps() {
  let categorymagazile = await getcategorymagazile();
  let magazile = await getmagazile();
  return {
    props: { categorymagazile: categorymagazile.data, magazile: magazile.data },
  };
}
