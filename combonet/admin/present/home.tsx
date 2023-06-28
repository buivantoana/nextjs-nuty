import { Input } from "@/combonet/Input/Input";
import { Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import CommonUtils from "../../../ultil/CommonUtils";
import axios from "../../../axios/axios";
import dynamic from "next/dynamic";
import {
  addpresent,
  getallproductpresent,
  getbrand,
  updatebrand,
} from "@/service";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const [image, setimage] = React.useState("");
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      present: "",
    },
  });

  const handleloginsubmit = async (value: any) => {
    let res = await addpresent({
      product_id: id,

      presentname: value.present,

      image: image,
    });
  };
  let [present, setpresent] = React.useState([]);
  let [id, setid] = React.useState(0);
  async function getbranddata() {
    let res = await getallproductpresent();
    if (res && res.status === 1) {
      setpresent(res.data);
    }
  }

  React.useEffect(() => {
    getbranddata();
  }, []);
  const handleonchanimage = async (e: any) => {
    let files = e.target.files;

    let file = files[0];

    if (file) {
      setimage(await CommonUtils.getBase64(file));
    }
  };

  const handleChange = (e: any) => {
    setid(e);
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
        <select
          style={{ width: "400px", height: "50px" }}
          onChange={(e) => handleChange(e.target.value)}>
          <option>...Product_ID...</option>
          {present &&
            present.length &&
            present.map((item: any, index: number) => {
              return (
                <option key={index} value={item.id}>
                  {item.productname}
                </option>
              );
            })}
        </select>
        <Box>
          <input type='file' onChange={(e) => handleonchanimage(e)} />

          <Box
            component={"form"}
            onSubmit={handleSubmit(handleloginsubmit)}
            encType='multipart/form-data'>
            <Input
              name='present'
              label='PresentName'
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
              ADD Present
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
