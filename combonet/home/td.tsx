import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import anh from "../../image/2023.jpg";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";

export interface ITDProps {
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
}

export function TD({ roletd, producttd }: ITDProps) {
  const [transfrom, settransfrom] = React.useState(0);
  const handleprev = () => {
    settransfrom(transfrom - 100);
  };
  const handlenext = () => {
    settransfrom(transfrom + 100);
  };

  let history = useRouter();
  const handlerouter = (id: number, name: string) => {
    history.push(`./product/${name}/${id}`);
  };
  const handlerole = (id: number) => {
    history.push(`/Trang điểm/4/${id}`);
  };
  return (
    <Box
      width='100%'
      height={826}
      bgcolor={"#f9f9f9"}
      borderRadius='20px'
      padding='30px'
      mt={"30px"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box width={427}>
          <Typography variant='h4' my={"30px"}>
            TRANG ĐIỂM
          </Typography>
          <Image style={{ borderRadius: "20px" }} src={anh} alt='anh' />
        </Box>
        <Box width={846} overflow={"hidden"} position={"relative"}>
          <Box
            display={"flex"}
            width={2500}
            mt={"5px"}
            position={"relative"}
            zIndex={2}
            sx={{
              transform: ` translateX(-${transfrom}px)`,
              transition: ".6s",
            }}
            alignItems={"center"}>
            {roletd.map((item, index) => {
              return (
                <Box
                  className='firstchild'
                  px={"10px"}
                  color={"grey"}
                  borderRight={"1px solid grey"}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handlerole(item.id)}>
                  {item.Rolename}
                </Box>
              );
            })}
          </Box>
          <Stack position={"absolute"} top={0} left={0} width='100%'>
            {transfrom === 0 ? (
              <div></div>
            ) : (
              <Box
                width={29}
                height={29}
                bgcolor={"#3a2665"}
                borderRadius={"8px"}
                color={"white"}
                display={"flex"}
                position={"absolute"}
                zIndex={3}
                top={0}
                left={0}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={"20px 0px 5px white"}
                sx={{ cursor: "pointer" }}
                onClick={handleprev}>
                <i className='fa-solid fa-arrow-left'></i>
              </Box>
            )}
            {transfrom === 1400 ? (
              <div></div>
            ) : (
              <Box
                width={29}
                height={29}
                bgcolor={"#3a2665"}
                borderRadius={"8px"}
                color={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={"-20px 0px 5px white"}
                position={"absolute"}
                zIndex={3}
                top={0}
                right={0}
                sx={{ cursor: "pointer" }}
                onClick={handlenext}>
                <i className='fa-solid fa-arrow-right'></i>
              </Box>
            )}
          </Stack>
          <Box display={"flex"} flexWrap={"wrap"}>
            {producttd &&
              producttd.length &&
              producttd.map((item, index) => {
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
                    className='hoverdes'
                    mx={"10px"}
                    flexBasis={"22%"}
                    key={index}
                    width='220px !important'
                    textAlign={"center"}
                    position={"relative"}
                    borderRadius={"10px"}
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      handlerouter(item.id, item.Category.categoryname)
                    }>
                    <Box position={"absolute"} top={34} width={152} left={10}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
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
                      width={182}
                      height={182}
                      style={{ margin: "20px auto", borderRadius: "15px" }}
                      src={item.image}
                      alt=''
                    />
                    <p
                      className='des'
                      style={{
                        marginBottom: "10px",
                        fontSize: "14px",
                      }}>
                      {item.productname.substring(0, 80)}...
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
                  </Box>
                );
              })}
          </Box>
          <Link
            href={`/${producttd[0].Category.categoryname}/${producttd[0].category_id}`}>
            <Box
              mt={"20px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}>
              <p>Xem tất cả </p>
              <i className='fa-solid fa-arrow-right-long'></i>
            </Box>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
