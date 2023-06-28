import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { CartContainer } from "@/combonet/cart";
import { ProfileContainer } from "@/combonet/profile/home";

function Profile() {
  return (
    <>
      <Main>
        <Seo
          title='ToanBuiVan | Dev'
          description='Thiết kế Wedsite Tạo lập WEbsite bằng JavaScript React JS Next JS Node '
          url='https://next-7y39ck2kh-toanbui219-gmailcom.vercel.app/'
          thumbnailUrl='https://tse2.mm.bing.net/th?id=OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa&pid=Api&P=0'
        />
        <ProfileContainer />
      </Main>
    </>
  );
}

Profile.Layout = Main;
export default Profile;
export async function getStaticProps() {
  return {
    props: {},
  };
}
