import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { CartContainer } from "@/combonet/cart";
import cookieParser from "cookie-parser";
import { GetServerSidePropsContext } from "next";
import { getcart } from "@/service";

export interface cart {
  cartdata: [
    {
      id: number;
      product_id: number;
      custumer_id: number;
      productname: string;
      price: number;
      quancity: number;
      image: string;
    }
  ];
}
function Cart({ cartdata }: cart) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <CartContainer cartdata={cartdata} />
      </Main>
    </>
  );
}

Cart.Layout = Main;
export default Cart;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const req: any = context.req;
  const cookies: any = cookieParser.JSONCookies(req.cookies);
  const user = JSON.parse(cookies.token_user);
  const id = +user.id;
  let cartdata = await getcart({ id: id });

  return {
    props: {
      cartdata: cartdata.data,
    },
  };
}
