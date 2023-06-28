import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { ShipmentDetailContainer } from "@/combonet/shipmentdetail";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import cookieParser from "cookie-parser";
import { getcart } from "@/service";
export interface ShipmentDetailinter {
  tinh: any[];
  huyen: any[];
  xa: any[];
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
function ShipmentDetail({ tinh, huyen, xa, cartdata }: ShipmentDetailinter) {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ShipmentDetailContainer
          cartdata={cartdata}
          tinh={tinh}
          huyen={huyen}
          xa={xa}
        />
      </Main>
    </>
  );
}

ShipmentDetail.Layout = Main;
export default ShipmentDetail;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  let tinh = await axios.get("https://provinces.open-api.vn/api/p/");
  let huyen = await axios.get("https://provinces.open-api.vn/api/d/");
  let xa = await axios.get("https://provinces.open-api.vn/api/w/");
  const req: any = context.req;
  const cookies: any = cookieParser.JSONCookies(req.cookies);
  const user = JSON.parse(cookies.token_user);
  const id = +user.id;
  let cartdata = await getcart({ id: id });

  return {
    props: {
      tinh: tinh.data,
      huyen: huyen.data,
      xa: xa.data,
      cartdata: cartdata.data,
    },
  };
}
