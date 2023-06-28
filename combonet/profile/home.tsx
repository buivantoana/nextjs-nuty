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

import { useRouter } from "next/router";

export function ProfileContainer() {
  let value = React.useContext(MyContext);

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Thông Tin Người Dùng' />
        <Stack direction={"row"} mb={"40px"} justifyContent={"space-between"}>
          <Box width={"30%"}>
            <Box
              width={287}
              height={116}
              borderRadius={"10px"}
              bgcolor={"white"}
              padding={"30px"}>
              <Box display={"flex"} gap={"10px"}>
                <img
                  style={{ borderRadius: "50%" }}
                  src='https://nuty.vn/Data/SiteImages/anonymous.png'
                  alt=''
                />
                <Box>
                  <p>Tài khoản của</p>
                  <b>{value && value.flag && value.flag.data.name}</b>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={"65%"}>
            <Typography variant='h5'>Thông tin</Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box
                mt={"20px"}
                padding={"15px"}
                width={"100%"}
                bgcolor={"white"}
                borderRadius={"10px"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}>
                  <Typography variant='h6'>Thông tin tài khoản</Typography>
                  <p style={{ color: "blue" }}>Chỉnh sửa</p>
                </Box>
                <Box display={"flex"} gap={"30px"} flexWrap={"wrap"}>
                  <Box flexBasis={"45%"} color={"grey"} mt={"5px"}>
                    Họ và Tên:{" "}
                    <span style={{ color: "black" }}>
                      {value && value.flag && value.flag.data.name}
                    </span>
                  </Box>
                  <Box flexBasis={"45%"} color={"grey"} mt={"5px"}>
                    Email:
                    <span style={{ color: "black" }}>
                      {value && value.flag && value.flag.data.email}
                    </span>
                  </Box>
                  <Box flexBasis={"45%"} color={"grey"} mt={"5px"}>
                    Phone:
                    <span style={{ color: "black" }}>
                      0{value && value.flag && value.flag.data.phone}
                    </span>
                  </Box>
                  <Box flexBasis={"45%"} color={"grey"} mt={"5px"}>
                    Address:
                    <span style={{ color: "black" }}>
                      {value && value.flag && value.flag.data.address}
                    </span>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
