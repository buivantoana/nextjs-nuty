import { Box, Container, Stack } from "@mui/material";

import Image from "next/image";
import * as React from "react";
import anh1 from "../../image/lấy.jpg";
import anh2 from "../../image/dưới.jpg";
import anh3 from "../../image/z4283646549721_b1944bde1eaa61a5cf4f56779298a49a.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Container
        maxWidth='xl'
        className='slider'
        sx={{
          width: "1300px",
          height: "400px",
          position: "relative",
          top: "-20px",
          zIndex: 1,
        }}>
        <Stack width='100%' direction={"row"}>
          <Box
            marginRight='10px'
            width='847px'
            borderRadius={"10px"}
            overflow={"hidden"}>
            <Slider className='sliderimage' {...settings}>
              <div>
                <Image
                  src={anh3}
                  width={860}
                  style={{ borderRadius: "10px" }}
                  height={406}
                  alt='slider'
                />
              </div>
              <div>
                <Image
                  src={anh3}
                  width={860}
                  style={{ borderRadius: "10px" }}
                  height={406}
                  alt='slider'
                />
              </div>
              <div>
                <Image
                  src={anh3}
                  width={860}
                  style={{ borderRadius: "10px" }}
                  height={406}
                  alt='slider'
                />
              </div>
              <div>
                <Image
                  src={anh3}
                  width={860}
                  style={{ borderRadius: "10px" }}
                  height={406}
                  alt='slider'
                />
              </div>
              <div>
                <Image
                  src={anh3}
                  width={860}
                  style={{ borderRadius: "10px" }}
                  height={406}
                  alt='slider'
                />
              </div>
              <div>
                <Image
                  src={anh3}
                  width={860}
                  style={{ borderRadius: "10px" }}
                  height={406}
                  alt='slider'
                />
              </div>
            </Slider>
          </Box>
          <Box sx={{ float: "right" }}>
            <Image
              width={400}
              style={{ marginBottom: "16px", borderRadius: "10px" }}
              height={200}
              src={anh1}
              alt='lay'
            />
            <Image
              width={400}
              style={{ borderRadius: "10px" }}
              height={200}
              src={anh2}
              alt='duoi'
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
export default SliderImage;
