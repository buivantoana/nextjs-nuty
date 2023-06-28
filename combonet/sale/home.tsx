import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import { useRouter } from "next/router";
import { Range } from "react-range";
import { usePathname, useSearchParams } from "next/navigation";
import { getproduct, getsaleproduct } from "@/service";
import Link from "next/link";

export interface IListProductProps {
  product: [
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
  limit: number;
  count: number;
}

export function ListSale({ product, limit, count }: IListProductProps) {
  let router: any = useRouter();

  const [values, setValues] = React.useState([0, 100]);

  const [flag, setflag] = React.useState<number>(0);

  const [listproduct, setlistproduct] = React.useState<any[]>([]);

  let query = router.query.sale[0];

  React.useEffect(() => {
    setlistproduct(product);
  }, [query]);
  const handleRangeChange = (values: number[]) => {
    setValues(values);
  };
  let monney1 = ((values[0] / 100) * 2000000).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let monney2 = ((values[1] / 100) * 2000000).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleLoc = async () => {
    let money1 = (values[0] * 2000000) / 100;
    let money2 = (values[1] * 2000000) / 100;

    let filter = product.filter((item) => {
      return money1 <= item.price && item.price <= money2;
    });
    setlistproduct(filter);
  };

  const handlechange = (e: any) => {
    let value = e.target.value;
    if (+value === 0) {
      let sort = listproduct.sort((a, b) => b.id - a.id);
      setlistproduct(sort);
      setflag(0);
    }
    if (+value === 1) {
      let sort = listproduct.sort((a, b) => a.price - b.price);
      setlistproduct(sort);
      setflag(1);
    }
    if (+value === 2) {
      let sort = listproduct.sort((a, b) => b.price - a.price);
      setlistproduct(sort);
      setflag(2);
    }
  };

  const handlechangepagi = async (page: any) => {
    let offset = (+page - 1) * limit;

    let res = await getsaleproduct({
      id: router.query?.sale[1],
      limit: limit + offset,
      offset: offset,
    });
    setlistproduct(res.data);
  };

  return (
    <Box mt={"20px"}>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name={router && router.query.sale && router.query?.sale[0]} />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box width={"25%"} padding={"10px"} sx={{ cursor: "pointer" }}>
            <Typography variant='h5' my={"20px"}>
              {router && router.query.sale && router.query?.sale[0]}
            </Typography>

            <Range
              step={1}
              min={0}
              max={100}
              values={values}
              onChange={handleRangeChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "4px",
                    borderRadius: "3px",
                    backgroundColor: "#3a2665",
                  }}>
                  {children}
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "14px",
                    width: "14px",
                    borderRadius: "9px",
                    backgroundColor: index === 0 ? "white" : "#dc3545",
                    outline: "none",
                  }}
                />
              )}
            />
            <Box display={"flex"} justifyContent={"space-between"} mt={"20px"}>
              <p>{monney1}</p>
              <p>{monney2}</p>
            </Box>
            <button
              style={{
                width: "80px",
                height: "35px",
                borderRadius: "15px",
                background: "#3a2665",
                color: "white",
                margin: "10px ",
                float: "right",
              }}
              onClick={handleLoc}>
              Lọc
            </button>
          </Box>
          <Box width={"70%"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Typography variant='h5'>
                {router &&
                  router.query.listproduct &&
                  router.query?.listproduct[0]}
              </Typography>
              <Typography>
                SẮP XẾP:
                <select
                  style={{ background: "transparent", outline: "none" }}
                  onChange={handlechange}>
                  <option value='0'>Mới nhất</option>
                  <option value='1'>Giá từ thấp đến cao</option>
                  <option value='2'>Giá từ cao đến thấp</option>
                </select>
              </Typography>
            </Stack>

            {listproduct && listproduct.length > 0 ? (
              <Box display={"flex"} flexWrap={"wrap"}>
                {listproduct &&
                  listproduct.length &&
                  listproduct.map((item, index) => {
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
                          left={10}>
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
                          style={{ margin: "20px auto", borderRadius: "15px" }}
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
                Mệnh giá bạn tìm không có.
              </Typography>
            )}
            {/* )} */}
            {listproduct && listproduct.length > 0 ? (
              <Box
                margin={"20px 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Pagination
                  onChange={(event, page) => handlechangepagi(page)}
                  count={Math.ceil(count / limit)}
                  color='secondary'
                />
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
