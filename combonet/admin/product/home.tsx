import { Input } from "@/combonet/Input/Input";
import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";

import axios from "../../../axios/axios";
import { addproduct, getproduct, updateproduct } from "@/service";
import useSWR from "swr";
import CommonUtils from "@/ultil/CommonUtils";
import { useRouter } from "next/router";
// import { TableHome } from './table';
import dynamic from "next/dynamic";
import { update } from "lodash";

const TableHome = dynamic(() => import("./table"), {
  ssr: false,
});
export function Home() {
  const [image, setimage] = React.useState("");
  const [cate, setcategory] = React.useState<string | number>(0);
  const [bra, setbrand] = React.useState<string | number>(0);
  const [ro, setrole] = React.useState<string | number>(0);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm({
    defaultValues: {
      productname: "",
      productdes: "",
      price: 0,
      saleprice: 0,
      type: 0,
      present: 0,
    },
  });
  let router: any = useRouter();

  const handleloginsubmit = async (value: any) => {
    if (check === true) {
      let res = await updateproduct({
        productname: value.productname,

        productdes: value.productdes,
        price: value.price,
        saleprice: value.saleprice,

        type: value.type,
        present: value.present,
        id: id,
        types: types,
      });
      if (res && res.status === 0) {
        setcheck(!check);
        router.reload();
      }
    } else {
      let res = await addproduct({
        types: router.query.slug[1],
        productname: value.productname,
        category_id: cate,
        brand_id: bra,
        role_id: ro,
        productdes: value.productdes,
        price: +value.price,
        saleprice: +value.saleprice,
        type: value.type,
        image: image,
        present: value.present,
      });
    }
  };

  const {
    data: category,
    error: errcategory,
    mutate: mutatecategory,
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
    data: role,
    error: errorrole,
    mutate: mutayerole,
  } = useSWR(
    "/getrole",
    async () => {
      const res = await axios.get("/getrole");
      return res.data;
    },
    {
      revalidateOnFocus: false,
    }
  );
  const {
    data: brand,
    error,
    mutate,
  } = useSWR(
    "/getbrand",
    async () => {
      const res = await axios.post("/getbrand", { limit: "full" });
      return res.data;
    },
    {
      revalidateOnFocus: false,
    }
  );
  let types = router && router.query.slug && router.query?.slug[1];
  let [dataproduct, setdataproduct] = React.useState([]);
  let [count, setcount] = React.useState(0);
  async function getproductdata() {
    let data: any = await getproduct({ limit: 8, types: types });

    if (data && data.status === 0) {
      setcount(data.count);
      setdataproduct(data.data);
    }
  }

  React.useEffect(() => {
    getproductdata();
  }, [types]);

  const handleonchanimage = async (e: any) => {
    let files = e.target.files;

    let file = files[0];

    if (file) {
      setimage(await CommonUtils.getBase64(file));
    }
  };

  const handlechangepagi = async (page: any) => {
    let limit = 8;
    let offset = (+page - 1) * limit;
    let res = await getproduct({
      limit: limit,
      types: types,
      page: +page,
      offset,
    });
    if (res && res.status === 0) {
      setdataproduct(res.data);
    }
  };
  let [check, setcheck] = React.useState(false);
  let [id, setid] = React.useState(0);

  const handleupdate = (id: number) => {
    let arr: any = dataproduct.filter((item: any) => {
      return item.id === id;
    });
    setid(id);
    setcheck(!check);
    setValue("productname", arr[0].productname);
    setValue("price", arr[0].price);
    setValue("saleprice", arr[0].saleprice);
    setValue("type", arr[0].type);
    setValue("present", arr[0].present);
    setValue("productdes", arr[0].productdes);
  };
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "1000px",
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
            name='productname'
            label='ProductName'
            sx={{ my: "15px" }}
            control={control}
          />

          <Input
            name='productdes'
            label='Description'
            sx={{ my: "15px" }}
            control={control}
          />
          <Input
            type='number'
            name='price'
            label='Price'
            sx={{ my: "15px" }}
            control={control}
          />
          <Input
            type='number'
            name='saleprice'
            label='Saleprice'
            sx={{ my: "15px" }}
            control={control}
          />

          <Input
            type='number'
            name='type'
            label='Type'
            sx={{ my: "15px" }}
            control={control}
          />
          <Input
            type='number'
            name='present'
            label='Present'
            sx={{ my: "15px" }}
            control={control}
          />
          {check === true ? (
            ""
          ) : (
            <div
              className=''
              style={{
                width: "780px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <input
                type='file'
                style={{ width: "230px" }}
                className='form-control'
                onChange={handleonchanimage}
              />
              <div className='input-group mb-3' style={{ width: "300px" }}>
                <select
                  className='form-select'
                  onChange={(e) => setcategory(e.target.value)}>
                  <option selected>Category...</option>
                  {category &&
                    category.length &&
                    category.map(
                      (
                        item: { id: number; categoryname: string },
                        index: number
                      ) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.categoryname}
                          </option>
                        );
                      }
                    )}
                </select>
              </div>
              <div className='input-group mb-3' style={{ width: "300px" }}>
                <select
                  className='form-select'
                  onChange={(e) => setrole(e.target.value)}>
                  <option selected>Role...</option>
                  {role &&
                    role.length &&
                    role.map(
                      (
                        item: { id: number; Rolename: string },
                        index: number
                      ) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.Rolename}
                          </option>
                        );
                      }
                    )}
                </select>
              </div>
              <div className='input-group mb-3' style={{ width: "300px" }}>
                <select
                  className='form-select'
                  onChange={(e) => setbrand(e.target.value)}>
                  <option selected>Brand...</option>
                  {brand &&
                    brand.length &&
                    brand.map(
                      (
                        item: { id: number; brandname: string },
                        index: number
                      ) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.brandname}
                          </option>
                        );
                      }
                    )}
                </select>
              </div>
            </div>
          )}
          {check === true ? (
            <Button
              type='submit'
              variant='contained'
              fullWidth
              color='success'
              sx={{ mt: "20px", background: "orange", color: "black" }}>
              UPdate Product
            </Button>
          ) : (
            <Button
              type='submit'
              variant='contained'
              fullWidth
              color='success'
              sx={{ mt: "20px", background: "blue", color: "black" }}>
              ADD Product
            </Button>
          )}
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          py: "40px",
          mt: "50px",
          textAlign: "center",
          px: "20px",
        }}>
        <TableHome update={handleupdate} dataproduct={dataproduct} />
        <Box
          margin={"20px 0"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Pagination
            onChange={(event, page) => handlechangepagi(page)}
            count={Math.ceil(count / 8)}
            color='secondary'
          />
        </Box>
      </Paper>
    </Box>
  );
}
