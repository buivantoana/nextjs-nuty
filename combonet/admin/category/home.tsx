import { Input } from "@/combonet/Input/Input";
import { Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";

import axios from "../../../axios/axios";
import {
  addcategory,
  deletecategory,
  getcategory,
  updatecategory,
} from "@/service";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

let Table = dynamic(() => import("./table"), { ssr: false });

export function Home() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm({
    defaultValues: {
      category: "",
      icon: "",
    },
  });

  let history = useRouter();
  const handleloginsubmit = async (value: any) => {
    if (check === true) {
      let res = await updatecategory({
        categoryname: value.category,
        icon: value.icon,
        id: id,
      });
      if (res && res.status === 0) {
        setcheck(!check);
        getcategorydata();
        setValue("category", "");
        setValue("icon", "");
      }
    } else {
      let res = await addcategory({
        categoryname: value.category,
        icon: value.icon,
      });
      if (res && res.status === 0) {
        getcategorydata();
        setValue("category", "");
        setValue("icon", "");
      }
    }
  };
  let [datacategory, setdatacategory] = React.useState([]);
  async function getcategorydata() {
    let data: any = await getcategory();

    if (data && data.status === 0) {
      setdatacategory(data.data);
    }
  }

  React.useEffect(() => {
    getcategorydata();
  }, []);

  let [check, setcheck] = React.useState(false);
  let [id, setid] = React.useState(0);

  const handleupdate = (id: number) => {
    let arr: any = datacategory.filter((item: any) => {
      return item.id === id;
    });
    setid(id);
    setcheck(!check);
    setValue("category", arr[0].categoryname);
    setValue("icon", arr[0].icon);
  };
  const handledelete = async (id: number) => {
    let res = await deletecategory({ id: id });
    if (res && res.status === 0) {
      getcategorydata();
    }
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
            name='category'
            label='CategoryName'
            sx={{ my: "15px" }}
            fullWidth
            control={control}
          />
          <Input
            name='icon'
            label='Icon'
            sx={{ my: "15px" }}
            fullWidth
            control={control}
          />
          {check === true ? (
            <Button
              type='submit'
              variant='contained'
              fullWidth
              color='success'
              sx={{ mt: "20px", background: "orange", color: "black" }}>
              UPdate Brand
            </Button>
          ) : (
            <Button
              type='submit'
              variant='contained'
              fullWidth
              color='success'
              sx={{ mt: "20px", background: "blue", color: "black" }}>
              ADD Brand
            </Button>
          )}
        </Box>
      </Paper>
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
        <Table
          deletecategory={handledelete}
          datacategory={datacategory}
          update={handleupdate}
        />
      </Paper>
    </Box>
  );
}
