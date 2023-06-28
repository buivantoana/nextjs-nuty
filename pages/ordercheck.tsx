import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { OrdercheckContainer } from "@/combonet/ordercheck";
import { GetServerSidePropsContext } from "next";
import cookieParser from "cookie-parser";
import { getorder } from "@/service";
export interface orderdata {
  orderdata: [
    {
      id: number;
      productname: string;
      product_id: number;
      custumer_id: number;
      quancity: number;
      price: number;
      image: string;
      status: number;
      phone: number;
      deliveryaddress: string;
      name: string;
      address: string;
      city: string;
      description: string;
    }
  ];
}
function OrderSucess({ orderdata }: orderdata) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <OrdercheckContainer orderdata={orderdata} />
      </Main>
    </>
  );
}

OrderSucess.Layout = Main;
export default OrderSucess;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const req: any = context.req;
  const cookies: any = cookieParser.JSONCookies(req.cookies);

  if (!cookies) {
    const user = JSON.parse(cookies.token_user);
    const id = +user.id;
    let orderdata = await getorder({ id: id });

    return {
      props: {
        orderdata: orderdata.data,
      },
    };
  } else {
    return {
      props: {
        orderdata: [],
      },
    };
  }
}
