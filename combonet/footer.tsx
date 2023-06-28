import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import footer1 from "../image/footer/shipping-fast.png";
import footer2 from "../image/footer/footer-icon.png";
import footer3 from "../image/footer/globe-americas.png";
import footer4 from "../image/footer/money-check-edit.png";
import anh1 from "../image/training_live_facebook.png";
import anh2 from "../image/training_live_gplus.png";
import anh3 from "../image/training_live_twitt_profile.png";
import thanhtoan from "../image/footer/thanhtoan.png";
import bct from "../image/footer/bct.png";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box component='footer' width={"100%"} paddingBottom={"30px"}>
      <Container
        maxWidth={"xl"}
        sx={{ width: "1230px", padding: "0 !important" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"30px"}
          textAlign={"center"}>
          <Box
            width={286}
            height={188}
            borderRadius={"15px"}
            padding={"10px"}
            bgcolor={"white"}>
            <Image src={footer1} style={{ margin: "30px auto 12px" }} alt='' />
            <Typography>GIAO HÀNG NHANH</Typography>
            <p style={{ fontSize: "12px" }}>
              Giao hàng nhanh chóng trong nội thành HCM và Hà Nội.
            </p>
          </Box>
          <Box
            width={286}
            height={188}
            borderRadius={"15px"}
            padding={"10px"}
            bgcolor={"white"}>
            <Image src={footer2} style={{ margin: "30px auto 12px" }} alt='' />
            <Typography>GIAO HÀNG TOÀN QUỐC</Typography>
            <p style={{ fontSize: "12px" }}>
              Hỗ trợ phí ship rẻ nhất cho các quận, tỉnh thành trên cả nước.
            </p>
          </Box>
          <Box
            width={286}
            height={188}
            borderRadius={"15px"}
            padding={"10px"}
            bgcolor={"white"}>
            <Image src={footer3} style={{ margin: "30px auto 12px" }} alt='' />
            <Typography>THƯƠNG HIỆU UY TÍN TOÀN CẦU</Typography>
            <p style={{ fontSize: "12px" }}>
              Đảm bảo tất cả sản phẩm được bán ra là 100% chính hãng và có giấy
              tờ, hoá đơn VAT đầy đủ.
            </p>
          </Box>
          <Box
            width={286}
            height={188}
            borderRadius={"15px"}
            padding={"10px"}
            bgcolor={"white"}>
            <Image src={footer4} style={{ margin: "30px auto 12px" }} alt='' />
            <Typography>TRA CỨU ĐƠN HÀNG TRỰC TUYẾN</Typography>
            <p style={{ fontSize: "12px" }}>Tra cứu đơn hàng trực tuyến</p>
          </Box>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box width={"48%"}>
            <Typography mb={"28px"}>NUTY COSMETICS</Typography>
            <p style={{ fontSize: "14px", marginBottom: "15px" }}>
              Nuty Cosmetics - thương hiệu đi đầu trong ngành phân phối mỹ phẩm
              chính hãng, phục vụ cho nhu cầu mua sắm & làm đẹp của hàng triệu
              khách hàng tại Việt Nam.<br></br>
              <br></br> Có mặt từ năm 2012, Nuty đã mở rộng thị phần & nhanh
              chóng trở thành một trong những địa chỉ mua sắm mỹ phẩm uy tín
              trong lòng khách hàng, đến nay Nuty đã có 9 showroom từ Bắc chí
              Nam.<br></br>
              <br></br> Với sự phát triển không ngừng trong suốt 10 năm qua, các
              thương hiệu mỹ phẩm trong và ngoài nước đồng loạt ký hợp đồng
              chiến lược cùng Nuty Cosmetics để mang đến những sản phẩm chất
              lượng, hiệu quả và an toàn với người tiêu dùng.<br></br>
              <br></br> Đồng thời nhờ sự "hậu thuẫn" rất lớn từ các tập đoàn mỹ
              phẩm lớn mạnh, Nuty cam kết mỹ phẩm chính hãng & có giá bán lẻ rẻ
              nhất thị trường, Ở ĐÂU RẺ HƠN NUTY HOÀN TIỀN CHÊNH LỆCH.<br></br>
              <br></br>
              Đối với mỗi đơn hàng mua sắm tại Nuty Cosmetics, khách hàng có thể
              yêu cầu xuất 100% hóa đơn GTGT (hóa đơn đỏ), đảm bảo 100% nguồn
              hàng được bán ra tại Nuty có nguồn gốc rõ ràng, sản phẩm chính
              hãng từ các nhãn hàng.
            </p>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={"80px"}>
              <Box>
                <Box marginBottom={"10px"}>
                  <i
                    style={{ marginRight: "10px" }}
                    className='fa-solid fa-location-dot'></i>
                  <span>Hệ thống chi nhánh</span>
                </Box>
                <Box marginBottom={"10px"}>
                  <i
                    style={{ marginRight: "10px" }}
                    className='fa-solid fa-circle-nodes'></i>
                  <span>Liên hệ mua sỉ</span>
                </Box>
                <Box marginBottom={"10px"}>
                  <i
                    style={{ marginRight: "10px" }}
                    className='fa-solid fa-wand-magic-sparkles'></i>
                  <span>Giới thiệu công ty</span>
                </Box>
              </Box>
              <Box>
                <Box marginBottom={"10px"}>
                  <i
                    style={{ marginRight: "10px" }}
                    className='fa-solid fa-phone-volume'></i>
                  <span>
                    Tổng đài: <b>1900 636 737</b>
                  </span>
                </Box>
                <Box marginBottom={"10px"}>
                  <i
                    style={{ marginRight: "10px" }}
                    className='fa-solid fa-phone'></i>
                  <span>
                    CSKH: <b>0325668050</b>
                  </span>
                </Box>
                <Box marginBottom={"10px"}>
                  <i
                    style={{ marginRight: "10px" }}
                    className='fa-solid fa-envelope'></i>
                  <span>Email: toanbui219@gmail.com</span>
                </Box>
              </Box>
            </Stack>
            <p style={{ fontSize: "14px" }}>
              © 2023 Nuty Cosmetics.{" "}
              <Link style={{ textDecoration: "underline" }} href={"#"}>
                Điều khoản và điều kiện
              </Link>{" "}
              .{" "}
              <Link style={{ textDecoration: "underline" }} href={"#"}>
                Chính sách bảo mật
              </Link>{" "}
              .{" "}
              <Link style={{ textDecoration: "underline" }} href={"#"}>
                Sơ đồ trang web
              </Link>
              <br></br> Bản quyền © 2023 nuty.vn<br></br>
              CÔNG TY CỔ PHẦN THƯƠNG MẠI HOÀNG NGUYÊN TÂM<br></br> Giấy chứng
              nhận đăng ký doanh nghiệp số 0313817382, cấp ngày 20.05.2016, nơi
              cấp Sở kế hoạch và đầu tư TP HCM<br></br> Trụ sở chính: 21 Trương
              Hoàng Thanh, Phường 12, Quận Tân Bình, TP Hồ Chí Minh, Việt Nam
              <br></br> Hotline: 1900636737
            </p>
          </Box>
          <Box width={"24%"}>
            <Typography mb={"28px"}>HỖ TRỢ KHÁCH HÀNG</Typography>
            <Box fontSize={"14px"} display={"flex"} flexDirection={"column"}>
              <Link href={"#"}>Hướng dẫn mua hàng</Link>
              <br></br>
              <Link href={"#"}>Chính sách bảo mật</Link>
              <br></br>
              <Link href={"#"}>Chính sách đổi trả sản phẩm</Link>
              <br></br>
              <Link href={"#"}>Phương thức thanh toán</Link>
              <br></br>
              <Link href={"#"}>Chính sách vận chuyển & giao nhận</Link>
              <br></br>
              <Link href={"#"}>Câu hỏi thường gặp (FAQs)</Link>
              <br></br>
              <Link href={"#"}>Tạp chí Nuty</Link>
            </Box>
          </Box>
          <Box width={"24%"}>
            <Typography mb={"28px"}>ĐĂNG KÝ NHẬN BẢN TIN</Typography>
            <p style={{ fontSize: "14px" }}>
              Hãy là người đầu tiên biết về các thiết kế mới, các sự kiện đặc
              biệt, khai trương và hơn thế nữa.
            </p>
            <Box
              width={287}
              height={55}
              display={"flex"}
              alignItems={"center"}
              mt={"20px"}
              mb={"30px"}>
              <TextField sx={{ width: "90%" }} label='Đia chỉ Email' />
              <button
                style={{
                  background: "#3a2665 ",
                  color: "white",
                  height: "55px",
                  width: "70px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                }}>
                <i className='fa-solid fa-arrow-right'></i>
              </button>
            </Box>
            <Typography mb={"28px"}>LIÊN KẾT TIẾP THỊ</Typography>
            <Box display={"flex"} alignItems={"center"} gap={"15px"}>
              <Image width={60} src={anh1} alt='' />
              <Image width={60} src={anh2} alt='' />
              <Image width={60} src={anh3} alt='' />
            </Box>
            <Typography mb={"28px"} mt={"25px"}>
              PHƯƠNG THỨC THANH TOÁN
            </Typography>
            <Box>
              <Image src={thanhtoan} alt='' />
              <Image style={{ marginTop: "20px" }} src={bct} alt='' />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
