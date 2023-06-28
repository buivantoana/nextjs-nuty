import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import logo1 from "../../image/sale/artboard-6.png";
import logo2 from "../../image/sale/artboard-7.png";
import logo3 from "../../image/sale/artboard-8.png";
import logo4 from "../../image/sale/artboard-9.png";
import logo5 from "../../image/sale/artboard-10.png";
import logo6 from "../../image/sale/artboard-11.png";
import logo7 from "../../image/sale/artboard-12.png";
import logo8 from "../../image/sale/artboard-13.png";
import Slider from "react-slick";
import Link from "next/link";
import { Close } from "../close";
import { CSD } from "./csd";
import { TD } from "./td";
import { CSCT } from "./csct";
import { CSTVDD } from "./cstvdd";
import { Footerhome } from "./containerfooter";
import { useRouter } from "next/router";

export interface IHomeIndexProps {
  brand: [
    {
      id: number;
      brandname: string;
      image: string;
    }
  ];
  product: [
    {
      id: number;
      productname: string;
      price: number;
      saleprice: number;
      image: string;
      type: number;
      present: number;
      Category: {
        categoryname: string;
      };
    }
  ];
  rolecsd: [
    {
      id: number;
      Rolename: string;
    }
  ];
  productcsd: [
    {
      id: number;
      productname: string;
      price: number;
      saleprice: number;
      image: string;
      type: number;
      present: number;
      category_id: number;
      Category: {
        categoryname: string;
      };
    }
  ];
  roletd: [
    {
      id: number;
      Rolename: string;
    }
  ];
  producttd: [
    {
      id: number;
      productname: string;
      price: number;
      saleprice: number;
      image: string;
      type: number;
      present: number;
      category_id: number;
      Category: {
        categoryname: string;
      };
    }
  ];
  rolecsct: [
    {
      id: number;
      Rolename: string;
    }
  ];
  productcsct: [
    {
      id: number;
      productname: string;
      price: number;
      saleprice: number;
      image: string;
      type: number;
      present: number;
      category_id: number;
      Category: {
        categoryname: string;
      };
    }
  ];
  rolecstvdd: [
    {
      id: number;
      Rolename: string;
    }
  ];

  productcstvdd: [
    {
      id: number;
      productname: string;
      price: number;
      saleprice: number;
      image: string;
      type: number;
      present: number;
      category_id: number;
      Category: {
        categoryname: string;
      };
    }
  ];
}

