import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import { ShipmentDetailinter } from "@/pages/shipmentdetail";
import { addorder, deletecart } from "@/service";
import { MyContext } from "../main";
import { useRouter } from "next/router";

export function ShipmentDetailContainer({
  tinh,
  huyen,
  xa,
  cartdata,
}: ShipmentDetailinter) {
  let [d, setd] = React.useState([]);
  let [w, setw] = React.useState([]);

  let [name, setname] = React.useState("");
  let [thanhpho, setthanhpho] = React.useState("");
  let [huyendata, sethuyendata] = React.useState("");
  let [xadata, setxadata] = React.useState("");
  let [phone, setphone] = React.useState("");
  let [email, setemail] = React.useState("");
  let [address, setaddress] = React.useState("");
  let [description, setdescription] = React.useState("");

  const handlechangetinh = (e: number) => {
    let sethuyen: any =
      huyen &&
      huyen.length &&
      huyen.filter((item) => {
        return item.province_code === +e;
      });
    let datatinh: any = tinh.filter((item) => {
      return item.code === +e;
    });

    setthanhpho(datatinh[0].name);
    setd(sethuyen);
  };

  const handlechangehuyen = (e: number) => {
    let setxa: any =
      xa &&
      xa.length &&
      xa.filter((item) => {
        return item.district_code === +e;
      });

    let datahuyen: any = huyen.filter((item) => {
      return item.code === +e;
    });
    sethuyendata(datahuyen[0].name);
    setw(setxa);
  };
  const handlechangexa = (e: number) => {
    let dataxa: any = xa.filter((item) => {
      return item.code === +e;
    });
    setxadata(dataxa[0].name);
  };
  let allcount = 0;
  let history = useRouter();
  let value = React.useContext(MyContext);
  const handleorder = async () => {
    cartdata &&
      cartdata.length &&
      cartdata.map(async (item) => {
        let res = await addorder({
          product_id: item.product_id,
          productname: item.productname,
          custumer_id: item.custumer_id,
          quancity: item.quancity,
          price: item.price,
          image: item.image,
          status: 0,
          phone: phone,
          deliveryaddress: address,
          name: name,
          address: `${xadata}-${huyendata}-${thanhpho}`,
          city: `${xadata}-${huyendata}-${thanhpho}`,
          description: description,
        });
        if (res && res.status === 1) {
          await deletecart({ id: item.id });
          value.setcart();
          history.push("/ordersucess");
        }
      });
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Thông tin Giao hàng' />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Stack direction={"row"}>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <button
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    background: "#3a2665",
                    color: "white",
                  }}>
                  1
                </button>
              </Box>
              <Box width={369} height={2} bgcolor={"#3a2665"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <button
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    background: "white",
                  }}>
                  2
                </button>
              </Box>
              <Box width={369} height={2} bgcolor={"white"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <button
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    background: "white",
                  }}>
                  3
                </button>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          display={"flex"}
          mt={"10px"}
          mb={"60px"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <p style={{}}>Đăng nhập</p>
              </Box>
              <Box width={290} height={2} bgcolor={"transparent"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <p style={{}}>Thông tin Giao hàng</p>
              </Box>
              <Box width={300} height={2} bgcolor={"transparent"}></Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box textAlign={"center"}>
                <p style={{}}>Hoàn Thành</p>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box width={"810px"}>
            <Box padding={"20px"} bgcolor={"white"} borderRadius={"15px"}>
              <Typography mb={"20px"}>THÔNG TIN GIAO HÀNG</Typography>
              <hr />
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Họ tên *</Box>
                <Box width={"80%"}>
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Vui lòng nhập họ tên'
                    aria-label='.form-control-sm example'
                  />
                </Box>
              </Stack>

              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Điện thoại *</Box>
                <Box width={"80%"}>
                  <input
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Số điện thoại'
                    aria-label='.form-control-sm example'
                  />
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Email</Box>
                <Box width={"80%"}>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Email'
                    aria-label='.form-control-sm example'
                  />
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Tỉnh/Thành phố *</Box>
                <Box width={"80%"}>
                  <select
                    className='form-select form-select-sm'
                    aria-label='.form-select-sm example'
                    onChange={(e: any) => handlechangetinh(e.target.value)}>
                    <option selected>Chọn Tỉnh/Thành Phố</option>
                    {tinh &&
                      tinh.length &&
                      tinh.map((item, index) => {
                        return (
                          <option key={index} value={item.code}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Quận/Huyện *</Box>
                <Box width={"80%"}>
                  <select
                    className='form-select form-select-sm'
                    aria-label='.form-select-sm example'
                    onChange={(e: any) => handlechangehuyen(e.target.value)}>
                    <option selected>Chọn Quận/Huyện</option>
                    {d &&
                      d.length &&
                      d.map((item: any, index) => {
                        return (
                          <option key={index} value={item.code}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Phường/Xã *</Box>
                <Box width={"80%"}>
                  <select
                    onChange={(e: any) => handlechangexa(e.target.value)}
                    className='form-select form-select-sm'
                    aria-label='.form-select-sm example'>
                    <option selected>Chọn Phường/Xã</option>
                    {w &&
                      w.length &&
                      w.map((item: any, index) => {
                        return (
                          <option key={index} value={item.code}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Địa chỉ giao hàng *</Box>
                <Box width={"80%"}>
                  <input
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Địa chỉ nhận hàng'
                    aria-label='.form-control-sm example'
                  />
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} my={"25px"}>
                <Box width={"20%"}>Ghi chú</Box>
                <Box width={"80%"}>
                  <div className='form-floating'>
                    <textarea
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                      style={{ height: "100px" }}
                      className='form-control'
                      placeholder='Leave a comment here'></textarea>
                    <label>Comments</label>
                  </div>
                </Box>
              </Stack>
            </Box>
            <Box
              padding={"20px"}
              bgcolor={"white"}
              my={"30px"}
              borderRadius={"15px"}>
              <Typography mb={"20px"}>PHƯƠNG THỨC VẬN CHUYỂN</Typography>
              <hr />
              <Stack
                direction={"row"}
                my={"20px"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"20px"}>
                <i className='fa-regular fa-circle-dot'></i>
                <Box
                  width={"90%"}
                  border={"1px solid grey"}
                  borderRadius={"10px"}
                  padding={"15px"}>
                  <p style={{ fontWeight: "700" }}>MIỄN PHÍ VẬN CHUYỂN</p>
                  <p style={{ margin: "10px 0" }}>
                    <b style={{ color: "red" }}> FREESHIP</b> đơn hàng từ{" "}
                    <span style={{ color: "red" }}>99.000</span> Đồng (áp dụng
                    cho <b>nội</b> thành Hồ Chí Minh).
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b style={{ color: "red" }}> FREESHIP</b> đơn hàng từ{" "}
                    <span style={{ color: "red" }}>199.000</span> Đồng (áp dụng
                    cho <b>ngoại</b> thành Hồ Chí Minh).
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b style={{ color: "red" }}> FREESHIP</b>
                    <b>toàn quốc</b> đơn hàng từ .
                    <span style={{ color: "red" }}>199.000</span> Đồng
                  </p>
                  <p style={{ margin: "10px 0", fontWeight: "700" }}>
                    Phí vận chuyển có thể thay đổi nếu đơn hàng có trọng lượng
                    trên 2kg hoặc kích thước đóng gói lớn hơn (30cmx20cmx15cm)
                  </p>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box width={"392px"}>
            <Box padding={"20px"} bgcolor={"white"} borderRadius={"15px"}>
              <Typography mb={"20px"}>THÔNG TIN ĐƠN HÀNG</Typography>
              <hr />
              <Box
                width={"100%"}
                height={200}
                className='shipmentdetail'
                sx={{ overflowY: "scroll" }}>
                {cartdata &&
                  cartdata.length &&
                  cartdata.map((item, index) => {
                    let count = item.price * item.quancity;
                    allcount += count;
                    return (
                      <Stack
                        key={index}
                        my={"20px"}
                        direction={"row"}
                        justifyContent={"space-between"}
                        width={"100%"}>
                        <Box width={175} display={"flex"} gap={"10px"}>
                          <img
                            src={item.image}
                            width={50}
                            style={{ height: "50px !important" }}
                            alt=''
                          />
                          <p style={{ fontSize: "13px" }}>{item.productname}</p>
                        </Box>
                        <Box>
                          <p>{item.price} ₫</p>
                          <p>x {item.quancity}</p>
                          <p style={{ fontWeight: "700" }}>{count} ₫</p>
                        </Box>
                      </Stack>
                    );
                  })}
              </Box>

              <hr />
              <Stack
                direction={"row"}
                my={"20px"}
                justifyContent={"space-between"}>
                <p style={{ fontWeight: "700" }}>Tổng tiền hàng chưa giảm</p>
                <p>{allcount} ₫</p>
              </Stack>
              <Stack
                direction={"row"}
                my={"20px"}
                justifyContent={"space-between"}>
                <p style={{ fontWeight: "700" }}>Phí vận chuyển</p>
                <p>0 ₫</p>
              </Stack>
              <Stack
                direction={"row"}
                my={"20px"}
                justifyContent={"space-between"}>
                <p style={{ fontWeight: "700" }}>Giảm giá</p>
                <p>0 ₫</p>
              </Stack>
              <hr />
              <Stack
                direction={"row"}
                my={"20px"}
                justifyContent={"space-between"}>
                <p style={{ fontWeight: "700" }}>Tổng cộng:</p>
                <p style={{ fontWeight: "700" }}>{allcount} ₫</p>
              </Stack>
            </Box>
            <Box
              padding={"20px"}
              bgcolor={"white"}
              my={"30px"}
              borderRadius={"15px"}>
              <Typography mb={"20px"}>PHƯƠNG THỨC THANH TOÁN</Typography>
              <hr />
              <Stack
                direction={"row"}
                my={"20px"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"20px"}>
                <i className='fa-regular fa-circle-dot'></i>
                <Box
                  width={"90%"}
                  border={"1px solid grey"}
                  borderRadius={"10px"}
                  padding={"15px"}
                  display={"flex"}
                  alignItems={"center"}>
                  <img
                    src='https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4'
                    alt=''
                  />
                  <p style={{ fontWeight: "700" }}>
                    Thanh toán khi nhận hàng (COD)
                  </p>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          my={"30px"}
          gap={"20px"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={255}
            height={46}
            gap={"10px"}
            borderRadius={"8px"}
            bgcolor={"white"}>
            <i className='fa-solid fa-arrow-left-long'></i>
            <p>TIẾP TỤC MUA HÀNG</p>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={275}
            height={46}
            gap={"10px"}
            borderRadius={"8px"}
            bgcolor={"#3a2665"}
            color={"white"}
            onClick={handleorder}>
            <p>TIẾN HÀNH THANH TOÁN</p>
            <i className='fa-solid fa-arrow-right-long'></i>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
