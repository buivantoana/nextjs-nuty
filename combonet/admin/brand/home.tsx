import { Input } from "@/combonet/Input/Input";
import { Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import CommonUtils from "../../../ultil/CommonUtils";
import axios from "../../../axios/axios";
import dynamic from "next/dynamic";
import { getbrand, updatebrand } from "@/service";

export interface IHomeProps {}
let Table = dynamic(() => import("./table"), { ssr: false });
export function Home(props: IHomeProps) {
  const [image, setimage] = React.useState("");
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      brandname: "",
    },
  });

  const handleloginsubmit = async (value: any) => {
    if (check === true) {
      let res = await updatebrand({ brandname: value.brandname, id: id });
      if (res && res.status === 0) {
        setcheck(!check);
        setValue("brandname", "");
        getbranddata();
      }
    } else {
      let res = await axios.post("/addbrand", {
        brandname: value.brandname,
        image,
      });
      if (res && res.status === 0) {
        setValue("brandname", "");
        getbranddata();
      }
    }
  };
  let [branddata, setbranddata] = React.useState([]);
  let [id, setid] = React.useState(0);
  let [check, setcheck] = React.useState(false);
  async function getbranddata() {
    let data: any = await getbrand();

    if (data && data.status === 0) {
      setbranddata(data.data);
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
  const handleupdate = (id: number) => {
    let arr: any = branddata.filter((item: any) => {
      return item.id === id;
    });
    setid(id);
    setcheck(!check);
    setValue("brandname", arr[0].brandname);
  };
  const handledelete = async (id: number) => {
    //  let res = await deleterole({ id: id });
    //  if (res && res.status === 0) {
    //    getroledata();
    //  }
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
        <Box>
          {check === true ? (
            ""
          ) : (
            <input type='file' onChange={(e) => handleonchanimage(e)} />
          )}
          <Box
            component={"form"}
            onSubmit={handleSubmit(handleloginsubmit)}
            encType='multipart/form-data'>
            <Input
              name='brandname'
              label='BrandName'
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
                Update Brand
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
        }}>
        <Table
          update={handleupdate}
          deletebrand={handledelete}
          databrand={branddata}
        />
      </Paper>
    </Box>
  );
}
