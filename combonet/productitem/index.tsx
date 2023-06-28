import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Rating,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import Image from "next/image";
import logo from "../../image/CSD/bộ sản phẩm chăm sóc da/1664241877073-bo-doi-la-roche-posay-kem-duong-giam-mun-gel-rua-mat.jpeg";
import logo2 from "../../image/CSD/kem chống nắng mặt/z4174088200210_14820673d2870e4547fbf56c611a0768.jpg";
import Slider from "react-slick";
import Link from "next/link";
import { Slider as SliderMUI } from "@mui/material";
import { Input } from "../Input/Input";
import { useRouter } from "next/router";
import { MyContext } from "../main";
import {
  addcart,
  addcomment,
  addcommentchild,
  deleteallcommentchild,
  deletecommentchild,
  destroycomment,
  getcomment,
  updatecomment,
} from "@/service";
import { item } from "@/pages/product/[...productitem]";
import moment from "moment";
import { update } from "lodash";

export function ProductItem({ product, detailimg, detaildes }: item) {
  const [quancity, setquancity] = React.useState(1);
  const [detail, setdetail] = React.useState(1);
  const [flag, setflag] = React.useState(false);
  const settings = {
    customPaging: (i: number) => {
      return (
        <div>
          <img
            className='productimgchild'
            src={detailimg && detailimg.length && detailimg[i].image}
            width={74}
            height={74}
            alt='slider'
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let tb = 0;
  let count = 0;
  if (product && product.length) {
    product &&
      product.length &&
      product[0].Stars.map((item: any) => {
        count++;
        return (tb += item.star);
      });
  }

  let star: any = (tb / count).toFixed(1);

  const handlequancity = (id: string) => {
    if (id === "-") {
      setquancity(quancity - 1);
    }
    if (id === "+") {
      setquancity(quancity + 1);
    }
  };
  let array = [
    {
      id: 1,
      title: "GIỚI THIỆU SẢN PHẨM ",
    },
    {
      id: 2,
      title: "THÀNH PHẦN",
    },
    {
      id: 3,
      title: "CÔNG DỤNG",
    },
    {
      id: 4,
      title: "HƯỚNG DẪN SỬ DỤNG",
    },
    {
      id: 5,
      title: "THÔNG SỐ SẢN PHẨM",
    },
  ];
  const createMarkup = (htmlContent: string): { __html: string } => {
    return { __html: htmlContent };
  };
  let value = React.useContext(MyContext);
  let history = useRouter();

  const handleaddcart = async () => {
    if (value && value.flag.authen) {
      let res = await addcart({
        product_id: product[0].id,
        custumer_id: value.flag.data.id,
        productname: product[0].productname,
        price: product[0].price * quancity,
        quancity: quancity,
        image: product[0].image,
      });
      if (res && res.status === 0) {
        value.setcart();
      }
      if (res && res.status === 1) {
        value.setcart();
      }
    } else {
      history.push("/login");
    }
  };
  const handleClick = async () => {
    if (value && value.flag.authen) {
      let res = await addcart({
        product_id: product[0].id,
        custumer_id: value.flag.data.id,
        productname: product[0].productname,
        price: product[0].price * quancity,
        quancity: quancity,
        image: product[0].image,
      });

      if (res && res.status === 0) {
        history.push("/cart");
        value.setcart();
      }
    } else {
      history.push("/login");
    }
  };
  let [starvalue, setstarvalue] = React.useState(5);
  let [description, setdescription] = React.useState("");
  let [name, setname] = React.useState("");
  let [descriptionchild, setdescriptionchild] = React.useState("");
  let [namechild, setnamechild] = React.useState("");
  let [commentdata, setcommentdata] = React.useState<any>([]);
  let [editcommentdata, seteditcommentdata] = React.useState<any>([]);
  let [flagcomment, setflagcomment] = React.useState(0);
  let [type, settype] = React.useState(0);

  const handlestar = (e: any) => {
    setstarvalue(e.target.value);
  };
  const handledescription = (e: any) => {
    setdescription(e.target.value);
  };
  const handlename = (e: any) => {
    setname(e.target.value);
  };

  const handlecomment = async () => {
    if (value.flag.data.id) {
      let res = await addcomment({
        name: name,
        description: description,
        custumer_id: value.flag.data.id,
        product_id: product[0].id,
        star: starvalue,
        now: new Date().getTime(),
      });
      if (res) {
        getcommentdata();
        getcommentdata();
        setname("");
        setdescription("");
        setstarvalue(5);
      }
    } else {
      history.push("/login");
    }
  };

  async function getcommentdata() {
    let data = await getcomment({ id: product[0].id });
    if (data && data.status === 1) {
      setcommentdata(data.data);
    }
  }
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      getcommentdata();
    }
  }, []);

  const hanldeeditcomment = async (id: number) => {
    let edit = commentdata.filter((item: any) => {
      return item.id === id;
    });
    if (edit) {
      setname(edit[0].name);
      setdescription(edit[0].description);
      setstarvalue(+edit[0].raiting);
      seteditcommentdata(edit);
    }
  };
  const handleeditcomment = async () => {
    let res = await updatecomment({
      id: editcommentdata[0].id,
      description: description,
      raiting: starvalue,
    });
    if (res && res.status === 1) {
      seteditcommentdata([]);
      getcommentdata();
      setname("");
      setdescription("");
      setstarvalue(5);
    }
  };

  const handledestroycomment = async (id: number) => {
    let res = await destroycomment({ id: id });
    let child = await deleteallcommentchild({ id: id });
    if (res && res.status === 1 && child && child.status === 1) {
      getcommentdata();
    }
  };

  const handlerep = (id: number, type: number) => {
    setflagcomment(id);
    settype(type);
  };
  const handleclose = () => {
    setflagcomment(0);
  };

  const handlecommentchild = async (id: number) => {
    let res = await addcommentchild({
      product_id: product[0].id,
      comment_id: id,
      name: namechild,
      description: descriptionchild,
      custumer_id: value.flag.data.id,
      now: new Date().getTime(),
    });
    if (res && res.status === 1) {
      setflagcomment(0);
      setdescriptionchild("");
      setnamechild("");
      getcommentdata();
    }
  };

  const handledestroycommentchild = async (id: number) => {
    let res = await deletecommentchild({ id: id });

    if (res && res.status === 1) {
      getcommentdata();
    }
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Chi tiết sản phẩm' />
        <Stack direction={"row"} justifyContent={"space-between"} mb={"50px"}>
          <Box width={916}>
            <Box
              width={"100%"}
              borderRadius={"15px"}
              bgcolor={"white"}
              padding={"20px"}
              height={630}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingBottom={"20px"}
                marginBottom={"10px"}
                borderBottom={"1px solid grey"}>
                <Typography fontSize={"22px"}>
                  {product && product.length && product[0].productname}
                </Typography>
                <i className='fa-regular fa-heart'></i>
              </Box>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Box width={"400px"}>
                  <Slider className='productitem' {...settings}>
                    {detailimg &&
                      detailimg.length &&
                      detailimg.map((item, index) => {
                        return (
                          <div key={index}>
                            <img
                              className='productitemimg'
                              src={item.image}
                              width={400}
                              height={400}
                              alt='slider'
                            />
                          </div>
                        );
                      })}
                  </Slider>
                </Box>
                <Box width={365}>
                  <Box
                    width={"100%"}
                    height={147}
                    bgcolor={"#f5f5f5"}
                    marginTop={"40px"}
                    padding={"20px 10px"}>
                    <span
                      style={{
                        fontSize: "30px",
                        paddingRight: "20px",
                        fontWeight: "700",
                      }}>
                      {product &&
                        product.length &&
                        product[0].price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                    </span>
                    <span
                      style={{ color: "grey", textDecoration: "line-through" }}>
                      {product &&
                        product.length &&
                        product[0].saleprice.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                    </span>
                    <Box display={"flex"} gap={"10px"}>
                      <Rating
                        name='half-rating'
                        defaultValue={star}
                        precision={0.5}
                      />
                      {product && product.length && product[0].type !== 0 ? (
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            width: "75px",
                            height: "20px",
                            background: "#3a2665",
                            color: "orange",
                            fontSize: "9px",
                            borderRadius: "5px",
                          }}>
                          <p>Best seller</p>
                        </Box>
                      ) : (
                        ""
                      )}
                      <Box
                        width={37}
                        height={20}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                          background:
                            "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                          borderRadius: "5px",
                          margin: "0 10px 0  5px",
                        }}>
                        <p style={{ fontSize: "13px" }}>-15%</p>
                      </Box>
                    </Box>
                    <Box display={"flex"}>
                      <p
                        style={{
                          borderRight: "1px solid grey",
                          paddingRight: "10px",
                          fontSize: "13px",
                          color: "grey",
                        }}>
                        {product && product.length && product[0].productdes}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "grey",
                          marginLeft: "10px",
                        }}>
                        Thương hiệu:{" "}
                        {product &&
                          product.length &&
                          product[0].Brand.brandname}
                      </p>
                    </Box>
                  </Box>
                  {product &&
                  product[0].Presents &&
                  product[0].Presents.length > 0 ? (
                    <Box
                      mt={"10px"}
                      width={"100%"}
                      height={127}
                      border={"1px solid grey"}
                      borderRadius={"5px"}>
                      <Box
                        display={"flex"}
                        gap={"15px"}
                        alignItems={"center"}
                        borderBottom={"1px solid grey"}>
                        <img
                          style={{ marginLeft: "20px" }}
                          width={55}
                          height={55}
                          src='https://png.pngtree.com/png-clipart/20221002/original/pngtree-3d-realistic-gift-box-with-red-color-and-gold-tape-png-image_8649915.png'
                          alt=''
                        />
                        <p>Quà Tặng</p>
                      </Box>
                      <Box
                        marginTop={"5px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"15px"}>
                        <i
                          style={{ marginLeft: "10px" }}
                          className='fa-regular fa-circle-dot'></i>
                        <Box
                          width={60}
                          height={60}
                          border={"1px solid grey"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}>
                          <img
                            className='present-item'
                            src={product[0].Presents[0].image}
                            alt=''
                          />
                        </Box>
                        <p style={{ fontSize: "12px", width: "230px" }}>
                          {product[0].Presents[0].presentname}
                        </p>
                      </Box>
                    </Box>
                  ) : (
                    ""
                  )}
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"18px"}
                    mt={"40px"}>
                    <Typography>SỐ LƯỢNG</Typography>
                    <ButtonGroup
                      variant='outlined'
                      aria-label='outlined button group'>
                      <Button
                        onClick={() => handlequancity("-")}
                        disabled={quancity === 0}
                        sx={{
                          bgcolor: "#f5f5f5 !important",
                          border: "1px solid grey !important",
                          marginRight: "5px",
                        }}>
                        <i className='fa-solid fa-minus'></i>
                      </Button>
                      <Button
                        sx={{
                          width: "90px",
                          border: "1px solid !important",
                          marginRight: "5px",
                        }}>
                        {quancity}
                      </Button>
                      <Button
                        onClick={() => handlequancity("+")}
                        sx={{
                          bgcolor: "#f5f5f5 !important",
                          border: "1px solid grey !important",
                        }}>
                        <i className='fa-solid fa-plus'></i>
                      </Button>
                    </ButtonGroup>
                  </Stack>
                  <Stack
                    className='addcart'
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={43}
                    width={"100%"}
                    margin={"20px 0"}
                    border={"1px solid #3a2665"}
                    borderRadius={"5px"}
                    gap={"10px"}
                    onClick={handleaddcart}>
                    <Typography fontSize={"20px"}>Thêm vào giỏ hàng</Typography>
                    <i className='fa-solid fa-cart-plus'></i>
                  </Stack>
                  <Box
                    sx={{ float: "right", cursor: "pointer" }}
                    width={173}
                    height={48}
                    borderRadius={"5px"}
                    bgcolor={"#3a2665"}
                    color={"white"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"8px"}
                    onClick={handleClick}>
                    <Typography>Mua ngay</Typography>
                    <i className='fa-solid fa-credit-card'></i>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box
              width={916}
              bgcolor={"white"}
              mt={"40px"}
              borderRadius={"15px"}
              padding={"20px 20px 85px"}
              sx={
                flag
                  ? { transition: ".8s", maxHeight: "6000px" }
                  : {
                      maxHeight: "868px",

                      transition: ".8s",
                    }
              }
              overflow={"hidden"}
              position={"relative"}>
              <Stack
                fontSize={"12px"}
                direction={"row"}
                border={"1px solid grey"}
                borderRadius={"8px"}
                overflow={"hidden"}>
                {array.map((item, index) => {
                  return (
                    <Box
                      sx={
                        detail === item.id
                          ? { bgcolor: "#3a2665", color: "white" }
                          : {}
                      }
                      onClick={() => setdetail(item.id)}
                      className='productitemdetail'
                      borderRight={"1px solid grey"}
                      key={index}
                      width={175}
                      height={44}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                      <p>{item.title}</p>
                    </Box>
                  );
                })}
              </Stack>
              {detail === 1 ? (
                <Box mt={"42px"} width={"100%"}>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      detaildes[0].introduce
                    )}></div>
                </Box>
              ) : (
                ""
              )}
              {detail === 2 ? (
                <Box mt={"42px"} width={"100%"}>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      detaildes[0].ingredient
                    )}></div>
                </Box>
              ) : (
                ""
              )}
              {detail === 3 ? (
                <Box mt={"42px"} width={"100%"}>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      detaildes[0].uses
                    )}></div>
                </Box>
              ) : (
                ""
              )}
              {detail === 4 ? (
                <Box mt={"42px"} width={"100%"}>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      detaildes[0].use
                    )}></div>
                </Box>
              ) : (
                ""
              )}
              {detail === 5 ? (
                <Box mt={"42px"} width={"100%"}>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      detaildes[0].parameter
                    )}></div>
                </Box>
              ) : (
                ""
              )}

              {detail === 1 ? (
                <Box
                  onClick={() => setflag(!flag)}
                  position={"absolute"}
                  bottom={0}
                  left={0}
                  width={"100%"}
                  height={100}
                  sx={{
                    backgroundImage: "linear-gradient(transparent,  white)",
                  }}>
                  {!flag ? (
                    <button
                      style={{
                        width: "165px",
                        height: " 44px",
                        borderRadius: " 8px",
                        background: " #3a2665",
                        color: "white",
                        margin: "30px",
                      }}>
                      Xem Thêm <i className='fa-solid fa-chevron-down'></i>
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "165px",
                        height: "44px",
                        borderRadius: "8px",
                        background: " #3a2665",
                        color: " white",
                        margin: "30px",
                      }}>
                      Rút Gọn <i className='fa-solid fa-chevron-up'></i>
                    </button>
                  )}
                </Box>
              ) : (
                ""
              )}
            </Box>
            <Box
              width={916}
              bgcolor={"white"}
              mt={"40px"}
              borderRadius={"15px"}
              padding={"20px"}>
              <Typography fontSize={"26px"} mb={"5px"}>
                Đánh giá sản phẩm
              </Typography>
              <Stack direction={"row"}>
                <Box textAlign={"center"} width={150}>
                  <Typography fontSize={"40px"} fontWeight={"bold"}>
                    4,8/5
                  </Typography>
                  <Rating name='size-medium' defaultValue={4} />
                  <p>(21 nhận xét)</p>
                </Box>
                <Box width={534}>
                  <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                    <p>5</p>
                    <i
                      style={{ color: "orange" }}
                      className='fa-solid fa-star'></i>
                    <SliderMUI
                      sx={{
                        "& .MuiSlider-thumb": {
                          display: "none",
                        },
                        "& .MuiSlider-rail": {
                          background: "grey",
                        },
                        width: "90%",
                        color: "orange",
                      }}
                      defaultValue={80}
                      aria-label='Small'
                      valueLabelDisplay='auto'
                    />
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                    <p>4</p>
                    <i
                      style={{ color: "orange" }}
                      className='fa-solid fa-star'></i>
                    <SliderMUI
                      sx={{
                        "& .MuiSlider-thumb": {
                          display: "none",
                        },
                        "& .MuiSlider-rail": {
                          background: "grey",
                        },
                        width: "90%",
                        color: "orange",
                      }}
                      defaultValue={50}
                      aria-label='Small'
                      valueLabelDisplay='auto'
                    />
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                    <p>3</p>
                    <i
                      style={{ color: "orange" }}
                      className='fa-solid fa-star'></i>
                    <SliderMUI
                      sx={{
                        "& .MuiSlider-thumb": {
                          display: "none",
                        },
                        "& .MuiSlider-rail": {
                          background: "grey",
                        },
                        width: "90%",
                        color: "orange",
                      }}
                      defaultValue={0}
                      aria-label='Small'
                      valueLabelDisplay='auto'
                    />
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                    <p>2</p>
                    <i
                      style={{ color: "orange" }}
                      className='fa-solid fa-star'></i>
                    <SliderMUI
                      sx={{
                        "& .MuiSlider-thumb": {
                          display: "none",
                        },
                        "& .MuiSlider-rail": {
                          background: "grey",
                        },
                        width: "90%",
                        color: "orange",
                      }}
                      defaultValue={0}
                      aria-label='Small'
                      valueLabelDisplay='auto'
                    />
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                    <p>1</p>
                    <i
                      style={{ color: "orange" }}
                      className='fa-solid fa-star'></i>
                    <SliderMUI
                      sx={{
                        "& .MuiSlider-thumb": {
                          display: "none",
                        },
                        "& .MuiSlider-rail": {
                          background: "grey",
                        },
                        width: "90%",
                        color: "orange",
                      }}
                      defaultValue={0}
                      aria-label='Small'
                      valueLabelDisplay='auto'
                    />
                  </Box>
                </Box>
                <Box
                  ml={"20px"}
                  color={"blueviolet"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"8px"}>
                  <p>80% | 17 đánh giá</p>
                  <p>19% | 4 đánh giá</p>
                  <p>0% | 0 đánh giá</p>
                  <p>0% | 0 đánh giá</p>
                  <p>0% | 0 đánh giá</p>
                </Box>
              </Stack>

              <Typography my={"15px"}>GỬI ĐÁNH GIÁ CỦA BẠN</Typography>
              <TextareaAutosize
                value={description}
                onChange={(e) => handledescription(e)}
                style={{
                  width: "100%",
                  height: "100px",
                  border: "1px solid grey",
                  outline: "none",
                  borderRadius: "15px",
                  padding: "20px",
                  borderBottomRightRadius: "0",
                }}
                placeholder='Đánh Giá Của Bạn'
              />
              <Stack
                mt={"30px"}
                direction={"row"}
                justifyContent={"space-between"}
                borderBottom={"1px solid #c3c3c3"}
                paddingBottom={"50px"}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <span>Đánh giá</span>
                  <Rating
                    name='size-medium'
                    onChange={(e) => handlestar(e)}
                    value={starvalue}
                  />
                </Box>
                <TextField
                  label={"Nhập tên"}
                  value={name}
                  onChange={(e) => handlename(e)}
                  sx={{
                    "& .mui-style-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "10px 10px 5px",
                      },

                    height: "40px",
                  }}
                  focused={true}
                />
                {editcommentdata && editcommentdata.length ? (
                  <button
                    onClick={handleeditcomment}
                    style={{
                      width: "140px",
                      height: "40px",
                      background: "#3a2665",
                      color: "white",
                      borderRadius: "8px",
                    }}>
                    Sửa Bình Luận
                  </button>
                ) : (
                  <button
                    onClick={handlecomment}
                    style={{
                      width: "120px",
                      height: "40px",
                      background: "#3a2665",
                      color: "white",
                      borderRadius: "8px",
                    }}>
                    Gửi
                  </button>
                )}
              </Stack>
              {commentdata && commentdata.length > 0 ? (
                <Box>
                  {commentdata &&
                    commentdata.length &&
                    commentdata.map((item: any, index: number) => {
                      var day = moment(Number(item.now)).format(
                        `DD-MM-YYYY h:mm A`
                      );

                      return (
                        <Box
                          overflow={"hidden"}
                          sx={{ transition: ".5s" }}
                          key={index}
                          height={flagcomment === item.id ? 400 : 140}
                          className='comment'
                          py={"20px"}
                          gap={"20px"}
                          borderBottom={"1px dotted #ccc"}>
                          <Stack direction={"row"}>
                            <img
                              className='imgprofile'
                              src='https://nuty.vn/Data/Sites/1/media/default/img/avt.png'
                              width={70}
                              alt=''
                            />
                            <Box position={"relative"} width={"100%"}>
                              <Typography>{item.name}</Typography>
                              <Rating name='size-medium' value={item.raiting} />
                              <p style={{ color: "grey" }}>
                                {item.description}
                              </p>
                              <p
                                style={{
                                  display: "flex ",
                                  alignItems: "center",
                                  marginTop: "10px",
                                }}>
                                {item.custumer_id === value.flag.data.id ? (
                                  <Box
                                    display={"flex"}
                                    sx={{ cursor: "pointer" }}
                                    gap={"10px"}>
                                    <p
                                      onClick={() =>
                                        hanldeeditcomment(item.id)
                                      }>
                                      Sửa
                                    </p>
                                    <p
                                      onClick={() =>
                                        handledestroycomment(item.id)
                                      }
                                      style={{ color: "red" }}>
                                      Xóa
                                    </p>
                                  </Box>
                                ) : (
                                  <b
                                    onClick={
                                      flagcomment === item.id
                                        ? () => handleclose()
                                        : () => handlerep(item.id, 1)
                                    }>
                                    {flagcomment === item.id
                                      ? "Hủy bỏ"
                                      : "Trả lời"}
                                  </b>
                                )}
                                <span
                                  style={{
                                    color: "grey",
                                    paddingLeft: "15px",
                                    fontSize: "12px",
                                  }}>
                                  Ngày {day}
                                </span>
                                {item.commentall.length > 0 ? (
                                  <Box
                                    onClick={
                                      flagcomment === item.id
                                        ? () => handleclose()
                                        : () => handlerep(item.id, 2)
                                    }
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    width={60}
                                    height={20}
                                    borderRadius={"4px"}
                                    color={"white"}
                                    bgcolor={"#3a2665"}
                                    position={"absolute"}
                                    right={0}
                                    sx={{
                                      cursor: "pointer",
                                    }}>
                                    {flagcomment === item.id ? (
                                      <i className='fa-solid fa-chevron-up'></i>
                                    ) : (
                                      <i className='fa-solid fa-chevron-down'></i>
                                    )}
                                  </Box>
                                ) : (
                                  ""
                                )}
                              </p>
                            </Box>
                          </Stack>
                          {type === 1 ? (
                            <Box sx={{ paddingLeft: "65px", mt: "20px" }}>
                              <TextareaAutosize
                                value={descriptionchild}
                                onChange={(e) =>
                                  setdescriptionchild(e.target.value)
                                }
                                style={{
                                  width: "100%",
                                  height: "100px",
                                  border: "1px solid grey",
                                  outline: "none",
                                  borderRadius: "15px",
                                  padding: "20px",
                                  borderBottomRightRadius: "0",
                                }}
                                placeholder='Đánh Giá Của Bạn'
                              />
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                mt={"20px"}>
                                <TextField
                                  label={"Nhập tên"}
                                  value={namechild}
                                  onChange={(e) => setnamechild(e.target.value)}
                                  sx={{
                                    "& .mui-style-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                                      {
                                        padding: "10px 10px 5px",
                                      },

                                    height: "40px",
                                  }}
                                  focused={true}
                                />
                                <button
                                  onClick={() => handlecommentchild(item.id)}
                                  style={{
                                    width: "120px",
                                    height: "40px",
                                    background: "#3a2665",
                                    color: "white",
                                    borderRadius: "8px",
                                  }}>
                                  Gửi Bình Luận
                                </button>
                              </Stack>
                            </Box>
                          ) : (
                            <Box
                              height={200}
                              className='scrollcomment'
                              sx={{
                                paddingLeft: "65px",
                                mt: "20px",
                                overflowY: "scroll",
                              }}>
                              {item.commentall.length &&
                                item.commentall.map(
                                  (itemchild: any, indexchild: any) => {
                                    var dayall = moment(
                                      Number(itemchild.now)
                                    ).format(`DD-MM-YYYY h:mm A`);
                                    return (
                                      <Stack
                                        direction={"row"}
                                        key={indexchild}
                                        mt={"20px"}>
                                        <img
                                          style={{ marginRight: "20px" }}
                                          className='imgprofile'
                                          src='https://nuty.vn/Data/Sites/1/media/default/img/avt.png'
                                          width={70}
                                          alt=''
                                        />
                                        <Box>
                                          <Typography>
                                            {itemchild.name}
                                          </Typography>

                                          <p style={{ color: "grey" }}>
                                            {itemchild.description}
                                          </p>
                                          <p
                                            style={{
                                              display: "flex ",
                                              alignItems: "center",
                                              marginTop: "10px",
                                            }}>
                                            {itemchild.custumer_id ===
                                            value.flag.data.id ? (
                                              <Box
                                                display={"flex"}
                                                sx={{ cursor: "pointer" }}
                                                gap={"10px"}>
                                                <p
                                                  onClick={() =>
                                                    handledestroycommentchild(
                                                      itemchild.id
                                                    )
                                                  }
                                                  style={{ color: "red" }}>
                                                  Xóa
                                                </p>
                                              </Box>
                                            ) : (
                                              <b
                                                onClick={
                                                  flagcomment === item.id
                                                    ? () => handleclose()
                                                    : () =>
                                                        handlerep(item.id, 1)
                                                }>
                                                {flagcomment === item.id
                                                  ? "Hủy bỏ"
                                                  : "Trả lời"}
                                              </b>
                                            )}
                                            <span
                                              style={{
                                                color: "grey",
                                                paddingLeft: "15px",
                                                fontSize: "12px",
                                              }}>
                                              Ngày {dayall}
                                            </span>
                                          </p>
                                        </Box>
                                      </Stack>
                                    );
                                  }
                                )}
                            </Box>
                          )}
                        </Box>
                      );
                    })}
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
          <Box width={287}>
            <Box
              width={"100%"}
              bgcolor={"#3a2665"}
              height={287}
              borderRadius={"15px"}
              padding={"20px"}>
              <Box
                color={"white"}
                display={"flex"}
                borderBottom={"1px solid white"}
                paddingBottom={"10px"}>
                <i
                  style={{ margin: "5px 10px", fontSize: "24px" }}
                  className='fa-solid fa-truck-fast'></i>
                <Box>
                  <Typography fontSize={"13px"}>
                    SẢN PHẨM CHÍNH HÃNG 100%.
                  </Typography>
                  <p style={{ fontSize: "12px" }}>
                    Đảm bảo tất cả sản phẩm được bán ra là 100% chính hãng và có
                    giấy tờ, hóa đơn VAT đầy đủ.
                  </p>
                </Box>
              </Box>
              <Box
                color={"white"}
                display={"flex"}
                borderBottom={"1px solid white"}
                paddingTop={"10px"}
                paddingBottom={"10px"}>
                <i
                  style={{ margin: "5px 10px", fontSize: "24px" }}
                  className='fa-solid fa-network-wired'></i>
                <Box>
                  <Typography fontSize={"13px"}>GIAO HÀNG TOÀN QUỐC</Typography>
                  <p style={{ fontSize: "12px" }}>
                    Hỗ trợ phí ship rẻ nhất cho khu vực ngoại thành TP.HCM và
                    các tỉnh thành trên cả nước
                  </p>
                </Box>
              </Box>
              <Box
                color={"white"}
                display={"flex"}
                paddingTop={"10px"}
                paddingBottom={"10px"}>
                <i
                  style={{ margin: "5px 10px", fontSize: "24px" }}
                  className='fa-solid fa-credit-card'></i>
                <Box>
                  <Typography fontSize={"13px"}>
                    HỆ THỐNG CỬA HÀNG THUẬN TIỆN MUA SẮM
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography margin={"20px 0"} fontSize={"26px"}>
              Sản Phẩm Tương Tự
            </Typography>
            <Box>
              <Box
                mx={"10px"}
                width='100%'
                textAlign={"center"}
                position={"relative"}
                borderRadius={"10px"}>
                <Box position={"absolute"} top={14} width={200} left={40}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box>
                      <Box display={"flex"} alignItems={"center"}>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            width: "75px",
                            height: "20px",
                            background: "#3a2665",
                            color: "orange",
                            fontSize: "9px",
                            borderRadius: "5px",
                          }}>
                          <p>Best seller</p>
                        </Box>

                        <Box
                          width={37}
                          height={20}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            background:
                              "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                            borderRadius: "5px",
                            margin: "0 10px 0  5px",
                          }}>
                          <p style={{ fontSize: "13px" }}>-15%</p>
                        </Box>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                          width: "61px",
                          height: "20px",
                          background: "#3a2665",
                          color: "orange",
                          fontSize: "9px",
                          borderRadius: "5px",
                          mt: "5px",
                        }}>
                        <p>Hot Deal</p>
                      </Box>
                    </Box>

                    <Box
                      width={27}
                      height={27}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        background:
                          "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}>
                      <i className='fa-solid fa-gifts'></i>
                    </Box>
                  </Stack>
                </Box>
                <img
                  width={250}
                  height={250}
                  style={{ margin: "20px auto", borderRadius: "15px" }}
                  src={"https://nuty.vn/Data/Sites/1/Product/17613/2.png"}
                  alt=''
                />
                <Link href={`/product/`}>
                  <p
                    className='des'
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}>
                    Bông Tẩy Trang Silcot Premium Cao Cấp (66 miếng)
                  </p>
                </Link>
                <span>
                  32.000 ₫<br></br>
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "13px",
                  }}>
                  40.000 ₫
                </span>
              </Box>
              <Box
                mx={"10px"}
                width='100%'
                textAlign={"center"}
                position={"relative"}
                borderRadius={"10px"}>
                <Box position={"absolute"} top={14} width={200} left={40}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box>
                      <Box display={"flex"} alignItems={"center"}>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            width: "75px",
                            height: "20px",
                            background: "#3a2665",
                            color: "orange",
                            fontSize: "9px",
                            borderRadius: "5px",
                          }}>
                          <p>Best seller</p>
                        </Box>

                        <Box
                          width={37}
                          height={20}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            background:
                              "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                            borderRadius: "5px",
                            margin: "0 10px 0  5px",
                          }}>
                          <p style={{ fontSize: "13px" }}>-15%</p>
                        </Box>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{
                          width: "61px",
                          height: "20px",
                          background: "#3a2665",
                          color: "orange",
                          fontSize: "9px",
                          borderRadius: "5px",
                          mt: "5px",
                        }}>
                        <p>Hot Deal</p>
                      </Box>
                    </Box>

                    <Box
                      width={27}
                      height={27}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        background:
                          "linear-gradient(90deg,#ffc10d -30.43%,#fceaaa 52.79%,#ffc10d 132.61%)",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}>
                      <i className='fa-solid fa-gifts'></i>
                    </Box>
                  </Stack>
                </Box>
                <img
                  width={250}
                  height={250}
                  style={{ margin: "20px auto", borderRadius: "15px" }}
                  src={"https://nuty.vn/Data/Sites/1/Product/17613/2.png"}
                  alt=''
                />
                <Link href={`/product/`}>
                  <p
                    className='des'
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}>
                    Bông Tẩy Trang Silcot Premium Cao Cấp (66 miếng)
                  </p>
                </Link>
                <span>
                  32.000 ₫<br></br>
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "13px",
                  }}>
                  40.000 ₫
                </span>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
