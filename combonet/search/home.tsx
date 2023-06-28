import {
  Box,
  Container,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import { useRouter } from "next/router";
import { Range } from "react-range";
import { usePathname, useSearchParams } from "next/navigation";
import { getproduct, searchproduct } from "@/service";
import Link from "next/link";

export interface IListProductProps {
  product: {
    limit: number;
    count: number;
    data: [
      {
        productname: string;
        price: number;
        saleprice: number;
        image: string;
        type: number;
        present: number;
        role_id: number;
      }
    ];
  };
}

export function ListProductSearch({ product }: IListProductProps) {
  let router: any = useRouter();
  let [listproduct, setlistproduct] = React.useState<any>([]);
  let [count, setcount] = React.useState<any>(0);
  let query = router.query?.search[0];
  React.useEffect(() => {
    let countall = Math.ceil(product.count / product.limit);
    setlistproduct(product.data);
    setcount(countall);
  }, [query]);

  const handlechangepagi = async (page: any) => {
    let name = router.query.search[0];

    let limit = product.limit;
    let offset = (+page - 1) * limit;
    let res = await searchproduct({
      limit: limit + offset,
      search: name,
      page: +page,
      offset,
    });
    if (res && res.data) {
      setlistproduct(res.data);
    }
  };

  return (
    <Box mt={"20px"}>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header
          name={router && router.query.search && router.query?.search[0]}
        />
        <Stack>
          <Typography variant='h5' textAlign={"center"}>
            Kết Quả Tìm Kiếm “
            {router && router.query.search && router.query?.search[0]}”{" "}
            <br></br>
            <span style={{ color: "grey", fontSize: "14px" }}>
              Tìm thấy {product.count} kết quả phù hợp với từ khóa “
              {router && router.query.search && router.query?.search[0]}”
            </span>
          </Typography>

          <Paper
            elevation={3}
            sx={{
              width: "85%",
              mx: "auto",
              py: "40px",
              mt: "50px",
              px: "20px",
              mb: "40px",
              bgcolor: "transparent",
            }}>
            <Box width={"100%"}>
              {listproduct && listproduct.length > 0 ? (
                <Box display={"flex"} flexWrap={"wrap"}>
                  {listproduct &&
                    listproduct.length &&
                    listproduct.map((item: any, index: any) => {
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
                          mx={"10px"}
                          flexBasis={"22%"}
                          key={index}
                          width='220px !important'
                          textAlign={"center"}
                          position={"relative"}
                          borderRadius={"10px"}>
                          <Box
                            position={"absolute"}
                            top={34}
                            width={152}
                            left={30}>
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
                            width={182}
                            height={182}
                            style={{
                              margin: "20px auto",
                              borderRadius: "15px",
                            }}
                            src={item.image}
                            alt=''
                          />
                          <Link
                            href={`/product/${item.Category.categoryname}/${item.id}`}>
                            <p
                              className='des'
                              style={{
                                marginBottom: "10px",
                                fontSize: "14px",
                              }}>
                              {item.productname.substring(0, 80)}...
                            </p>
                          </Link>
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
              ) : (
                <Typography textAlign={"center"} mt={"40px"} fontSize={"26px"}>
                  Không có sản phẩm nào phù hợp.
                </Typography>
              )}

              {listproduct && listproduct.length > 0 ? (
                <Box
                  margin={"20px 0"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  <Pagination
                    onChange={(event, page) => handlechangepagi(page)}
                    count={count}
                    color='secondary'
                  />
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
