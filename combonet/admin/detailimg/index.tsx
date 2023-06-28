import { Input } from "@/combonet/Input/Input";
import { Box, Button, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import CommonUtils from "../../../ultil/CommonUtils";
import axios from "../../../axios/axios";
import { adddetailimg, getproduct } from "@/service";
import { useRouter } from "next/router";

export interface IHomeProps {
  product: [
    {
      id: number;
      productname: string;
    }
  ];
}

export function Home({ product }: IHomeProps) {
  const [image, setimage] = React.useState<any[]>([]);

  const [id, setid] = React.useState<any>(0);
  let router = useRouter();
  let name: string | undefined = router.query?.detail?.[1];

  const handleloginsubmit = async () => {
    let res = image.map(async (item) => {
      return await adddetailimg({ types: name, image: item, product_id: id });
    });
    setimage([]);
  };

  const handleonchanimage = async (e: any) => {
    let files = e.target.files;

    for (let index = 0; index < files.length; index++) {
      let file = await CommonUtils.getBase64(files[index]);
      setimage((prev: any) => [...prev, file]);
    }
  };
  const handleChange = (e: any) => {
    setid(e);
  };

  return (
    <Box>
      <input type='file' multiple onChange={(e) => handleonchanimage(e)} />
      <select
        style={{ width: "400px", height: "50px" }}
        onChange={(e) => handleChange(e.target.value)}>
        <option>...Product_ID...</option>
        {product &&
          product.length &&
          product.map((item: any, index: number) => {
            return (
              <option key={index} value={item.id}>
                {item.productname}
              </option>
            );
          })}
      </select>

      <Button
        onClick={handleloginsubmit}
        type='submit'
        variant='contained'
        fullWidth
        color='success'
        sx={{ mt: "20px", background: "blue", color: "black" }}>
        ADD Brand
      </Button>
    </Box>
  );
}