export function HomeIndex({
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
  let arrsale = [
    { id: 1, name: "DEAL THEO KHUNG GIỜ", logo: logo2 },

    { id: 2, name: "MUA LÀ TẶNG QUÀ", logo: logo4 },
    { id: 3, name: "DEAL HOT ", logo: logo1 },
    { id: 4, name: "BEST SALLER ", logo: logo7 },
    { id: 5, name: "HÀNG MỚI VỀ", logo: logo6 },
    { id: 6, name: "TẠP CHÍ NUTY", logo: logo8 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  let history = useRouter();
  const handleClick = (id: number, name: string) => {
    if (id === 6) {
      history.push("/magazile");
    } else {
      history.push(`./sale/${name}/${id}`);
    }
  };

  const handlerouter = (id: number, name: string) => {
    history.push(`./product/${name}/${id}`);
  };
  const handlebrand = (id: number, name: string) => {
    history.push(`./brand/${name}/${id}`);
  };
  return (
    <Box>
      <Container
        maxWidth={"xl"}
        sx={{
          width: "1300px",
        }}>
        <Box>
          <Stack direction={"row"} justifyContent={"center"} gap={"20px"}>
            {arrsale.map((item, index) => {
              return (
                <Box
                  onClick={() => handleClick(item.id, item.name)}
                  key={index}
                  width={145}
                  height={215}
                  bgcolor={"white"}
                  textAlign={"center"}
                  sx={{
                    borderRadius: "15px",
                    borderBottomLeftRadius: "84px",
                    borderBottomRightRadius: "84px",
                    cursor: "pointer",
                  }}>
                  <Typography
                    variant='h5'
                    fontSize={"20px !important"}
                    pt={"20px"}
                    color={"#3a2665"}
                    height={"79px"}>
                    {item.name}
                  </Typography>
                  <Image
                    className='image'
                    width={127}
                    height={127}
                    src={item.logo}
                    alt='logo'
                  />
                </Box>
              );
            })}
          </Stack>
        </Box>
        <Box>
          <Typography
            variant='h2'
            textAlign={"center"}
            fontSize={"35px !important"}
            my={"20px"}>
            FLASHSALE
          </Typography>
          <Box>
            <Slider className='flexflashsale' {...settings1}>
              {product &&
                product.length &&
                product.map((item, index) => {
                  let price = item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  });
                  let saleprice = item.saleprice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  });
                  let sale = Math.round(
                    ((item.saleprice - item.price) / item.saleprice) * 100
                  );
                  return (
                    <Box
                      key={index}
                      className='flashsale'
                      width='170px !important'
                      height={480}
                      bgcolor={"white"}
                      textAlign={"center"}
                      padding={"10px"}
                      position={"relative"}
                      borderRadius={"10px"}
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        handlerouter(item.id, item.Category.categoryname)
                      }>
                      <Box position={"absolute"} top={10} width={152} left={10}>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}>
                          <Box>
                            <Box display={"flex"} alignItems={"center"}>
                              {item.type !== 0 ? (
                                <Box
                                  display={"flex"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  sx={{
                                    width: "75px",
                                    height: "20px",
                                    background: "#3a2665",
                                    color: "orange",
                                    fontSize: "9px",
                                    borderRadius: "5px",
                                  }}>
                                  <p>Best seller</p>
                                </Box>
                              ) : (
                                ""
                              )}

                              <Box
                                width={37}
                                height={20}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{
                                  background:
                                    "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                                  borderRadius: "5px",
                                  margin: "0 10px 0  5px",
                                }}>
                                <p style={{ fontSize: "13px" }}>-{sale}%</p>
                              </Box>
                            </Box>
                            {item.type === 2 ? (
                              <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{
                                  width: "61px",
                                  height: "20px",
                                  background: "#3a2665",
                                  color: "orange",
                                  fontSize: "9px",
                                  borderRadius: "5px",
                                  mt: "5px",
                                }}>
                                <p>Hot Deal</p>
                              </Box>
                            ) : (
                              ""
                            )}
                          </Box>
                          {item.present === 1 ? (
                            <Box
                              width={27}
                              height={27}
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              sx={{
                                background:
                                  "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                                borderRadius: "5px",
                                fontSize: "12px",
                              }}>
                              <i className='fa-solid fa-gifts'></i>
                            </Box>
                          ) : (
                            ""
                          )}
                        </Stack>
                      </Box>
                      <img
                        width={142}
                        height={142}
                        style={{ margin: "20px auto" }}
                        src={item.image}
                        alt=''
                      />
                      <p
                        className='des'
                        style={{
                          marginBottom: "10px",
                          fontSize: "14px",
                          height: "148px",
                        }}>
                        {item.productname}
                      </p>
                      <span>
                        {price}
                        <br></br>
                      </span>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "grey",
                          fontSize: "13px",
                        }}>
                        {saleprice}
                      </span>
                      <Button
                        fullWidth
                        sx={{
                          height: "17px",
                          fontSize: "10px",
                          textTransform: "inherit",
                          bgcolor: "#d6b9ec !important",
                          color: "black",
                          borderRadius: "30px",
                          mt: "10px",
                        }}>
                        Đã bán sản phẩm
                      </Button>
                      <Close />
                    </Box>
                  );
                })}
            </Slider>
          </Box>
        </Box>

        <Stack
          className='sliderbrand'
          direction={"row"}
          height={300}
          bgcolor={""}
          marginTop={"50px"}
          alignItems={"center"}>
          <Box width={"30%"}>
            <Typography
              variant='h4'
              fontSize={"18px"}
              mb={"10px"}
              color={"#3a2665"}>
              THƯƠNG HIỆU<br></br> NỔI BẬT
            </Typography>
            <p style={{ fontSize: "14px", color: "grey" }}>
              Nuty tự hào là Đại Lý Phân Phối Chính Thức <br></br> của hơn 100
              Thương Hiệu Mỹ Phẩm
            </p>
          </Box>
          <Box width={"69%"}>
            <Slider className='sliderimage' {...settings}>
              {brand &&
                brand.length &&
                brand.map((item, index) => {
                  return (
                    <Box
                      sx={{ cursor: "pointer" }}
                      key={index}
                      onClick={() => handlebrand(item.id, item.brandname)}
                      textAlign={"center"}>
                      <img
                        className='outstandingbrand'
                        width={172}
                        style={{
                          borderRadius: "15px",
                          margin: "0 auto 15px",
                          height: "172px !important",
                        }}
                        src={item.image}
                        alt=''
                      />
                      <p>{item.brandname}</p>
                    </Box>
                  );
                })}
            </Slider>
            <Link href={"/brand"}>
              <Box
                mt={"20px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}>
                <p>Xem tất cả thương hiệu</p>
                <i className='fa-solid fa-arrow-right-long'></i>
              </Box>
            </Link>
          </Box>
        </Stack>
        <CSD rolecsd={rolecsd} productcsd={productcsd} />
        <TD roletd={roletd} producttd={producttd} />
        <CSCT rolecsct={rolecsct} productcsct={productcsct} />
        <CSTVDD rolecstvdd={rolecstvdd} productcstvdd={productcstvdd} />
      </Container>
      <Footerhome />
    </Box>
  );
}
