import Head from "next/head";

import { Main } from "../combonet/main";

import { Seo } from "@/combonet/seo/seo";
import { Brandhome, IBrandhomeProps } from "@/combonet/brand";
import { gettypebrand } from "@/service";
import SliderImage from "@/combonet/slider";

function Brand({
  zero,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  K,
  J,
  L,
  M,
  N,
  O,
  P,
  R,
  S,
  T,
  U,
  V,
  W,
  Y,
}: IBrandhomeProps) {
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
        <Brandhome
          zero={zero}
          A={A}
          B={B}
          C={C}
          D={D}
          E={E}
          F={F}
          G={G}
          H={H}
          I={I}
          K={K}
          J={J}
          L={L}
          M={M}
          N={N}
          O={O}
          P={P}
          R={R}
          S={S}
          T={T}
          U={U}
          V={V}
          W={W}
          Y={Y}
        />
      </Main>
    </>
  );
}

Brand.Layout = Main;
export default Brand;

export async function getStaticProps() {
  let zero = await gettypebrand({ type: 0 });
  let A = await gettypebrand({ type: "A" });
  let B = await gettypebrand({ type: "B" });
  let C = await gettypebrand({ type: "C" });
  let D = await gettypebrand({ type: "D" });
  let E = await gettypebrand({ type: "E" });
  let F = await gettypebrand({ type: "F" });
  let G = await gettypebrand({ type: "G" });
  let H = await gettypebrand({ type: "H" });
  let I = await gettypebrand({ type: "I" });
  let J = await gettypebrand({ type: "J" });
  let K = await gettypebrand({ type: "K" });
  let L = await gettypebrand({ type: "L" });
  let M = await gettypebrand({ type: "M" });
  let N = await gettypebrand({ type: "N" });
  let O = await gettypebrand({ type: "O" });
  let P = await gettypebrand({ type: "P" });
  let R = await gettypebrand({ type: "R" });
  let S = await gettypebrand({ type: "S" });
  let T = await gettypebrand({ type: "T" });
  let U = await gettypebrand({ type: "U" });
  let V = await gettypebrand({ type: "V" });
  let W = await gettypebrand({ type: "W" });
  let Y = await gettypebrand({ type: "Y" });

  return {
    props: {
      zero,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      K,
      J,
      L,
      M,
      N,
      O,
      P,
      R,
      S,
      T,
      U,
      V,
      W,
      Y,
    },
  };
}
