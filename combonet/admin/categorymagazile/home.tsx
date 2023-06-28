import { Input } from "@/combonet/Input/Input";
import { Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";

import axios from "../../../axios/axios";
import {
  addcategory,
  addcategorymagazile,
  deletecategory,
  getcategory,
  updatecategory,
} from "@/service";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export function Home() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm({
    defaultValues: {
      categorymagazile: "",
    },
  });

  let history = useRouter();
  const handleloginsubmit = async (value: any) => {
    let res = await addcategorymagazile({
      categorymagazilename: value.categorymagazile,
    });
  };

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "480px",
          mx: "auto",
          py: "40px",
          mt: "50px",
          textAlign: "center",
          px: "20px",
          height: "400px",
        }}>
        <Box
          component={"form"}
          onSubmit={handleSubmit(handleloginsubmit)}
          encType='multipart/form-data'>
          <Input
            name='categorymagazile'
            label='CategoryMagazile'
            sx={{ my: "15px" }}
            fullWidth
            control={control}
          />

          <Button
            type='submit'
            variant='contained'
            fullWidth
            color='success'
            sx={{ mt: "20px", background: "blue", color: "black" }}>
            ADD Categorymagazile
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
