import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";

interface ISuppostContainerProps {}
const array = [
  {
    id: 0,
    title: "Hướng Dẫn Mua Hàng",
    markdown: `<p><strong>Hướng dẫn đặt hàng</strong></p>
<ul>
<li>Quý khách có thể đặt hàng trực tuyến ở Website Nuty.vn thông qua các bước đặt hàng cơ bản.</li>
</ul>
<p><strong>Tìm kiếm sản phẩm</strong></p>
<p>Quý khách có thể tìm sản phẩm theo 2 cách:</p>
<p>a. Gõ tên sản phẩm vào thanh tìm kiếm</p>
<p>b. Tìm theo danh mục sản phẩm, thương hiệu sản phẩm, danh mục bạn quan tâm, hàng mới về , những sản phẩm đang bán chạy nhất tại Nuty.vn</p>
<p><strong>Đặt hàng</strong></p>
<ul>
<li><p>Khi đã tìm được sản phẩm mong muốn, quý khách vui lòng bấm vào hình hoặc tên sản phẩm để vào trang thông tin chi tiết của sản phẩm.</p>
</li>
<li><p>Nếu quý khách chỉ muốn mua 1 sản phẩm vừa chọn thì bấm vào nút Mua ngay sau đó làm theo hướng dẫn trên Website.</p>
</li>
<li><p>Để đặt nhiều sản phẩm khác nhau vào cùng 1 đơn hàng, quý khách vui lòng thực hiện theo các bước sau: a. Quý khách bấm vào nút Thêm Vào Giỏ hàng và tiếp tục tìm thêm các sản phẩm khác.</p>
</li>
</ul>
<p>b. Sau khi đã cho các sản phẩm cần mua vào giỏ hàng, quý khách vui lòng bấm vào hình Giỏ hàng bên góc phải màn hình để xem lại sản phẩm đã chọn.</p>
<p>C. Sau khi đã chọn được các sản phẩm cần mua vào giỏ hàng, quý khách vui lòng bấm nút Tiến hành thanh toán bên góc phải màn hình.</p>
<p><strong>Đăng nhập hoặc hoặc đăng ký tài khoản</strong></p>
<ul>
<li>Quý khách vui lòng đăng nhập bằng tài khoản đã có ở Nuty.vn . Trong trường hợp chưa đăng ký tài khoản, quý khách có thể chọn dòng &quot;Tài Khoản&quot; và bắt đầu nhập số điện thoại, mật khẩu tùy ý để đăng ký tài khoản. Quý khách có thể đặt hàng mà không cần đăng nhập nhưng quý khách lưu ý phải điền đầy đủ và chính xác về thông tin nhận hàng, đặc biệt là địa chỉ email và số điện thoại để Nuty xác nhận đơn hàng.</li>
</ul>
<p><strong>Điền địa chỉ nhận hàng</strong></p>
<ul>
<li>Quý khách điền địa chỉ nhận hàng theo như trên trang hướng dẫn</li>
</ul>
<p><strong>Chọn phương thức thanh toán</strong></p>
<ul>
<li>Quý khách có thể thanh toán đơn hàng theo 2 cách:</li>
</ul>
<p>Cách 1: Thanh toán sau khi nhận hàng (COD), Quý khách sẽ thanh toán lúc nhận được sản phẩm từ nhân viên giao nhận hoặc nhân viên chuyển phát tại địa chỉ khách hàng đã đăng ký.</p>
<p> Cách 2: Thanh toán trước khi nhận hàng bằng cách click chọn Thanh toán trực tuyến (Internet Banking, VNPAY-QR, Ví điện tử VNPAY, thẻ thanh toán quốc tế) để tiếp tục thanh toán.</p>
<ul>
<li>Nếu các thông tin trên đã chính xác, quý khách vui lòng bấm vào nút Tiến Hành Thanh Toán, hệ thống sẽ bắt đầu tiến hành tạo đơn hàng dựa trên các thông tin quý khách đã đăng ký.</li>
</ul>
<p><strong>Kiểm tra và xác nhận đơn hàng</strong></p>
<ul>
<li>Sau khi hoàn thành tất cả bước đặt mua, hệ thống sẽ gửi đến quý khách mã đơn hàng và e-mail xác nhận của Nuty để kiểm tra theo dõi tình trạng đơn hàng.</li>
</ul>



`,
  },
  {
    id: 1,
    title: "Chính Sách Vận Chuyển & Giao Nhận",
    markdown: `<p>Hướng dẫn đặt hàng
Quý khách có thể đặt hàng trực tuyến ở Website Nuty.vn thông qua các bước đặt hàng cơ bản.
Tìm kiếm sản phẩm
Quý khách có thể tìm sản phẩm theo 2 cách:
a. Gõ tên sản phẩm vào thanh tìm kiếm</p>
<p>b. Tìm theo danh mục sản phẩm, thương hiệu sản phẩm, danh mục bạn quan tâm, hàng mới về , những sản phẩm đang bán chạy nhất tại Nuty.vn</p>
<h3 id="-t-h-ng">Đặt hàng</h3>
<p>Khi đã tìm được sản phẩm mong muốn, quý khách vui lòng bấm vào hình hoặc tên sản phẩm để vào trang thông tin chi tiết của sản phẩm.</p>
<p>Nếu quý khách chỉ muốn mua 1 sản phẩm vừa chọn thì bấm vào nút <strong>Mua ngay</strong> sau đó làm theo hướng dẫn trên Website.</p>
<p>Để đặt nhiều sản phẩm khác nhau vào cùng 1 đơn hàng, quý khách vui lòng thực hiện theo các bước sau:
a. Quý khách bấm vào nút <strong>Thêm Vào Giỏ hàng</strong> và tiếp tục tìm thêm các sản phẩm khác.</p>
<p>b. Sau khi đã cho các sản phẩm cần mua vào giỏ hàng, quý khách vui lòng bấm vào hình Giỏ hàng bên góc phải màn hình để xem lại sản phẩm đã chọn.</p>
<p>C. Sau khi đã chọn được các sản phẩm cần mua vào giỏ hàng, quý khách vui lòng bấm nút Tiến hành thanh toán bên góc phải màn hình.</p>
<h3 id="-ng-nh-p-ho-c-ho-c-ng-k-t-i-kho-n">Đăng nhập hoặc hoặc đăng ký tài khoản</h3>
<p>Quý khách vui lòng đăng nhập bằng tài khoản đã có ở Nuty.vn . Trong trường hợp chưa đăng ký tài khoản, quý khách có thể chọn dòng &quot;Tài Khoản&quot; và bắt đầu nhập số điện thoại, mật khẩu tùy ý để đăng ký tài khoản. Quý khách có thể đặt hàng mà không cần đăng nhập nhưng quý khách lưu ý phải điền đầy đủ và chính xác về thông tin nhận hàng, đặc biệt là địa chỉ email và số điện thoại để Nuty xác nhận đơn hàng.</p>
<h3 id="-i-n-a-ch-nh-n-h-ng">Điền địa chỉ nhận hàng</h3>
<p>Quý khách điền địa chỉ nhận hàng theo như trên trang hướng dẫn</p>
<p>Chọn  phương thức thanh toán
Quý khách có thể thanh toán đơn hàng theo 2 cách:</p>
<p>Cách 1: Thanh toán sau khi nhận hàng (COD), Quý khách sẽ thanh toán lúc nhận được sản phẩm từ nhân viên giao nhận hoặc nhân viên chuyển phát tại địa chỉ khách hàng đã đăng ký.
Cách 2: Thanh toán trước khi nhận hàng bằng cách click chọn Thanh toán trực tuyến (Internet Banking, VNPAY-QR, Ví điện tử  VNPAY, thẻ thanh toán quốc tế) để tiếp tục thanh toán.</p>
<p>Nếu các thông tin trên đã chính xác, quý khách vui lòng bấm vào nút Tiến Hành Thanh Toán, hệ thống sẽ bắt đầu tiến hành tạo đơn hàng dựa trên các thông tin quý khách đã đăng ký.</p>
<h3 id="ki-m-tra-v-x-c-nh-n-n-h-ng">Kiểm tra và xác nhận đơn hàng</h3>
<p>Sau khi hoàn thành tất cả bước đặt mua, hệ thống sẽ gửi đến quý khách mã đơn hàng và 
e-mail xác nhận của Nuty để kiểm tra theo dõi tình trạng đơn hàng.</p>
`,
  },
  {
    id: 2,
    title: "Chính Sách Bán Sỉ",
    markdown: "",
  },
  {
    id: 3,
    title: "Chính Sách Đổi Trả",
    markdown: "",
  },
  {
    id: 4,
    title: "FAQs",
    markdown: "",
  },
  {
    id: 5,
    title: "Điều Khoản Và Điều Kiện",
    markdown: "",
  },
  {
    id: 6,
    title: "Chính Sách Bảo Mật",
    markdown: "",
  },
  {
    id: 7,
    title: "Phương Thức Thanh Toán",
    markdown: "",
  },
];
export function SuppostContainer(props: ISuppostContainerProps) {
  const [active, setactive] = React.useState({
    id: 0,
    title: "Hướng Dẫn Mua Hàng",
  });
  const [flag, setflag] = React.useState<number[]>([]);

  const hanldeclick = (id: number, title: string) => {
    setactive({ id: id, title: title });
  };

  const createMarkup = (htmlContent: string): { __html: string } => {
    return { __html: htmlContent };
  };

  const arrFAQs = [
    {
      id: 1,
      title: "Đăng kí thành viên tại Nuty.vn sẽ giúp ích gì cho tôi ?",
      description:
        "Việc đăng kí tài khoản là cơ hội giúp bạn trở thành một trong những khách hàng thân thiết tại Nuty , được tiếp cận nhanh nhất các chương trình khuyến mãi , thông tin ưu đãi khi mua sắm.",
    },
    {
      id: 2,
      title: "Địa chỉ cửa hàng và số điện thoại liên hệ?",
      description: `<p>Địa chỉ hệ thống cửa hàng Nuty Cosmetics :</p>
<p>☎️ ‎0886 838 939 (Lẻ) / ‎0948 685 843 (Sỉ)</p>
<ul>
<li>Add 1: 68 Ngô Đức Kế, P. Bến Nghé, Q.1 - SĐT: 089.664.2969</li>
<li>Add 2: 235 Khánh Hội, P. 5, Quận 4 - SĐT: 089.664.4969</li>
<li>Add 3: 111 Lê Văn Việt, P. Hiệp Phú, Quận 9 - SĐT: 089.668.4969</li>
<li>Add 4: 490 đường 3/2, P. 14, Quận 10 - SĐT: 089.664.3969</li>
<li>Add 5: 19 Út Tịch , P.4, Q. Tân Bình - SĐT: 089.664.7969</li>
<li>Add 6: (Head Office): 21 Trương Hoàng Thanh, P.12, Q. Tân Bình </li>
<li>Add 7: 455 – 457 Phan Văn Trị, P.5, Q. Gò Vấp - SĐT: 089.664.8969</li>
<li>Add 8: 163 Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội - SĐT: 089.658.3969</li>
<li>Add 9: 162A Nguyễn Gia Trí (D2 cũ), P. 25, Q. Bình Thạnh, TP.HCM - 076.855.7969</li>
<li>Add 10: 225 Lê Văn Quới, P.Bình Trị Đông, Q. Bình Tân - SĐT: 076.871.7969</li>
<li>Add 11: Nuty Online - SĐT: 088.863.9669 + 088.683.8939</li>
<li>Add 12: (Head Office): 21 Trương Hoàng Thanh, P.12, Q. Tân Bình</li>
</ul>
`,
    },
    {
      id: 3,
      title: "Giờ làm việc của Nuty Cosmetics?",
      description: `Hoạt động từ 9am - 22pm (từ thứ 2 đến chủ nhật).`,
    },
    {
      id: 4,
      title: "Tôi có thể đặt hàng qua đâu?",
      description: `<p>Để hỗ trợ cho việc đặt hàng một cách nhanh chóng, bạn có thể liên hệ:</p>
<ul>
<li>Hotline: ‎1900 636 737</li>
<li>Wetsite : www.nuty.vn</li>
<li>Instagram: nutycosmetics</li>
<li>Facebook : nutycosmetics</li>
<li>Zalo : 0888639669 / 0886838939</li>
<li>Tiktok Shop : nuty.vn</li>
<li>Shopee: nuty.vn</li>
</ul>
`,
    },
    {
      id: 5,
      title: "Tôi có thể đặt hàng qua điện thoại được không ?",
      description: `Qúy khách có thể liên hệ trực tiếp qua hotline 1900.636.737 , 0888.639.669 hoặc 0886.838.939
`,
    },
    {
      id: 6,
      title: "Tôi muốn thay đổi hoặc hủy bỏ đơn hàng đã đặt thì sao?",
      description: `Qúy khách vui lòng liên hệ hotline 1900.636.737 , 0888.639.669 hoặc 0886.838.939 để được hướng dẫn chi tiết.
`,
    },
    {
      id: 7,
      title: "Tôi muốn giao gấp trong ngày thì sao?",
      description: `Nuty có giao gấp trong ngày , quý khách vui lòng cung cấp địa chỉ cụ thể để nhân viên kiểm tra phí giao gấp và sẽ báo lại cho quý khách.
`,
    },
    {
      id: 8,
      title: "Phí vận chuyển là bao nhiêu?",
      description: `<p>Nuty miễn phí vận chuyển tại nội thành Thành phố Hồ Chí Minh cho các đơn hàng từ 100.000đ trở lên.</p>
<p>Đối với đơn ngoại thành Thành phố Hồ Chí Minh phí vận chuyển từ 22.000đ - 29.000đ (áp dụng đối với đơn hàng có trong lượng 2kg trở xuống và kích thước thùng đóng gói nhỏ hơn 30 x 20 x 15cm).</p>
.
`,
    },
    {
      id: 9,
      title: "Tôi có thể sử dụng chung tài khoản với người khác được không?",
      description: `Qúy khách nên sử dụng tài khoản cá nhân để đảm bảo độ tin cậy cũng như quyền lợi của bản thân khi mua sắm. Việc sử dụng chung tài khoản có thể dẫn đến những sai sót mà người chịu ảnh hưởng trực tiếp chính là quý khách hàng.
`,
    },
    {
      id: 10,
      title: "Liên hệ chăm sóc khách hàng qua đâu?",
      description: `<p>Tổng đài CSKH: ‎1900 636 737 (phím số ‎2)</p>
<p>☎ Điện thoại CSKH: 02873 000 333</p>
<p>Email: cskh.nutycosmetics@gmail.com</p>

`,
    },
  ];

  const handleclickFAQ = (id: number) => {
    if (flag.includes(id)) {
      return setflag((prev) =>
        prev.filter((item) => {
          return item !== id;
        })
      );
    }
    setflag((prev) => [...prev, id]);
  };
  console.log(flag);
  return (
    <Box marginBottom={"30px"}>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Hỗ trợ' />

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box width={"350px"}>
            <Typography variant='h6' mb={"20px"}>
              Hỗ Trợ
            </Typography>
            {array.map((item, index) => {
              return (
                <p
                  style={{ cursor: "pointer" }}
                  className={active.id === item.id ? "activesuppost" : ""}
                  onClick={() => hanldeclick(item.id, item.title)}
                  key={index}>
                  {item.title}
                </p>
              );
            })}
          </Box>
          <Box width={"850px"}>
            <Typography variant='h6' mb={"20px"}>
              {active.title}
            </Typography>
            <Box
              className='suppost'
              width={"100%"}
              height={"600px"}
              padding={"30px"}
              bgcolor={"white"}
              sx={{ overflowY: "scroll", overflowX: "hidden" }}>
              {active.id === 0 ? (
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    array[0].markdown
                  )}></div>
              ) : (
                ""
              )}
              {active.id === 1 ? (
                <Box>
                  <p style={{ margin: "10px 0" }}>
                    1.<b>Phí vận chuyển khi đặt hàng tại Nuty.vn:</b>
                  </p>
                  <p>
                    NUTY miễn phí vận chuyển tại nội thành Thành phố Hồ Chí Minh
                    và Thủ đô Hà Nội cho các đơn hàng từ 99.000đ trở lên. Các
                    đơn hàng dưới 99.000đ Quý khách chỉ mất 9.000đ phí vận
                    chuyển.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Đối với những khách hàng thuộc khu vực khác:
                  </p>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      NUTY miễn phí vận chuyển cho ngoại thành Thành phố Hồ Chí
                      Minh và Thủ đô Hà Nội đối với đơn hàng từ 199.000đ trở
                      lên. Cước phí vận chuyển 15.000đ đơn hàng dưới 199.000đ
                      (Áp dụng đối với trọng lượng đơn hàng từ 2 kg trở xuống và
                      kích thước thùng đóng gói đơn hàng nhỏ hơn 30cm x 20cm x
                      15cm).
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      NUTY miễn phí vận chuyển cho các tỉnh thành khác đối với
                      đơn hàng từ 399.000đ trở lên. Cước phí vận chuyển 19.000đ
                      đơn hàng dưới 399.000đ (Áp dụng đối với trọng lượng đơn
                      hàng từ 2 kg trở xuống và kích thước thùng đóng gói đơn
                      hàng nhỏ hơn 30cm x 20cm x 15cm).
                    </p>
                  </Box>
                  <table border={1}>
                    <tr>
                      <th>KHU VỰC</th>
                      <th>ĐIỀU KIỆN</th>
                      <th>PHÍ VẬN CHUYỂN</th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>Nội thành TP Hồ Chí Minh và Hà Nội</td>
                      <td>≥ 99.000đ</td>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>{"< 99.000đ"}</td>
                      <td>9.000đ</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>Ngoại thành TP Hồ Chí Minh và Hà Nội</td>
                      <td>
                        ≥ 199.000đ Trọng lượng {"<"} (2kg) Kích thước {"<"}
                        (30cm x 20cm x 15cm)
                      </td>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>
                        {"<"} 199.000đ Trọng lượng {"<"} (2kg) Kích thước {"<"}{" "}
                        (30cm x 20cm x 15cm)
                      </td>
                      <td>15.000đ</td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>Ngoại thành TP Hồ Chí Minh và Hà Nội</td>
                      <td>
                        ≥ 399.000đ Trọng lượng {"<"} (2kg) Kích thước {"<"}{" "}
                        (30cm x 20cm x 15cm)
                      </td>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>
                        {"<"} 399.000đ Trọng lượng {"<"} (2kg) Kích thước {"<"}{" "}
                        (30cm x 20cm x 15cm)
                      </td>
                      <td>19.000đ</td>
                    </tr>
                  </table>
                  <p style={{ margin: "10px 0" }}>
                    2.<b>Quy trình giao hàng:</b>
                  </p>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      NUTY sẽ giao hàng trong thời gian từ 24h đến 48h giờ (khu
                      vực nội thành Hồ Chí Minh và Hà Nội) làm kể từ lúc quý
                      khách đặt hàng. Tuy nhiên, vẫn có những trường hợp chậm
                      trễ hơn do nguyên nhân khách quan (lễ, tết, địa chỉ nhận
                      hàng khó tìm, sự chậm trễ từ dịch vụ chuyển phát…), rất
                      mong Quý khách thông cảm vì những lý do ngoài sự chi phối
                      của chúng tôi.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Nếu Quý khách không thể nhận hàng trong lần giao hàng đầu
                      tiên, NUTY sẽ liên lạc lại với Quý khách để sắp xếp thời
                      gian giao hàng hoặc hướng dẫn Quý khách đến công ty vận
                      chuyển để nhận hàng.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Nếu việc giao và nhận hàng không thành công vì không thể
                      liên lạc được với Quý khách trong 3 lần giao hàng, NUTY sẽ
                      thông báo đến Quý khách về việc hủy đơn hàng và hoàn trả
                      các chi phí mà Quý khách đã thanh toán trong vòng 30 ngày.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      NUTY sẽ báo ngay đến Quý khách nếu có sự chậm trễ khi giao
                      hàng, nhưng trong phạm vi pháp luật cho phép, chúng tôi sẽ
                      không chịu trách nhiệm cho bất cứ tổn thất nào, các khoản
                      nợ, thiệt hại hoặc chi phí phát sinh từ việc giao hàng
                      trễ.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      NUTY lưu ý với Quý khách rằng có một số địa điểm mà dịch
                      vụ chuyển phát không thể giao hàng được. Khi đó, NUTY sẽ
                      thông báo đến Quý khách qua thông tin liên lạc mà Quý
                      khách đã cung cấp khi đặt hàng. Chúng tôi có thể sắp xếp
                      giao hàng đến một địa chỉ khác thuận tiện hơn hoặc tiến
                      hành hủy đơn hàng.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Khi nhận sản phẩm, Quý khách vui lòng kiểm tra kỹ bao, hộp
                      đóng gói đơn hàng trước khi ký nhận hàng hóa. Quý khách
                      vui lòng quay lại video thấy rõ mã đơn hàng, 6 mặt hộp
                      đóng gói đơn hàng và toàn bộ quá trình khui hộp đơn hàng.
                      Quý khách nên giữ lại biên lai mua hàng để làm bằng chứng
                      trong trường hợp muốn liên hệ lại về sản phẩm đã mua.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Chính sách kiểm hàng: “Không đồng kiểm, Quý khách vui lòng
                      quay lại video thấy rõ mã đơn hàng, 6 mặt hộp đóng gói đơn
                      hàng và toàn bộ quá trình khui hộp đơn hàng”.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Quý khách nên cẩn thận khi sử dụng vật sắc nhọn để mở sản
                      phẩm vì Quý khách có thể làm hỏng sản phẩm. NUTY không
                      chịu bất cứ rủi ro, tổn thất, hư hại về sản phẩm sau khi
                      Quý khách đã kiểm tra kỹ lưỡng và ký nhận sản phẩm.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Sản phẩm được đóng gói theo tiêu chuẩn đóng gói của NUTY.
                      Nếu Quý khách có nhu cầu đóng gói đặc biệt khác, vui lòng
                      cộng thêm phí phát sinh.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Trong trường hợp những đơn hàng đã xác nhận của Quý khách
                      được đặt ở những ngày gần nhau, NUTY sẽ cố gắng bổ sung
                      vào đơn hàng và giao chung một lần cho Quý khách.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Mọi thông tin về việc thay đổi hay hủy bỏ đơn hàng đề nghị
                      Quý khách thông báo sớm để NUTY có thể hủy hoặc chỉnh sửa
                      đơn hàng cho Quý khách.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Chỉ nhận đổi trả sản phẩm khi lỗi đến từ nhà sản xuất hoặc
                      bị hư hỏng trong quá trình vận chuyển với điều kiện không
                      quá 14 ngày sau khi giao hàng.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      NUTY nhận giao sản phẩm đến tận tay khách hàng và thanh
                      toán khi nhận hàng hoặc Quý khách hàng có thể chọn phương
                      thức thanh toán trực tuyến bằng Thẻ ATM nội địa khi đặt
                      hàng (nếu muốn). Lưu ý các đơn hàng có giá trị từ
                      3.000.000đ chỉ được áp dụng phương thức thanh toán trả
                      trước bằng Thẻ ATM nội địa (Internet Banking, VNpay QR và
                      ví VnMart - Miễn phí thanh toán) qua cổng thanh toán
                      VNPAY.
                    </p>
                  </Box>
                  <p style={{ margin: "10px 0" }}>
                    3.<b> Trách nhiệm của NUTY với đơn vị vận chuyển (ĐVVC):</b>
                  </p>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Không gửi hàng cấm gửi và thực hiện đầy đủ quy định đảm
                      bảo an ninh, an toàn bưu gửi (gói bọc, niêm phong, dán
                      nhãn lưu ý,...) theo quy định của bên ĐVVC và pháp luật
                      hiện hành.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Khai báo trung thực nội dung bưu gửi, chịu trách nhiệm về
                      hóa đơn, chứng từ đi kèm. Trường hợp cơ quan quản lý nhà
                      nước yêu cầu, NUTY có trách nhiệm làm việc trực tiếp và
                      cung cấp đầy đủ, kịp thời hóa đơn, chứng từ cho cơ quan
                      quản lý nhà nước.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Nộp phạt theo quy định của pháp luật và bồi thường thiệt
                      hại cho bên ĐVVC trong trường hợp bưu gửi bị tạm giữ, tịch
                      thu.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Thanh toán đúng hạn, đủ cước và các chi phí phát sinh (phí
                      hun trùng, thuế nhập khẩu, bưu gửi quốc tế,...) cho bên
                      ĐVVC.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Trong thời gian giải quyết khiếu nại không được tiết lộ
                      thông tin dưới mọi hình thức cho bất kỳ bên thứ ba nào.
                      Nếu vi phạm phải bồi thường toàn bộ thiệt hại cho bên
                      ĐVVC.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Cung cấp chứng từ hợp lý, hợp lệ chứng minh thiệt hại khi
                      khiếu nại.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Chịu trách nhiệm về mọi thông tin liên quan đến người nhận
                      mà NUTY giao cho ĐVVC. Trường hợp xảy ra sai sót về thông
                      tin người nhận thì NUTY có trách nhiệm tự giải quyết với
                      người nhận sau khi nhận được thông tin sai sót từ ĐVVC,
                      đồng thời ĐVVC vẫn được quyền tính cước phí dịch vụ bưu
                      chính đối với đơn hàng trên dựa trên lộ trình đã thực
                      hiện.
                    </p>
                  </Box>
                  <p style={{ margin: "10px 0" }}>
                    4.<b> Trách nhiệm của Đơn vị vận chuyển (ĐVVC) với NUTY:</b>
                  </p>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Bên ĐVVC cung cấp đầy đủ, chính xác thông tin dịch vụ cho
                      NUTY.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Bên ĐVVC cung cấp hóa đơn cung ứng dịch vụ cho bên NUTY
                      theo quy định của pháp luật.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Bảo đảm an toàn bưu gửi kể từ khi nhận gửi đến khi phát
                      cho người nhận, bí mật bưu gửi và chất lượng dịch vụ
                      chuyển phát theo cam kết của bên ĐVVC.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Trường hợp vỏ bọc bưu gửi bị hư hại, rách, bên ĐVVC có
                      trách nhiệm kiểm kê, lập biên bản hiện trạng, nếu lỗi
                      thuộc về bên ĐVVC thì sẽ bồi thường theo chính sách bồi
                      thường thệt hại được quy định trong hợp đồng đã ký.
                    </p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>Thanh toán tiền COD cho bên NUTY.</p>
                  </Box>
                  <p style={{ margin: "10px 0" }}>
                    5.<b> Trách nhiệm của NUTY đối với khách hàng:</b>
                  </p>
                  <p style={{ textIndent: "25px" }}>
                    NUTY sẽ giao hàng trong thời gian từ 24h đến 48h giờ (khu
                    vực nội thành Hồ Chí Minh và Hà Nội) kể từ lúc quý khách đặt
                    hàng. Đối với khác hàng thuộc khu vực khác, thời gian giao
                    hàng dự kiến từ 3-6 ngày.
                  </p>
                </Box>
              ) : (
                ""
              )}
              {active.id === 2 ? (
                <Box>
                  <p style={{ margin: "10px 0" }}>
                    Hệ thống phân phối mỹ phẩm <b>NUTY COSMETICS</b> chuyên cung
                    cấp các mặt hàng mỹ phẩm chính hãng với số lượng lớn với mức
                    giá cạnh tranh nhất hiện nay.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Hóa đơn đầu trên 5 triệu, mỗi sp lấy trên 2 mặt hàng.
                    <br></br> *** Lưu ý: Các sp có giá trị bán lẻ trên 500k, sau
                    hóa đơn trên 3 triệu mới được lấy.<br></br> Trong thời gian
                    10 ngày lấy ít nhất 1 hóa đơn trên 1 triệu. Mỗi lần ít nhất
                    3 sp, Shop sẽ lưu lại ngày lấy hàng của bạn. Nếu quá 10 ngày
                    sẽ bị cắt hóa đơn sỉ và lấy lại hóa đơn đầu 5 triệu.
                    <br></br> Khi mua hàng bạn đưa bill lần trước (bill mới
                    nhất) cho Shop kiểm tra.<br></br> Mỗi mã số sỉ chỉ được tối
                    đa 2 người biết và lấy hàng. Nếu Shop phát hiện mã số sỉ cho
                    người thứ 3 đi lấy thì Shop có quyền cắt mã số sỉ của bạn.
                    <br></br>
                    Khách sỉ kiểm tra hàng hóa và tiền bạc trước khi rời khỏi
                    quầy thu ngân. Shop sẽ không giải quyết mọi trường hợp khiếu
                    nại về sau.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Đặt hàng sỉ: Gửi đơn hàng qua{" "}
                    <b>Viber/Zalo SĐT 0948.685.843</b>
                    <br></br>
                    Hoặc liên hệ Hotline: <b>1900.636.737 (phím 6)</b>
                    <br></br> Mail: <b>nutycosmetics@gmail.com</b>
                    <br></br> Đối với Khách ở tỉnh: bạn Chuyển khoản trước rồi
                    shop gửi Nhà xe, tàu hoặc Chuyển phát nhanh tại các công ty
                    chuyển phát cho các bạn . Các bạn nhớ ghi địa chỉ, tên, số
                    điện thoại chính xác.
                  </p>
                </Box>
              ) : (
                ""
              )}
              {active.id === 3 ? (
                <Box>
                  <p style={{ margin: "10px 0" }}>1. Điều kiện đổi trả:</p>
                  <table style={{ textAlign: "center" }}>
                    <tr>
                      <th>Thời gian </th>
                      <th>Sản phẩm lỗi từ nhà sản xuất. </th>
                      <th>Sản phẩm lỗi từ phía người sử dụng. </th>
                      <th>
                        Sản phẩm không lỗi, chưa qua sử dụng, còn nguyên vẹn.
                      </th>
                    </tr>
                    <tr>
                      <td> 1-7 ngày</td>
                      <td> Đổi mới</td>
                      <td> Không hỗ trợ</td>
                      <td> Đổi mới</td>
                    </tr>
                    <tr>
                      <td> Trên 7 ngày</td>
                      <td colSpan={3}> Không hỗ trợ </td>
                    </tr>
                  </table>
                  <p style={{ margin: "10px 0" }}>
                    - Sản phẩm đổi trả phải có hóa đơn, xác nhận mua hàng, phụ
                    kiện và quà tặng kèm theo (nếu có).<br></br> - Sản phẩm được
                    đổi trả trong vòng 7 ngày tính từ ngày mua hàng tại cửa hàng
                    hoặc nhận từ nhân viên giao hàng.<br></br> - Trường hợp sản
                    phẩm cần đổi trả hết hàng, khách hàng được đổi sang sản phẩm
                    khác có giá trị tương đương hoặc cao hơn so với sản phẩm đổi
                    trả.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    2. Các trường hợp hỗ trợ đổi trả:
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    - Giao sai sản phẩm từ phía nhân viên. <br></br>- Sản phẩm
                    hư hỏng, móp méo do quá trình vận chuyển. <br></br>- Sản
                    phẩm lỗi kỹ thuật từ nhà sản xuất (hư hỏng, đổ vỡ sản
                    phẩm,…) <br></br>- Sản phẩm gần hết hạn sử dụng (trong vòng
                    3 tháng tính từ ngày hết hạn, trừ những hàng đang có giá
                    thanh lý, quà tặng hỗ trợ đi kèm).<br></br> - Sản phẩm còn
                    nguyên vẹn, đầy đủ tem mác, phụ kiện, quà tặng đi kèm và
                    chưa có dấu hiệu sử dụng.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    3. Các trường hợp không áp dụng đổi trả:
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    - Sản phẩm quà tặng.<br></br> - Thời gian đổi trả trên 7
                    ngày.
                    <br></br> - Sản phẩm đã qua sử dụng, không còn nguyên vẹn
                    tem mác hoặc seal (nếu có). <br></br>- Có dấu hiệu rách, hư
                    hỏng bao bì hoặc sản phẩm đã được thử từ 1 lần trở lên.
                  </p>
                  <p style={{ margin: "10px 0" }}>4. Hình thức đổi trả:</p>
                  <p style={{ margin: "10px 0" }}>
                    Nội thành HCM:<br></br> - Đối với đơn mua hàng trực tiếp tại
                    cửa hàng: Khách hàng vui lòng đem trực tiếp sản phẩm cần đổi
                    trả và hóa đơn kèm theo đến cửa hàng đã mua sắm, nhân viên
                    chúng tôi sẽ kiểm tra sản phẩm và hỗ trợ đổi trả theo quy
                    định. (Trường hợp mất hóa đơn, Khách hàng có thể cung cấp mã
                    số khách hàng hoặc số điện thoại). <br></br>- Đối với đơn
                    hàng mua online: Khách hàng vui lòng liên hệ Fanpage Nuty
                    Cosmetics cung cấp đầy đủ thông tin mua hàng và cụ thể tình
                    trạng sản phẩm (kèm theo hình ảnh) để chúng tôi có thể hỗ
                    trợ đổi trả một cách nhanh chóng.<br></br>
                    <br></br> Ngoại thành HCM: <br></br>- Nếu đến trực tiếp cửa
                    hàng: Khách hàng vui lòng đem theo sản phẩm cần đổi trả và
                    hóa đơn kèm theo, nhân viên chúng tôi sẽ kiểm tra sản phẩm
                    và hỗ trợ đổi trả theo quy định. <br></br>- Nếu gửi qua đối
                    tác giao nhận/ nhà xe/…: Khách hàng vui lòng liên hệ Fanpage
                    Nuty Cosmetics cung cấp đầy đủ thông tin mua hàng và cụ thể
                    tình trạng sản phẩm (kèm theo hình ảnh). Cần lưu ý gói kỹ
                    sản phẩm và xác nhận với bên giao nhận về tình trạng của sản
                    phẩm: còn nguyên niêm phong, nguyên vỏ hộp, nguyên vẹn không
                    bị vỡ hay hỏng hóc so với tình trạng ban đầu, còn đầy đủ phụ
                    kiện và quà tặng (nếu có). Khi nhận được sản phẩm từ đối tác
                    giao nhận, chúng tôi sẽ kiểm tra và đổi trả một cách sớm
                    nhất.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    5. Thông tin liên hệ và trung tâm chăm sóc khách hàng:
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Hệ thống cửa hàng:<br></br> - Add 1: 68 Ngô Đức Kế, Phường
                    Bến Nghé, Quận 1/ SĐT: 0896.642.969 <br></br>- Add 2: 235
                    Khánh Hội, Phường 5, Quận 4/ SĐT: 0896.644.969 <br></br>-
                    Add 3: 111 Lê Văn Việt, Phường Hiệp Phú, Quận 9/ SĐT:
                    0896.684.969 <br></br>- Add 4: 490 Ba Tháng Hai, Phường 14,
                    Quận 10/ SĐT: 0896.643.969 <br></br>- Add 5: 19 Út Tịch,
                    Phường 4, Quận Tân Bình/ SĐT: 0896.647.969 <br></br>- Add 6:
                    455 – 457 Phan Văn Trị, Phường 5, Quận Gò Vấp/ SĐT:
                    0896.648.969 <br></br>- Add 7: 163 Cầu Giấy, Phường Quan
                    Hoa, Quận Cầu Giấy, Hà Nội/ SĐT: 0896.583.969 <br></br>- Add
                    8: 162A Nguyễn Gia Trí (D2 cũ), P. 25, Q. Bình Thạnh, SĐT:
                    0768.557.969 <br></br>- Add 9: 225 Lê Văn Quới, P.Bình Trị
                    Đông, Q. Bình Tân, SĐT: 0768.717.969<br></br> Giờ hoạt động
                    từ 9h-22h (từ thứ 2 đến chủ nhật) <br></br>Trung tâm Chăm
                    sóc khách hàng: <br></br>- Khách hàng vui lòng gọi điện
                    thoại đến bộ phận CSKH 1900.636.737 (Phím 2) hoặc có thể
                    liên hệ trực tiếp Fanpage Nuty Cosmetics cung cấp đầy đủ và
                    cụ thể tình trạng sản phẩm (kèm theo hình ảnh) để nhận sự hỗ
                    trợ nhanh chóng từ chúng tôi.
                  </p>
                </Box>
              ) : (
                ""
              )}
              {active.id === 4 ? (
                <Box>
                  {arrFAQs.map((item, index) => {
                    return (
                      <Box
                        onClick={() => handleclickFAQ(item.id)}
                        className={
                          flag.includes(item.id) ? "activesuppostchildren" : ""
                        }
                        key={index}
                        margin={"10px 0"}
                        border={"1px solid grey"}
                        maxHeight={"56px"}
                        borderRadius={"15px"}
                        overflow={"hidden"}
                        sx={{ transition: ".7s" }}>
                        <Box
                          className={
                            flag.includes(item.id) ? "activesuppostitem" : ""
                          }
                          padding={"15px"}
                          display={"flex"}
                          bgcolor={"white"}
                          justifyContent={"space-between"}
                          alignItems={"center"}>
                          <Box display={"flex"}>
                            <b>0{item.id}</b>
                            <p>{item.title}</p>
                          </Box>
                          <Box>
                            {flag.includes(item.id) ? (
                              <i className='fa-solid fa-chevron-up'></i>
                            ) : (
                              <i className='fa-solid fa-chevron-down'></i>
                            )}
                          </Box>
                        </Box>
                        <div
                          style={{ margin: "15px" }}
                          dangerouslySetInnerHTML={createMarkup(
                            item.description
                          )}></div>
                      </Box>
                    );
                  })}
                </Box>
              ) : (
                ""
              )}
              {active.id === 5 ? (
                <Box>
                  <p style={{ margin: "10px 0" }}>
                    Khi truy cập trang web Nuty Cosmetics, nghĩa là quý khách
                    đồng ý chấp nhận thực hiện những mô tả trong Quy định bảo
                    mật. Nếu quý khách không đồng ý với các điều khoản của Chính
                    sách bảo mật thông tin, vui lòng không sử dụng hệ thống
                    trang web Nuty Cosmetics.<br></br>
                    <br></br> Thông báo bảo mật này được đưa ra để thể hiện vai
                    trò của chúng tôi trong vấn đề bảo mật trực tuyến và dịch vụ
                    khách hàng. Chúng tôi xử lý thông tin của quý khách bằng
                    tính trung thực và độ nhạy cảm - điều mà chúng tôi đã thể
                    hiện xuyên suốt quá trình phát triển của Nuty Cosmetics.
                    Trong quá trình xử lý thông tin Nuty Cosmetics luôn tuân thủ
                    theo các nguyên tắc bảo mật sau đây:
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>1. Mục đích và phạm vi thu thập thông tin</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Việc thu thập thông tin qua website Nuty Cosmetics sẽ giúp
                    chúng tôi:<br></br>
                    <br></br> - Nắm bắt được các nguyện vọng, mong muốn của
                    khách hàng nhằm nâng cao dịch vụ <br></br>
                    <br></br>- Giúp khách hàng cập nhật các chương trình khuyến
                    mại, giảm giá…do Nuty Cosmetics tổ chức sớm nhất<br></br>
                    <br></br> - Hỗ trợ khách hàng khi có khiếu nại, ý kiến một
                    cách nhanh nhất.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>2. Quy định thu thập thông tin cá nhân:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Để truy cập và sử dụng một số dịch vụ tại www.Nuty
                    Cosmetics, bạn có thể sẽ được yêu cầu đăng ký với chúng tôi
                    thông tin cá nhân (Email, Họ tên, Số ĐT liên lạc…). Mọi
                    thông tin khai báo phải đảm bảo tính chính xác và hợp pháp,
                    Nuty Cosmetics không chịu mọi trách nhiệm liên quan đến pháp
                    luật của thông tin khai báo. Chúng tôi cũng có thể thu thập
                    thông tin về số lần truy cập bao gồm: Số trang bạn xem, số
                    links (liên kết) bạn click và những thông tin khác liên quan
                    đến việc kết nối đến site www.Nuty Cosmetics.<br></br>
                    <br></br> Chúng tôi cũng thu thập các thông tin mà trình
                    duyệt Web (Browser) bạn sử dụng mỗi khi truy cập vào
                    www.Nuty Cosmetics, bao gồm: địa chỉ IP, loại Browser, ngôn
                    ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất
                    đến.<br></br>
                    <br></br> - Nuty Cosmetics cam kết bảo vệ các thông tin
                    riêng tư của khách hàng thông qua hệ thống bảo mật của
                    website, không sử dụng nó vì mục đích thương mại hay bất cứ
                    mục đích nào khác. Chúng tôi sử dụng các biện pháp an ninh
                    bảo mật thông tin để chống mất mát, nhầm lẫn hoặc thay đổi
                    dữ liệu trong hệ thống.<br></br>
                    <br></br> - Nuty Cosmetics cam kết sẽ chỉ sử dụng thông tin
                    để nhằm tạo môi trường mua sắm an toàn, tiện lợi, chuyên
                    nghiệp và nâng cao chất lượng dịch vụ chăm sóc khách hàng.
                    Ngoài ra, những thông tin cũng chỉ được chúng tôi dùng trong
                    việc giải quyết các vấn đề liên quan tới khiếu nại phát sinh
                    trong việc mua bán, thanh toán qua website, và ngăn chặn
                    những hoạt động vi phạm pháp luật Việt Nam.<br></br>
                    <br></br> - Nuty Cosmetics cam kết không chia sẻ, bán hoặc
                    cho thuê thông tin cá nhân với bất cứ ai, bất cứ hình thức
                    nào. Thông tin của quý khách gửi cho chúng tôi chỉ do nhân
                    viên Nuty Cosmetics quản lý và sử dụng cho mục đích liên hệ
                    hoặc gửi email để cung cấp thông tin cho quý khách.<br></br>
                    <br></br> Chúng tôi sẽ gửi các thông tin cá nhân về quý
                    khách cho các công ty hoặc các cá nhân khác trong trường
                    hợp:<br></br>
                    <br></br> +/ Chúng tôi được quý khách đồng ý cho tiết lộ
                    thông tin đó.<br></br>
                    <br></br> +/ Chúng tôi cần tiết lộ thông tin của quý khách
                    (số điện thoại, tên, địa chỉ giao hàng) cho đối tác giao
                    hàng để cung cấp các sản phẩm hoặc dịch vụ liên quan tới
                    việc liên lạc với quý khách.<br></br>
                    <br></br> +/ Chúng tôi tuân theo các trát lệnh, lệnh tòa án
                    hoặc thủ tục pháp lý. <br></br>
                    <br></br>+/ Chúng tôi thấy rằng các hành động của quý khách
                    trên các trang web của chúng tôi là vi phạm các quy định
                    hướng dẫn sử dụng của chúng tôi đối với các sản phẩm hoặc
                    dịch vụ nhất định.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>Lưu ý</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Khi khách hàng đặt hàng trực tuyến tại website Nuty
                    Cosmetics, quý khách sẽ được yêu cầu cung cấp thông tin liên
                    hệ (số điện thoại, họ tên, email), địa chỉ giao hàng, phương
                    thức thanh toán và thông tin thanh toán. Trong trường hợp
                    quý khách hàng chọn phương thức thanh toán trực tuyến (gồm
                    thanh toán quét mã VNPAY, thẻ ATM và tài khoản ngân hàng,
                    thẻ thanh toán quốc tế, thanh toán qua các cổng trực tuyến
                    như: momo, zalo pay, shopeepay.....) thì các thông tin liên
                    quan đến ứng dụng mobi banking, thông tin thẻ thanh toán ...
                    không phải là thông tin mà cskh.nutycosmetics@gmail.comthu
                    thập.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>3. Thay đổi về chính sách:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Nội dung của “Chính sách bảo mật” này có thể thay đổi để phù
                    hợp với các nhu cầu của Nuty Cosmetics cũng như nhu cầu và
                    sự phản hồi từ khách hàng nếu có. Khi cập nhật nội dung
                    chính sách này, chúng tôi sẽ chỉnh sửa lại thời gian “Cập
                    nhật lần cuối” bên trên. Nội dung “Chính sách bảo mật” này
                    chỉ áp dụng tại<br></br>
                    <br></br> www.Nuty Cosmetics, không bao gồm hoặc liên quan
                    đến các bên thứ ba đặt quảng cáo hay có link tại www.Nuty
                    Cosmetics. Do đó, chúng tôi đề nghị bạn đọc và tham khảo kỹ
                    nội dung “Chính sách bảo mật” của từng website mà bạn đang
                    truy cập.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>4. Quy định sửa đổi/ xóa bỏ/ từ chối thông tin</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Nếu tên, địa chỉ email hoặc địa chỉ nhà, số điện thoại hoặc
                    các thông tin cá nhân khác của quý khách có thay đổi, quý
                    khách có thể cập nhật, sửa đổi hoặc bỏ đi các thông tin có
                    liên quan bằng cách liên hệ với chúng tôi theo email:
                    <br></br>
                    <br></br>
                    cskh.nutycosmetics@gmail.com. Ngoài ra, nếu quý khách không
                    muốn tiếp tục nhận thông tin newsletter qua email từ chúng
                    tôi, quý khách vui lòng gửi email đến:
                    cskh.nutycosmetics@gmail.com hoặc bằng cách nhấn chuột vào
                    liên kết không tiếp tục nhận thông tin trong bất kỳ
                    Newsletter email nào mà chúng tôi đã gửi đến quý khách.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>5. Thông tin liên hệ:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Nếu quý khách có bất kỳ câu hỏi hay thắc mắc gì về điều
                    khoản Bảo mật này, vui lòng liên hệ chúng tôi qua đường dây
                    nóng: 1900 636 737 hoặc email: cskh.nutycosmetics@gmail.com
                    <br></br>
                    <br></br>
                    Tên doanh nghiệp: Nuty Cosmetics<br></br>
                    <br></br>Địa chỉ: 68 Ngô Đức Kế, Phường Bến Nghé, Quận 1,
                    Thành phố Hồ Chí Minh
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>
                      6. Phương thức và công cụ để người dùng tiếp cận và chỉnh
                      sửa dữ liệu:
                    </b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Khách hàng hội viên có quyền tự kiểm tra, cập nhật, điều
                    chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng
                    nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu
                    cầu ban quản trị thực hiện việc này.
                    <br></br>
                    <br></br>
                    Khách hàng hội viên có quyền gửi khiếu nại về việc lộ thông
                    tin cá nhân cho bên thứ 3. Khi tiếp nhận những phản hồi này,
                    chúng tôi sẽ xác nhận lại thông tin, phải có trách nhiệm trả
                    lời lý do và hướng dẫn thành viên khôi phục và bảo mật lại
                    thông tin.
                  </p>
                </Box>
              ) : (
                ""
              )}
              {active.id === 6 ? (
                <Box>
                  <p style={{ margin: "10px 0" }}>
                    Khi truy cập trang web Nuty Cosmetics, nghĩa là quý khách
                    đồng ý chấp nhận thực hiện những mô tả trong Quy định bảo
                    mật. Nếu quý khách không đồng ý với các điều khoản của Chính
                    sách bảo mật thông tin, vui lòng không sử dụng hệ thống
                    trang web Nuty Cosmetics.
                    <br></br>
                    <br></br>
                    Thông báo bảo mật này được đưa ra để thể hiện vai trò của
                    chúng tôi trong vấn đề bảo mật trực tuyến và dịch vụ khách
                    hàng. Chúng tôi xử lý thông tin của quý khách bằng tính
                    trung thực và độ nhạy cảm - điều mà chúng tôi đã thể hiện
                    xuyên suốt quá trình phát triển của Nuty Cosmetics. Trong
                    quá trình xử lý thông tin Nuty Cosmetics luôn tuân thủ theo
                    các nguyên tắc bảo mật sau đây:
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>1. Mục đích và phạm vi thu thập thông tin</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Việc thu thập thông tin qua website Nuty Cosmetics sẽ giúp
                    chúng tôi:<br></br>
                    <br></br> - Nắm bắt được các nguyện vọng, mong muốn của
                    khách hàng nhằm nâng cao dịch vụ <br></br>
                    <br></br>- Giúp khách hàng cập nhật các chương trình khuyến
                    mại, giảm giá…do Nuty Cosmetics tổ chức sớm nhất <br></br>
                    <br></br>- Hỗ trợ khách hàng khi có khiếu nại, ý kiến một
                    cách nhanh nhất.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>2. Quy định thu thập thông tin cá nhân:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Để truy cập và sử dụng một số dịch vụ tại www.Nuty
                    Cosmetics, bạn có thể sẽ được yêu cầu đăng ký với chúng tôi
                    thông tin cá nhân (Email, Họ tên, Số ĐT liên lạc…). Mọi
                    thông tin khai báo phải đảm bảo tính chính xác và hợp pháp,
                    Nuty Cosmetics không chịu mọi trách nhiệm liên quan đến pháp
                    luật của thông tin khai báo. Chúng tôi cũng có thể thu thập
                    thông tin về số lần truy cập bao gồm: Số trang bạn xem, số
                    links (liên kết) bạn click và những thông tin khác liên quan
                    đến việc kết nối đến site www.Nuty Cosmetics.<br></br>
                    <br></br> Chúng tôi cũng thu thập các thông tin mà trình
                    duyệt Web (Browser) bạn sử dụng mỗi khi truy cập vào
                    www.Nuty Cosmetics, bao gồm: địa chỉ IP, loại Browser, ngôn
                    ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất
                    đến.<br></br>
                    <br></br> - Nuty Cosmetics cam kết bảo vệ các thông tin
                    riêng tư của khách hàng thông qua hệ thống bảo mật của
                    website, không sử dụng nó vì mục đích thương mại hay bất cứ
                    mục đích nào khác. Chúng tôi sử dụng các biện pháp an ninh
                    bảo mật thông tin để chống mất mát, nhầm lẫn hoặc thay đổi
                    dữ liệu trong hệ thống.<br></br>
                    <br></br> - Nuty Cosmetics cam kết sẽ chỉ sử dụng thông tin
                    để nhằm tạo môi trường mua sắm an toàn, tiện lợi, chuyên
                    nghiệp và nâng cao chất lượng dịch vụ chăm sóc khách hàng.
                    Ngoài ra, những thông tin cũng chỉ được chúng tôi dùng trong
                    việc giải quyết các vấn đề liên quan tới khiếu nại phát sinh
                    trong việc mua bán, thanh toán qua website, và ngăn chặn
                    những hoạt động vi phạm pháp luật Việt Nam.<br></br>
                    <br></br> - Nuty Cosmetics cam kết không chia sẻ, bán hoặc
                    cho thuê thông tin cá nhân với bất cứ ai, bất cứ hình thức
                    nào. Thông tin của quý khách gửi cho chúng tôi chỉ do nhân
                    viên Nuty Cosmetics quản lý và sử dụng cho mục đích liên hệ
                    hoặc gửi email để cung cấp thông tin cho quý khách. Chúng
                    tôi sẽ gửi các thông tin cá nhân về quý khách cho các công
                    ty hoặc các cá nhân khác trong trường hợp:<br></br>
                    <br></br> +/ Chúng tôi được quý khách đồng ý cho tiết lộ
                    thông tin đó. <br></br>
                    <br></br>+/ Chúng tôi cần tiết lộ thông tin của quý khách
                    (số điện thoại, tên, địa chỉ giao hàng) cho đối tác giao
                    hàng để cung cấp các sản phẩm hoặc dịch vụ liên quan tới
                    việc liên lạc với quý khách.<br></br>
                    <br></br> +/ Chúng tôi tuân theo các trát lệnh, lệnh tòa án
                    hoặc thủ tục pháp lý. <br></br>
                    <br></br>+/ Chúng tôi thấy rằng các hành động của quý khách
                    trên các trang web của chúng tôi là vi phạm các quy định
                    hướng dẫn sử dụng của chúng tôi đối với các sản phẩm hoặc
                    dịch vụ nhất định.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>Lưu ý</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Khi khách hàng đặt hàng trực tuyến tại website Nuty
                    Cosmetics, quý khách sẽ được yêu cầu cung cấp thông tin liên
                    hệ (số điện thoại, họ tên, email), địa chỉ giao hàng, phương
                    thức thanh toán và thông tin thanh toán. Trong trường hợp
                    quý khách hàng chọn phương thức thanh toán trực tuyến (gồm
                    thanh toán quét mã VNPAY, thẻ ATM và tài khoản ngân hàng,
                    thẻ thanh toán quốc tế, thanh toán qua các cổng trực tuyến
                    như: momo, zalo pay, shopeepay.....) thì các thông tin liên
                    quan đến ứng dụng mobi banking, thông tin thẻ thanh toán ...
                    không phải là thông tin mà cskh.nutycosmetics@gmail.comthu
                    thập.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>3. Thay đổi về chính sách:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Nội dung của “Chính sách bảo mật” này có thể thay đổi để phù
                    hợp với các nhu cầu của Nuty Cosmetics cũng như nhu cầu và
                    sự phản hồi từ khách hàng nếu có. Khi cập nhật nội dung
                    chính sách này, chúng tôi sẽ chỉnh sửa lại thời gian “Cập
                    nhật lần cuối” bên trên. Nội dung “Chính sách bảo mật” này
                    chỉ áp dụng tại<br></br>
                    <br></br> www.Nuty Cosmetics, không bao gồm hoặc liên quan
                    đến các bên thứ ba đặt quảng cáo hay có link tại www.Nuty
                    Cosmetics. Do đó, chúng tôi đề nghị bạn đọc và tham khảo kỹ
                    nội dung “Chính sách bảo mật” của từng website mà bạn đang
                    truy cập.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>4. Quy định sửa đổi/ xóa bỏ/ từ chối thông tin</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Nếu tên, địa chỉ email hoặc địa chỉ nhà, số điện thoại hoặc
                    các thông tin cá nhân khác của quý khách có thay đổi, quý
                    khách có thể cập nhật, sửa đổi hoặc bỏ đi các thông tin có
                    liên quan bằng cách liên hệ với chúng tôi theo email:
                    <br></br>
                    <br></br>
                    cskh.nutycosmetics@gmail.com. Ngoài ra, nếu quý khách không
                    muốn tiếp tục nhận thông tin newsletter qua email từ chúng
                    tôi, quý khách vui lòng gửi email đến:
                    cskh.nutycosmetics@gmail.com hoặc bằng cách nhấn chuột vào
                    liên kết không tiếp tục nhận thông tin trong bất kỳ
                    Newsletter email nào mà chúng tôi đã gửi đến quý khách.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>5. Thông tin liên hệ:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Nếu quý khách có bất kỳ câu hỏi hay thắc mắc gì về điều
                    khoản Bảo mật này, vui lòng liên hệ chúng tôi qua đường dây
                    nóng: 1900 636 737 hoặc email: cskh.nutycosmetics@gmail.com
                    <br></br>
                    <br></br>
                    Tên doanh nghiệp: Nuty Cosmetics<br></br>
                    <br></br>Địa chỉ: 68 Ngô Đức Kế, Phường Bến Nghé, Quận 1,
                    Thành phố Hồ Chí Minh
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>
                      6. Phương thức và công cụ để người dùng tiếp cận và chỉnh
                      sửa dữ liệu:
                    </b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Khách hàng hội viên có quyền tự kiểm tra, cập nhật, điều
                    chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng
                    nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu
                    cầu ban quản trị thực hiện việc này.
                    <br></br>
                    <br></br>
                    Khách hàng hội viên có quyền gửi khiếu nại về việc lộ thông
                    tin cá nhân cho bên thứ 3. Khi tiếp nhận những phản hồi này,
                    chúng tôi sẽ xác nhận lại thông tin, phải có trách nhiệm trả
                    lời lý do và hướng dẫn thành viên khôi phục và bảo mật lại
                    thông tin.
                  </p>
                </Box>
              ) : (
                ""
              )}
              {active.id === 7 ? (
                <Box>
                  <p style={{ margin: "10px 0" }}>
                    <b>1. Thanh toán trực tiếp tại cửa hàng:</b>
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    Thanh toán bằng tiền mặt hoặc bằng các loại thẻ thanh toán
                    thẻ ghi nợ được chấp nhận theo quy định pháp luật hiện hành.
                  </p>
                  <p style={{ margin: "10px 0" }}>
                    <b>
                      2. Thanh toán khi mua hàng online qua website và ứng dụng
                      của NUTY:
                    </b>
                  </p>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>Thanh toán bằng tiền mặt khi nhận hàng (COD).</p>
                  </Box>
                  <Box my={"10px"} display={"flex"}>
                    <i
                      style={{ margin: "3px 10px 0 0" }}
                      className='fa-solid fa-arrow-right-long'></i>
                    <p>
                      Thanh toán trực tuyến (Internet Banking, VNPAY-QR, Ví điện
                      tử VNPAY, Visa - Miễn phí thanh toán) qua cổng thanh toán
                      VNPAY.
                    </p>
                  </Box>
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
