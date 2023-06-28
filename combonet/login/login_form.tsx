import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Input } from "../Input/Input";
import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ILoginFormProps {
  onSubmit?: (payload: {}) => void;
}

export function LoginForm({ onSubmit }: ILoginFormProps) {
  const [showpassword, setshowpassword] = React.useState(false);
  const schema = yup
    .object({
      username: yup
        .string()
        .required("khong duoc de trong")
        .min(4, "toi da 4 ky tu"),
      password: yup
        .string()
        .required("khong duoc de trong")
        .min(6, "toi da 6 ky tu"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleloginsubmit = async (value: any) => {
    await onSubmit?.(value);
  };

  const handleClickShowPassword = () => {
    setshowpassword(!showpassword);
  };

  return (
    <Box component='form' onSubmit={handleSubmit(handleloginsubmit)}>
      <Input
        name='username'
        sx={{ my: "10px" }}
        fullWidth
        control={control}
        label={"username"}
      />
      <br></br>

      <Input
        type={showpassword ? "text" : "password"}
        fullWidth
        name='password'
        control={control}
        label={"password"}
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
        disabled={isSubmitting}
        startIcon={
          isSubmitting ? (
            <CircularProgress color={"inherit"} size={"1em"} />
          ) : null
        }
        variant='contained'
        fullWidth
        sx={{ mt: "20px" }}
        type='submit'>
        Login
      </Button>
    </Box>
  );
}
