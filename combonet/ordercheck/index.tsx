import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import { orderdata } from "@/pages/ordercheck";
import { deleteorder } from "@/service";
import { Order } from "../order/index";
import { Star } from "../modal/start";
import { MyContext } from "../main";

export function OrdercheckContainer({ orderdata }: orderdata) {
  let [order, setorder] = React.useState<any[]>(orderdata);
  let [check, setcheck] = React.useState(false);
  let [stardata, setstardata] = React.useState<any[]>([]);
  const handlecheck = () => {
    setcheck(!check);
  };
  const handledestroy = async (id: number) => {
    let res = await deleteorder({ id: id });

    if (res && res.status === 0) {
      let deleteordercheck = order.filter((item) => {
        return item.id !== id;
      });

      setorder(deleteordercheck);
    }
  };

  const handlestar = (id: number) => {
    setcheck(!check);
    let datastar = orderdata.filter((item) => {
      return item.product_id === id;
    });
    setstardata(datastar);
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Kiểm tra Đơn hàng' />

        <Box>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box
              width={950}
              sx={{
                padding: "20px",
                bgcolor: "white",
                borderRadius: "15px",
              }}>
              <Typography mb={"20px"}>
                GIỎ HÀNG CỦA BẠN ({order.length} SẢN PHẨM)
              </Typography>
              <hr />
              {order && order.length === 0 ? (
                <Typography mt={"20px"} fontSize={24} textAlign={"center"}>
                  Bạn Chưa Có Đơn Hàng Nào
                </Typography>
              ) : (
                <Box
                  height={400}
                  className='ordercheck'
                  sx={{ overflowY: "scroll" }}>
                  <Stack direction={"row"} my={"20px"}>
                    <p style={{ padding: "0 10px" }}>Ảnh sản phẩm</p>
                    <p style={{ padding: "0 10px" }}>Tên sản phẩm</p>
                    <p style={{ padding: "0 10px 0 170px" }}>Số lượng</p>
                    <p style={{ paddingLeft: " 10px" }}>Tổng đơn hàng</p>
                    <p style={{ paddingLeft: " 60px" }}>Trạng thái</p>
                    <p style={{ paddingLeft: " 40px" }}>Hủy đơn hàng</p>
                  </Stack>

                  {order &&
                    order.length &&
                    order.map((item, index) => {
                      let count = item.price * item.quancity;
                      return (
                        <Stack
                          key={index}
                          className='cartproduct'
                          borderBottom={"1px solid #ccc"}
                          paddingBottom={"10px"}
                          mt={"20px"}
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}>
                          <Box display={"flex"} alignItems={"center"}>
                            <img
                              src={item.image}
                              width={100}
                              style={{ height: "100px !important" }}
                              alt=''
                            />
                            <Box>
                              <p
                                style={{
                                  width: "230px",
                                  marginBottom: "10px",
                                  marginLeft: "36px",
                                }}>
                                {item.productname}
                              </p>
                            </Box>
                          </Box>
                          <Box>
                            <p>x{item.quancity}</p>
                          </Box>
                          <Box display={"flex"} gap={"10px"}>
                            <p>{count} ₫</p>
                          </Box>
                          <Box display={"flex"} gap={"10px"}>
                            <button
                              style={
                                item.status === 0
                                  ? {
                                      padding: "5px",
                                      borderRadius: "6px",
                                      background: "orange",
                                      color: "white",
                                    }
                                  : {
                                      padding: "5px",
                                      borderRadius: "6px",
                                      background: "green",
                                      color: "white",
                                    }
                              }>
                              {item.status === 0
                                ? "Đang giao"
                                : "Đã giao Thành Công"}
                            </button>
                          </Box>
                          <Box
                            mr={"30px"}
                            width={"30px"}
                            fontSize={"20px"}
                            sx={
                              item.status === 0
                                ? {
                                    "& :hover": {
                                      color: "red",
                                    },
                                    cursor: "pointer",
                                  }
                                : {
                                    "& :hover": {
                                      color: "orange",
                                    },
                                    cursor: "pointer",
                                  }
                            }>
                            {item.status === 0 ? (
                              <i
                                onClick={() => handledestroy(item.id)}
                                className='fa-regular fa-trash-can'></i>
                            ) : (
                              <i
                                onClick={() => handlestar(item.product_id)}
                                className='fa-solid fa-star'></i>
                            )}
                          </Box>
                        </Stack>
                      );
                    })}
                </Box>
              )}
            </Box>

            <Box width={"280px"}>
              <Box padding={"20px"} bgcolor={"white"} borderRadius={"15px"}>
                <Typography mb={"20px"}>PHƯƠNG THỨC THANH TOÁN</Typography>
                <hr />
                <Stack
                  direction={"row"}
                  my={"10px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}>
                  <i className='fa-regular fa-circle-dot'></i>
                  <Box
                    width={"90%"}
                    border={"1px solid grey"}
                    borderRadius={"10px"}
                    padding={"15px"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"5px"}>
                    <img
                      src='https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4'
                      alt=''
                    />
                    <p style={{ fontWeight: "700", fontSize: "14px" }}>
                      Thanh toán khi nhận hàng (COD)
                    </p>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            my={"30px"}
            gap={"20px"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={255}
              height={46}
              gap={"10px"}
              borderRadius={"8px"}
              bgcolor={"white"}>
              <i className='fa-solid fa-arrow-left-long'></i>
              <p>TRỞ VỀ TRANG CHỦ</p>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={275}
              height={46}
              gap={"10px"}
              borderRadius={"8px"}
              bgcolor={"#3a2665"}
              color={"white"}>
              <p>TIẾP TỤC MUA HÀNG</p>
              <i className='fa-solid fa-arrow-right-long'></i>
            </Box>
          </Stack>
          <Star
            check={check}
            data={stardata}
            destroy={handledestroy}
            toggle={handlecheck}
          />
        </Box>
      </Container>
    </Box>
  );
}
