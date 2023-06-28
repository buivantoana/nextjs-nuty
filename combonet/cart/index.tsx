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
import { MyContext } from "../main";
import { addcart, deletecart, getcart, updatecart } from "@/service";
import { cart } from "@/pages/cart";
import { useRouter } from "next/router";

export function CartContainer({ cartdata }: cart) {
  let cartquancity = React.useCallback(() => {
    let arrdata: any = [];

    cartdata.map((item) => arrdata.push(item.quancity));
    return arrdata;
  }, []);

  const [arr, setarr] = React.useState(cartquancity());

  const handlequancity = (id: string, index: number) => {
    if (id === "-") {
      setarr((pre: any) => {
        let cartincre = [...pre];
        cartincre[index]--;
        return cartincre;
      });
    }
    if (id === "+") {
      setarr((pre: any) => {
        let cartincre = [...pre];
        cartincre[index]++;
        return cartincre;
      });
    }
  };
  let value = React.useContext(MyContext);
  let history = useRouter();
  const handleupdate = async () => {
    let res = await updatecart({
      custumer_id: value.flag.data.id,
      quancity: arr,
    });

    if (res && res.status === 1) {
      value.setcart();
    }
  };
  let [datacart, setdatacart] = React.useState<any[]>(cartdata);
  const handledestroy = async (id: number, index: number) => {
    let res = await deletecart({ id: id });
    if (res && res.status === 0) {
      let filtercart = datacart.filter((item) => {
        return item.id !== id;
      });
      let arrnew = arr.splice(index, 1);
      setarr(arrnew);
      value.setcart();
      setdatacart(filtercart);
    }
  };
  let length: number = datacart.length;
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Giỏ hàng' />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box
            width={812}
            sx={{
              padding: "20px",
              bgcolor: "white",
              borderRadius: "15px",
            }}>
            <Typography mb={"20px"}>
              GIỎ HÀNG CỦA BẠN ({datacart.length} SẢN PHẨM)
            </Typography>
            <hr />
            {datacart && length === 0 ? (
              <Typography mt={"20px"} fontSize={24} textAlign={"center"}>
                Bạn Chưa Có Sản Phẩm Nào Trong Giỏ Hàng
              </Typography>
            ) : (
              <Box>
                <Box>
                  {datacart &&
                    datacart.length &&
                    datacart.map((item, index) => {
                      return (
                        <Stack
                          key={index}
                          className='cartproduct'
                          borderBottom={"1px solid #ccc"}
                          paddingBottom={"10px"}
                          mt={"20px"}
                          direction={"row"}
                          justifyContent={"space-between"}>
                          <Box display={"flex"}>
                            <img
                              src={item.image}
                              width={100}
                              style={{ height: "100px !important" }}
                              alt=''
                            />
                            <Box>
                              <p
                                style={{
                                  width: "320px",
                                  marginBottom: "10px",
                                }}>
                                {item.productname}
                              </p>
                              <Box
                                width={50}
                                height={25}
                                onClick={() => handledestroy(item.id, index)}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                borderRadius={"8px"}
                                sx={{
                                  "& :hover": {
                                    color: "red",
                                  },
                                  cursor: "pointer",
                                }}>
                                <i className='fa-regular fa-trash-can'></i>
                              </Box>
                            </Box>
                          </Box>
                          <Box display={"flex"} height={40} gap={"10px"}>
                            <p>{item.price} ₫</p>
                            <ButtonGroup
                              variant='outlined'
                              aria-label='outlined button group'>
                              <Button
                                onClick={() => handlequancity("-", index)}
                                disabled={arr[index] === 0}
                                sx={{
                                  bgcolor: "#f5f5f5 !important",
                                  border: "1px solid grey !important",
                                  marginRight: "5px",
                                }}>
                                <i className='fa-solid fa-minus'></i>
                              </Button>
                              <Button
                                sx={{
                                  width: "60px",
                                  border: "1px solid !important",
                                  marginRight: "5px",
                                }}>
                                {arr[index]}
                              </Button>
                              <Button
                                onClick={() => handlequancity("+", index)}
                                sx={{
                                  bgcolor: "#f5f5f5 !important",
                                  border: "1px solid grey !important",
                                }}>
                                <i className='fa-solid fa-plus'></i>
                              </Button>
                            </ButtonGroup>
                          </Box>
                        </Stack>
                      );
                    })}
                </Box>
                <Box onClick={handleupdate}>
                  <button
                    style={{
                      width: "100px",
                      height: "40px",
                      background: "#3a2665",
                      color: "white",
                      borderRadius: "8px",
                      marginTop: "10px",
                      float: "right",
                    }}>
                    Cập Nhật
                  </button>
                </Box>
              </Box>
            )}
          </Box>
          <Box
            width={391}
            height={300}
            sx={{
              padding: "20px",
              bgcolor: "white",
              borderRadius: "15px",
            }}>
            <Typography mb={"20px"}>THÔNG TIN ĐƠN HÀNG</Typography>
            <hr />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              mt={"20px"}>
              <p>Tổng tiền hàng (4 sản phẩm)</p>
              <p>270.000 ₫</p>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              mt={"20px"}>
              <p>Giảm giá</p>
              <p>0 ₫</p>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              mt={"20px"}>
              <p>Phí vận chuyển</p>
              <p>0 ₫</p>
            </Stack>
            <hr style={{ margin: "20px 0" }} />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              mt={"20px"}>
              <p>Tổng cộng:</p>
              <p style={{ fontSize: "20px" }}>
                <b>270.000 ₫</b>
              </p>
            </Stack>
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
            bgcolor={"white"}
            sx={{ cursor: "pointer" }}
            onClick={() => history.back()}>
            <i className='fa-solid fa-arrow-left-long'></i>
            <p>TIẾP TỤC MUA HÀNG</p>
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
            color={"white"}
            sx={{ cursor: "pointer" }}
            onClick={() => history.push("/shipmentdetail")}>
            <p>TIẾN HÀNH THANH TOÁN</p>
            <i className='fa-solid fa-arrow-right-long'></i>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
