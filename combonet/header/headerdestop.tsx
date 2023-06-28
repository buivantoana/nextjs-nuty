import * as React from "react";
import { Box, Stack, Link as MUIlink, Typography, Button } from "@mui/material";
import Container from "@mui/material/Container";

// import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";
import image1 from "../../image/banner-3004.jpg";
import logo from "../../image/logo.png";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { Modal } from "../modal/menu";

import Link from "next/link";
import SliderImage from "../slider";
import { authentication, getcart } from "@/service";
import { MyContext } from "../main";
import { Cart } from "../modal/cart";
import debounce from "lodash/debounce";
import { Scrol } from "./scroll";
import { Profile } from "../modal/profile";

export interface IHeaderdestopProps {
  check: any;
}

export function Headerdestop({ check }: IHeaderdestopProps) {
  let value = React.useContext(MyContext);

  let history = useRouter();
  const [flag, setflag] = React.useState(false);
  const [cart, setcart] = React.useState(false);
  let [profile, setprofile] = React.useState(false);
  const [user, setuser] = React.useState<any[]>([]);
  const [cartdata, setcartdata] = React.useState<any[]>([]);
  const [search, setsearch] = React.useState("");

  const handleBoxClick = () => {
    setflag(!flag);
  };
  const handlelogoutuseContext = () => {
    setuser([]);
    value.logout();
  };

  let token = localStorage.getItem("token");

  async function getuser() {
    if (token) {
      let authen: any = await authentication(token);

      if (authen && authen.status === 0) {
        setuser([authen.data]);
        check({ data: authen.data, authen: true, cart: true });
        let getcartdata = await getcart({ id: authen.data.id });
        setcartdata(getcartdata.data);
      }
    }
  }

  React.useEffect(() => {
    getuser();
  }, [value.cartItems]);

  const handlecart = () => {
    setcart(!cart);
  };

  const handleprofile = () => {
    setprofile(!profile);
  };
  let quancity = 0;
  let all =
    cartdata &&
    cartdata.map((item) => {
      return (quancity += item.quancity);
    });
  console.log(value);
  const handlesearch = () => {
    history.push(`../search/${search}`);
  };
  return (
    <Box display={{ xs: "none", lg: "block" }} zIndex={3}>
      <Image src={image1} alt='banner' />
      <Box width='100%' bgcolor={"white"} sx={{ height: "130px" }}>
        <Scrol>
          <Box sx={{ display: "flex" }} justifyContent='end'>
            <Stack
              direction={"row"}
              sx={{
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
              px={1}
              py={0.7}
              bgcolor={"#e5e5e5"}>
              <Link
                style={{
                  padding: "0 15px",
                  fontSize: "15px",
                  color: "#3a2665",
                  borderRadius: "1px solid grey",
                }}
                href='../introduce'>
                <i
                  style={{ padding: "0 5px" }}
                  className='fa-solid fa-wand-sparkles'></i>
                Giới thiệu
              </Link>
              <Link
                style={{
                  padding: "0 15px",
                  fontSize: "15px",
                  color: "#3a2665",
                  borderRadius: "1px solid grey",
                }}
                href='../brand'>
                <i
                  style={{ padding: "0 5px" }}
                  className='fa-solid fa-trademark'></i>
                Thương hiệu
              </Link>
              <Link
                style={{
                  padding: "0 15px",
                  fontSize: "15px",
                  color: "#3a2665",
                  borderRadius: "1px solid grey",
                }}
                href='../address'>
                <i
                  style={{ padding: "0 5px" }}
                  className='fa-solid fa-location-dot'></i>
                Cửa hàng
              </Link>
              <Link
                style={{
                  padding: "0 15px",
                  fontSize: "15px",
                  color: "#3a2665",
                  borderRadius: "1px solid grey",
                }}
                href='../suppost'>
                <i
                  style={{ padding: "0 5px" }}
                  className='fa-solid fa-headset'></i>
                Hỗ trợ
              </Link>
              <Link
                style={{
                  padding: "0 15px",
                  fontSize: "15px",
                  color: "#3a2665",
                  borderRadius: "1px solid grey",
                }}
                href='../ordercheck'>
                <i
                  style={{ padding: "0 5px" }}
                  className='fa-solid fa-truck-fast'></i>
                Đơn hàng
              </Link>
              {user && user.length > 0 ? (
                <Box
                  sx={{
                    padding: "0 15px",
                    fontSize: "15px",
                    color: "#3a2665",
                    cursor: "pointer",
                  }}
                  onClick={handleprofile}>
                  <i
                    style={{ padding: "0 5px" }}
                    className='fa-regular fa-circle-user'></i>
                  {user[0].name}
                </Box>
              ) : (
                <Link
                  style={{
                    padding: "0 15px",
                    fontSize: "15px",
                    color: "#3a2665",
                  }}
                  onClick={handleprofile}
                  href={"../login"}>
                  <i
                    style={{ padding: "0 5px" }}
                    className='fa-regular fa-circle-user'></i>
                  Tài khoản
                </Link>
              )}
            </Stack>
          </Box>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'>
            <Box mt='5px'>
              <Stack direction={"row"}>
                <Box
                  onClick={handleBoxClick}
                  sx={{ cursor: "pointer", zIndex: 2, transition: "0.3s" }}
                  bgcolor={flag ? "#3a2665" : "white"}
                  border={"1px solid gray"}
                  width={50}
                  height={50}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr='10px'>
                  <i
                    style={
                      flag
                        ? { color: "white", fontSize: "22px" }
                        : { fontSize: "22px" }
                    }
                    className='fa-solid fa-bars'></i>
                </Box>
                <Box mx='15px'>
                  <Link href='/'>
                    <Image width={93} height={48} src={logo} alt='logo' />
                  </Link>
                </Box>
                <Box
                  width={500}
                  height={40}
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "50px",
                    borderBottomLeftRadius: "0",
                  }}
                  display={"flex"}>
                  <input
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    className='search'
                    type='text'
                    placeholder='Tìm kiếm'
                    style={{
                      width: "92.5%",
                      height: "100%",
                      outline: "none",
                      border: "none",
                      borderRadius: "50px",
                      paddingLeft: "15px",
                    }}
                  />
                  <button
                    onClick={handlesearch}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50px",
                      background: "#3a2665",
                      borderBottomLeftRadius: "0",
                      marginTop: "2px",
                    }}>
                    <i
                      style={{
                        fontSize: "12px",
                        color: "white",
                      }}
                      className='fa-solid fa-magnifying-glass'></i>
                  </button>
                </Box>
              </Stack>
            </Box>
            <Stack mt='5px' direction={"row"} alignItems={"center"}>
              <i
                style={{ fontSize: "24px", marginRight: "5px" }}
                className='fa-solid fa-phone-volume'></i>
              <Typography fontSize='18px'>0325668050</Typography>
              <Box
                marginLeft={"30px"}
                position={"relative"}
                onClick={handlecart}>
                {user && user.length ? (
                  <div className='befforcart'>
                    <p>{quancity}</p>
                  </div>
                ) : (
                  ""
                )}
                <i
                  style={{ fontSize: "24px" }}
                  className='fa-solid fa-cart-shopping'></i>
              </Box>
            </Stack>
          </Stack>
          <Modal check={flag} toggle={handleBoxClick} />
          <Cart check={cart} data={cartdata} toggle={handlecart} />
          {user && user.length > 0 ? (
            <Profile
              check={profile}
              data={value.flag.data}
              toggle={handleprofile}
              logout={handlelogoutuseContext}
            />
          ) : (
            ""
          )}
        </Scrol>
      </Box>
    </Box>
  );
}
