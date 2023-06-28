import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import fb from "../../image/training_live_facebook.png";
import gg from "../../image/training_live_gplus.png";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { adduser } from "@/service";
import { useRouter } from "next/router";

export interface IRegisterContainerProps {}

export function RegisterContainer(props: IRegisterContainerProps) {
  const [showpassword, setshowpassword] = React.useState(false);
  //   const schema = yup
  //     .object({
  //       username: yup
  //         .string()
  //         .required("khong duoc de trong")
  //         .min(4, "toi da 4 ky tu"),
  //       password: yup
  //         .string()
  //         .required("khong duoc de trong")
  //         .min(6, "toi da 6 ky tu"),
  //     })
  //     .required();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      password: "",
      address: "",
      phone: "",
      email: "",
    },
  });
  let [issbubmit, setissubmit] = React.useState(false);
  let history = useRouter();
  const handleloginsubmit = async (value: any) => {
    let res = await adduser({
      name: value.name,
      address: value.address,
      phone: value.phone,
      email: value.email,
      password: value.password,
    });
    setissubmit(!issbubmit);
    if (res && res.status === 0) {
      setTimeout(() => {
        return history.push("/login");
      }, 1000);
    } else {
      setTimeout(() => {
        setissubmit((issbubmit = false));

        return alert("tai khoan da ton tai");
      }, 1000);
    }
  };

  const handleClickShowPassword = () => {
    setshowpassword(!showpassword);
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px", padding: "20px 0" }}>
        <Header name='Đăng Ký' />
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Box
            width={800}
            height={500}
            bgcolor={"white"}
            borderRadius={"15px"}
            padding={"10px 40px"}>
            <Typography variant='h6' padding={"10px 0"} textAlign={"center"}>
              Đăng Ký
            </Typography>
            <p style={{ textAlign: "center" }}>
              Vui lòng nhập Số điện thoại & mật khẩu
            </p>
            <Box
              padding={"30px 0"}
              component={"form"}
              onSubmit={handleSubmit(handleloginsubmit)}>
              <Input
                name='name'
                sx={{ my: "10px", mx: "10px", width: "47%" }}
                control={control}
                label={"Họ và Tên"}
              />
              <Input
                name='address'
                sx={{ my: "10px", mx: "10px", width: "47%" }}
                control={control}
                label={"Địa chỉ"}
              />
              <Input
                name='phone'
                sx={{ my: "10px", mx: "10px", width: "47%" }}
                control={control}
                label={"Số điện thoai"}
              />
              <Input
                name='email'
                sx={{ my: "10px", mx: "10px", width: "47%" }}
                control={control}
                label={"Email"}
              />
              <br></br>
              <br></br>
              <Input
                type={showpassword ? "text" : "password"}
                fullWidth
                name='password'
                control={control}
                label={"Mật khẩu"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        edge='end'>
                        {showpassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                disabled={issbubmit}
                startIcon={
                  issbubmit ? (
                    <CircularProgress color={"inherit"} size={"1em"} />
                  ) : null
                }
                variant='contained'
                fullWidth
                sx={{ mt: "20px", color: "black" }}
                type='submit'>
                Đăng ký
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
