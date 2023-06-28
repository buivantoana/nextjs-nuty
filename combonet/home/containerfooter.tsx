import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import tpcn from "../../image/dhc.jpg";
import nh from "../../image/nước-hoa.jpg";
import pkld from "../../image/z4036369407496_a62e119f7733c8ba5c22630dab64ca17.jpg";
import Image from "next/image";
import Link from "next/link";

export interface IFooterhomeProps {}

export function Footerhome(props: IFooterhomeProps) {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ width: "1230px", padding: "0 !important", mt: "35px", mb: "20px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Box>
          <Typography variant='h5' fontWeight={700} mb={"30px"}>
            THỰC PHẨM CHỨC NĂNG
          </Typography>
          <Image
            src={tpcn}
            width={391}
            className='imagecontainerfooter'
            alt=''
          />
          <Link href={"/Thực phẩm chức/6"}>
            <Box mt={"20px"} display={"flex"} alignItems={"center"}>
              <p>Xem tất cả </p>
              <i className='fa-solid fa-arrow-right-long'></i>
            </Box>
          </Link>
        </Box>
        <Box>
          <Typography variant='h5' fontWeight={700} mb={"30px"}>
            NƯỚC HOA
          </Typography>
          <Image src={nh} width={391} className='imagecontainerfooter' alt='' />
          <Link href={"/Nước hoa /7"}>
            <Box mt={"20px"} display={"flex"} alignItems={"center"}>
              <p>Xem tất cả </p>
              <i className='fa-solid fa-arrow-right-long'></i>
            </Box>
          </Link>
        </Box>
        <Box>
          <Typography variant='h5' fontWeight={700} mb={"30px"}>
            PHỤ KIỆN LÀM ĐẸP
          </Typography>
          <Image
            src={pkld}
            width={391}
            className='imagecontainerfooter'
            alt=''
          />
          <Link href={"/Phụ kiện làm đẹp /8"}>
            <Box mt={"20px"} display={"flex"} alignItems={"center"}>
              <p>Xem tất cả </p>
              <i className='fa-solid fa-arrow-right-long'></i>
            </Box>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
