import { getcart, getcategory, getrole } from "@/service";
import { Box, Stack } from "@mui/material";
import * as React from "react";
import { MyContext } from "../main";
import { useRouter } from "next/router";

export interface IModalProps {}

export function Cart({
  check,
  toggle,
  data,
}: {
  check: boolean;
  toggle: any;
  data: any;
}) {
  let count =
    data &&
    data.length &&
    data.map((acc: any) => {
      return acc.price * acc.quancity;
    });
  let all =
    count &&
    count.length &&
    count.reduce((acc: number, cur: number) => {
      return acc + cur;
    });
  let history = useRouter();
  return (
    <div>
      <div className={`checkcart ${check ? "visible" : "hidden"}`}>
        <div className='cart-top'>
          <p>
            Tổng cộng:
            <b>
              {all} <sup>đ</sup>
            </b>
          </p>
          <i onClick={toggle} className='fa-solid fa-xmark'></i>
        </div>
        <hr
          style={{
            width: "100%",
            borderTop: "3px solid gray",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <Stack sx={{ height: "240px" }}>
          {data &&
            data.length &&
            data.map((item: any, index: number) => {
              return (
                <div key={index} className='cart-bottom'>
                  <img src={item.image} alt='' width={55} height={55} />
                  <div className='cart-bottom-right'>
                    <h5>{item.productname}</h5>
                    <div className='cart-bottom-right-flex'>
                      <span>
                        Số lượng:{" "}
                        <b style={{ color: "black" }}>{item.quancity}</b>
                      </span>
                      <p>
                        {item.price} <sup>đ</sup>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Stack>
        {data && data.length > 0 ? (
          <Box textAlign={"center"} onClick={() => history.push("/cart")}>
            <button
              style={{
                width: "220px",
                height: "35px",
                background: "#3a2665",
                color: "white",
                borderRadius: "12px",
              }}>
              Tiến hành Thanh toán <i className='fa-solid fa-arrow-right'></i>
            </button>
          </Box>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
