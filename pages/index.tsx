import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { HomeIndex, IHomeIndexProps } from "@/combonet/home/home";
import { getbrand, getproduct, getroletype } from "@/service";
import SliderImage from "@/combonet/slider";

function Home({
  brand,
  product,
  rolecsd,
  productcsd,
  roletd,
  producttd,
  rolecsct,
  productcsct,
  rolecstvdd,
  productcstvdd,
}: IHomeIndexProps) {
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
        <HomeIndex
          brand={brand}
          product={product}
          rolecsd={rolecsd}
          productcsd={productcsd}
          roletd={roletd}
          producttd={producttd}
          rolecsct={rolecsct}
          productcsct={productcsct}
          rolecstvdd={rolecstvdd}
          productcstvdd={productcstvdd}
        />
      </Main>
    </>
  );
}

Home.Layout = Main;
export default Home;
export async function getStaticProps() {
  let data = await getbrand({ limit: 15 });
  let product = await getproduct({ types: "csd", limit: 15 });
  let productcsd = await getproduct({ types: "csd", limit: 8 });
  let rolecsd = await getroletype({ id: 2 });
  let producttd = await getproduct({ types: "tđ", limit: 8 });
  let roletd = await getroletype({ id: 4 });
  let productcsct = await getproduct({ types: "csct", limit: 8 });
  let rolecsct = await getroletype({ id: 3 });
  let productcstvdd = await getproduct({ types: "cstvdđ", limit: 8 });
  let rolecstvdd = await getroletype({ id: 5 });
  let brand = data.data;
  product = product.data;
  productcsd = productcsd.data;
  rolecsd = rolecsd.data;
  producttd = producttd.data;
  roletd = roletd.data;
  productcsct = productcsct.data;
  rolecsct = rolecsct.data;
  productcstvdd = productcstvdd.data;
  rolecstvdd = rolecstvdd.data;
  return {
    props: {
      brand,
      product,
      rolecsd,
      productcsd,
      roletd,
      producttd,
      rolecsct,
      productcsct,
      rolecstvdd,
      productcstvdd,
    },
  };
}
