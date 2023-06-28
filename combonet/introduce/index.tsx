import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import Image from "next/image";
import anh from "../../image/my-pham-Skincare-1200x800.jpg";

export interface IIntroduceContainerProps {}

export function IntroduceContainer(props: IIntroduceContainerProps) {
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Giới thiệu' />
        <Typography
          variant='h3'
          fontSize={"33px !important"}
          mb={"20px"}
          fontWeight={700}>
          NUTY COSMETICS - MỸ PHẨM CHÍNH HÃNG, GIÁ RẺ NHẤT THỊ TRƯỜNG
        </Typography>
        <Typography fontSize={"20px !important"} mb={"15px"} color={"black"}>
          Đối với tín đồ yêu mỹ phẩm, mỗi sự khởi đầu của vẻ đẹp đều bắt nguồn
          từ những sản phẩm chất lượng.
        </Typography>
        <p style={{ fontSize: "14px" }}>
          Thấu hiểu được tầm quan trọng trong việc mang đến những sản phẩm chăm
          sóc da có hiệu quả thật sự cho làn da, Nuty Cosmetics đã không ngừng
          nỗ lực để trở thành địa chỉ mua sắm mỹ phẩm chính hãng cho hàng triệu
          khách hàng trên khắp cả nước.<br></br> <br></br> Có mặt từ năm 2012,
          hiện nay hệ thống mỹ phẩm chính hãng Nuty Cosmetics đã có 9 showroom
          thuộc vị trí trung tâm đắc địa tại TP.HCM & Hà Nội.
        </p>
        <Typography
          fontSize={"15px !important"}
          mt={"15px"}
          mb={"15px"}
          color={"black"}>
          Được sự hậu thuẫn của các ông lớn ngành mỹ phẩm - Nuty Cosmetics nhanh
          chóng trở thành nơi phân phối mỹ phẩm chính hãng giá rẻ nhất thị
          trường
        </Typography>
        <Typography fontSize={"20px !important"} mb={"15px"} color={"black"}>
          Yên tâm mua mỹ phẩm chính hãng từ các thương hiệu lớn trên thế giới:
        </Typography>
        <p style={{ fontSize: "14px" }}>
          Đến Nuty mua sắm, khách hàng không chỉ được trải nghiệm không gian
          hiện đại bật nhất mà còn tiếp cận được rất nhiều được nhiều sản phẩm
          mới lạ đến từ các thương hiệu chăm sóc da, trang điểm từ thương hiệu
          bình dân cho đến cao cấp.<br></br>
          <br></br> Trên quầy kệ tại cửa hàng, bạn sẽ dễ dàng tìm thấy các
          thương hiệu nổi tiếng như: L'Oréal, Estee Lauder, Shiseido, Obagi,
          Murad, MartiDerm, Bioderma, Cetaphil, Anessa, Timeless Skincare,
          Cosmedica Skincare, Paula's Choice, La Roche Posay, Maybelline, Vichy,
          Senka, Mediheal, Aprilskin, Byphasse…
        </p>
        <Typography
          fontSize={"15px !important"}
          mt={"15px"}
          mb={"15px"}
          color={"black"}>
          Nuty Cosmetics - Thiên đường mua sắm mỹ phẩm chính hãng được sao Việt
          và hàng triệu tín đồ làm đẹp cả nước yêu thích!
        </Typography>
        <Typography fontSize={"20px !important"} mb={"15px"} color={"black"}>
          Giá rẻ nhất thị trường - Ở đâu rẻ hơn NUTY hoàn tiền chênh lệch:
        </Typography>
        <p style={{ fontSize: "14px" }}>
          Sau nhiều năm nỗ lực ký hợp tác chiến lược với các tập đoàn mỹ phẩm
          nổi tiếng, Nuty không những cam kết về nguồn hàng sản phẩm mà còn phân
          phối độc quyền & phong phú sản phẩm về skincare và makeup. Vậy nên sẽ
          không khó hiểu có NUTY luôn có ưu đãi tốt nhất về giá và hấp dẫn nhất
          là chính sách{" "}
        </p>
        <Stack direction={"row"} mt={"20px"} justifyContent={"space-between"}>
          <Image style={{ width: "48%" }} src={anh} alt='' />
          <Box width={"48%"}>
            <p style={{ fontSize: "14px" }}>
              <b>Dịch vụ chăm sóc khách hàng tận tâm:</b> <br></br>
              Ngoài những ưu đãi được kể trên, khách hàng mua sắm tại cửa hàng
              sẽ được tư vấn soi da.<br></br> Đối với khách hàng mua online, mỗi
              đơn hàng từ 100.000 sẽ được miễn phí giao hàng. <br></br>
              <b>Không gian mua sắm thoải mái, sang trọng </b>
              <br></br>
              Cửa hàng tấp nập khách ra vào, trung bình đón hơn 3000 lượt khách
              mỗi ngày trên toàn<br></br> hệ thống. Quầy kệ được trưng bày hợp
              lý và bắt mắt giúp khách hàng dễ dàng tìm kiếm <br></br>các sản
              phẩm mong muốn. Mỗi ngăn, mỗi tầng là một khu trưng bày hàng hóa
              riêng biệt,<br></br> được phân chia dựa trên công dụng của từng
              loại như skincare, makeup, body care, chăm<br></br> sóc tóc, nước
              hoa, thực phẩm chức năng… <br></br>
              <b>Nhân viên có kiến thức chuyên sâu </b>
              <br></br>
              Nhân viên được trau dồi kiến thức chuyên môn sẽ giúp khách hàng
              đưa ra những gợi ý <br></br>& lời khuyên chân thành nhằm đáp ứng
              những yêu cầu mà khách hàng mong muốn.
            </p>
            <Typography
              fontSize={"20px !important"}
              mt={"15px"}
              color={"black"}>
              Bắt kịp xu hướng làm đẹp và phong cách sống
            </Typography>
          </Box>
        </Stack>
        <p style={{ fontSize: "14px", margin: "15px 0" }}>
          Vẻ ngoài rạng rỡ xinh đẹp từ làn da đến vóc dáng sẽ giúp chúng ta tự
          tin hơn rất nhiều. Vậy nên đừng ngần ngại đến NUTY và chia sẻ với NUTY
          những mong muốn của bạn về những sản phẩm làm đẹp an toàn, hiệu quả.
          <br></br>
          <br></br>
          Dưới sự tư vấn của các chuyên viên làm đẹp, Nuty tin rằng bạn sẽ chọn
          được những sản phẩm làm đẹp phù hợp với làn da và túi tiền.
        </p>
      </Container>
      <Box
        className='aboutintroduce'
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}>
        <Box>
          <Typography
            variant='h3'
            fontSize={"33px !important"}
            mb={"20px"}
            fontWeight={700}
            color={"white"}>
            TỌA LẠC TẠI NHỮNG VỊ TRÍ ĐẮC ĐỊA CỦA SÀI GÒN
          </Typography>
          <p style={{ fontSize: "14px", color: "white", marginBottom: "15px" }}>
            Các chi nhánh của Nuty đều nằm ở vị trí vô cùng thuận lợi cho các
            bạn học sinh, sinh viên, các cô gái văn phòng và khu vực lân cận
            tham<br></br> gia mua sắm. Với những cô nàng Sài Thành và Hà Nội có
            thể dễ dàng đến trực tiếp các chi nhánh của shop để ngắm nghía và sờ
            tận tay<br></br> trước khi mua hàng nha.
          </p>
          <button
            style={{
              width: "163px",
              height: "47px",
              background: "#3a2665",
              color: "white",
              borderRadius: "10px",
            }}>
            Khám phá
          </button>
        </Box>
      </Box>
    </Box>
  );
}
