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
import { authentication, loginuser } from "@/service";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export interface ILoginContainerProps {}

export function LoginContainer() {
  const [showpassword, setshowpassword] = React.useState(false);
  const schema = yup
    .object({
      username: yup
        .string()
        .required("khong duoc de trong")
        .min(4, "toi da 4 ky tu")
        .email("phai la email"),
      password: yup
        .string()
        .required("khong duoc de trong")
        .min(6, "toi da 6 ky tu"),
    })
    .required();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  let history = useRouter();
  let [issbubmit, setissubmit] = React.useState(false);
  const handleloginsubmit = async (value: any) => {
    let res = await loginuser({
      username: value.username,
      password: value.password,
    });
    setissubmit(!issbubmit);
    if (res && res.status === 0) {
      let oke = await authentication(res.data);
      if (oke && oke.status === 0) {
        localStorage.setItem("token", res.data);
        setTimeout(() => {
          return history.back();
        }, 1000);
      } else {
        setTimeout(() => {
          setissubmit((issbubmit = false));

          return alert("tai khoan da ton tai");
        }, 1000);
      }
    } else {
      setissubmit((issbubmit = false));
      alert("tai khoan hoac mat khau sai");
    }
  };

  const handleClickShowPassword = () => {
    setshowpassword(!showpassword);
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px", padding: "20px 0" }}>
        <Header name='Đăng nhập' />
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Box
            width={400}
            height={541}
            bgcolor={"white"}
            borderRadius={"15px"}
            padding={"10px 40px"}>
            <Typography variant='h6' padding={"10px 0"} textAlign={"center"}>
              Đăng nhập
            </Typography>
            <p style={{ textAlign: "center" }}>
              Vui lòng nhập Email & mật khẩu
            </p>
            <Box
              padding={"30px 0"}
              component={"form"}
              onSubmit={handleSubmit(handleloginsubmit)}>
              <Input
                name='username'
                sx={{ my: "10px" }}
                fullWidth
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
                Login
              </Button>
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <p>Quên mật khẩu</p>
              <p>Đăng ký</p>
            </Stack>
            <Box
              mt={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100%",
                height: "40px",
                background: "blue",
                borderRadius: "10px",
              }}>
              <Image src={fb} width={30} height={30} alt='' />
              <p style={{ color: "white" }}>Đăng nhập bằng FaceBook</p>
            </Box>
            <Box
              mt={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100%",
                height: "40px",
                background: "red",
                borderRadius: "10px",
              }}>
              <Image src={gg} width={30} height={30} alt='' />
              <p style={{ color: "white" }}>Đăng nhập bằng Google</p>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
