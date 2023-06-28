import { Input } from "@/combonet/Input/Input";
import { Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";

import axios from "../../../axios/axios";
import { addrole, getcategory, getrole, updaterole } from "@/service";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { update } from "lodash";

let Table = dynamic(() => import("./table"), { ssr: false });

export function Home() {
  // const [category, setcategory] = React.useState([]);
  const [categoryid, setcategoryid] = React.useState("");
  const {
    data: category,
    error,
    mutate,
  } = useSWR(
    "/getcategory",
    async () => {
      const res = await axios.get("/getcategory");
      return res.data;
    },
    {
      revalidateOnFocus: false,
    }
  );
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm({
    defaultValues: {
      role: "",
    },
  });
  let [roledata, setroledata] = React.useState([]);
  let [id, setid] = React.useState(0);
  let [check, setcheck] = React.useState(false);
  async function getroledata() {
    let data: any = await getrole();

    if (data && data.status === 0) {
      setroledata(data.data);
    }
  }

  React.useEffect(() => {
    getroledata();
  }, []);
  const handleloginsubmit = async (value: any) => {
    if (check === true) {
      let res = await updaterole({ id: id, Rolename: value.role });
      if (res && res.status === 0) {
        getroledata();
        setValue("role", "");
        setcheck(!check);
      }
    } else {
      let data = await addrole({
        rolename: value.role,
        categoryid: +categoryid,
      });
      if (data && data.status === 0) {
        getroledata();
        setValue("role", "");
      }
    }
  };

  const handleupdate = (id: number) => {
    let arr: any = roledata.filter((item: any) => {
      return item.id === id;
    });
    setid(id);
    setcheck(!check);
    setValue("role", arr[0].Rolename);
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
            <select
              className='form-select'
              onChange={(e) => setcategoryid(e.target.value)}>
              <option>Open this select Category</option>
              {category &&
                category.length &&
                category.map(
                  (
                    item: { id: number; categoryname: string },
                    index: number
                  ) => {
                    return (
                      <>
                        <option key={index} value={item.id}>
                          {item.categoryname}
                        </option>
                      </>
                    );
                  }
                )}
            </select>
          )}
          <Box component={"form"} onSubmit={handleSubmit(handleloginsubmit)}>
            <Input
              name='role'
              label='Role'
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
          datarole={roledata}
          deleterole={handledelete}
        />
      </Paper>
    </Box>
  );
}
