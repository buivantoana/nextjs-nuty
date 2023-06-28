import { addstar, deleteorder, getcart, getcategory, getrole } from "@/service";
import { Box, Rating, Stack, Typography } from "@mui/material";
import * as React from "react";
import { MyContext } from "../main";
import { useRouter } from "next/router";

export function Star({
  check,
  toggle,
  data,
  destroy,
}: {
  check: boolean;
  toggle: any;
  data: any;
  destroy: any;
}) {
  let [star, setstart] = React.useState(5);
  const handlestar = (e: any) => {
    setstart(e.target.value);
  };
  const handleaddstar = async () => {
    let res = await addstar({ product_id: data[0].product_id, star: star });
    if (res && res.status === 1) {
      destroy(data[0].id);
      toggle();
    }
  };
  return (
    <div>
      <div className={`checkstar ${check ? "visible" : "hidden"}`}>
        <Box
          width={600}
          height={380}
          bgcolor={"white"}
          sx={{ borderRadius: "10px", padding: "20px" }}>
          <Typography textAlign={"center"} my={"20px"} fontSize={"30px"}>
            Đánh Giá Sao Sản Phẩm
          </Typography>
          <Stack direction={"row"}>
            <Box>
              <img
                width={150}
                height={150}
                src={data && data.length && data[0].image}
                alt=''
              />
            </Box>
            <Box>
              <p style={{ fontSize: "20px" }}>
                {data && data.length && data[0].productname}
              </p>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={"20px"}>
                <Rating
                  name='size-medium'
                  onChange={(e) => handlestar(e)}
                  size='large'
                  defaultValue={star}
                />
              </Box>
            </Box>
          </Stack>
          <Box textAlign={"center"} sx={{ cursor: "pointer" }} mt={"40px"}>
            <button
              onClick={handleaddstar}
              style={{
                width: "120px",
                height: "40px",
                borderRadius: "10px",
                background: "#3a2665",
                color: "white",
              }}>
              Đánh Giá
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
