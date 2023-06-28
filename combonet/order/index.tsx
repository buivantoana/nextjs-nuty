import { Box, Container, Stack, Typography } from "@mui/material";

import * as React from "react";
import { Header } from "../headercontainer";
import { useRouter } from "next/router";

export interface IOrderProps {}

export function Order(props: IOrderProps) {
  let history = useRouter();
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Đặt hàng Thành công' />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Stack direction={"row"}>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <button
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    background: "#3a2665",
                    color: "white",
                  }}>
                  1
                </button>
              </Box>
              <Box width={369} height={2} bgcolor={"#3a2665"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <button
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    background: "#3a2665",
                    color: "white",
                  }}>
                  2
                </button>
              </Box>
              <Box width={369} height={2} bgcolor={"#3a2665"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <button
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    background: "#3a2665",
                    color: "white",
                  }}>
                  3
                </button>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          display={"flex"}
          mt={"10px"}
          mb={"60px"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <p style={{}}>Đăng nhập</p>
              </Box>
              <Box width={290} height={2} bgcolor={"transparent"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <p style={{}}>Thông tin Giao hàng</p>
              </Box>
              <Box width={300} height={2} bgcolor={"transparent"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <p style={{}}>Hoàn Thành</p>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          padding={"20px"}
          width={"100%"}
          borderRadius={"15px"}
          bgcolor={"white"}
          textAlign={"center"}>
          <Typography
            fontSize={"30px"}
            textTransform={"uppercase"}
            textAlign={"center"}>
            Đặt hàng Thành công
          </Typography>
          <p style={{ margin: "15px 0" }}>
            Shop mong sẽ đem đến khách hàng những trải nghiệm tuyệt vời nhất
            <br></br>
            Cảm ơn quý khách đã tin tưởng và sử dụng sản phẩm bên Shop
          </p>
        </Box>
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
            onClick={() => history.push("/ordercheck")}>
            <p>KIỂM TRA ĐƠN HÀNG</p>
            <i className='fa-solid fa-arrow-right-long'></i>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
