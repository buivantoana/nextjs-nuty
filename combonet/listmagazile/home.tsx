import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import Link from "next/link";
import { item } from "../../pages/product/[...productitem]";
import { useRouter } from "next/router";
import Slider from "react-slick";

export interface IMagazilehomeProps {
  magazile: [
    {
      id: number;
      magazilename: string;
      categorymagazile_id: number;
      magaziledes: string;
      image: string;
      date: string;
    }
  ];
}

export function ListMagazilehome({ magazile }: IMagazilehomeProps) {
  let [datamagazile, setdatamagazile] = React.useState<any>([]);
  let [listmagazile, setlistmagazile] = React.useState<any>([]);
  let history = useRouter();
  let id: any = history && history.query.magazile && history.query?.magazile[1];
  React.useEffect(() => {
    let arr = magazile.filter((item) => {
      return item.id === +id;
    });
    setlistmagazile(magazile);
    setdatamagazile(arr);
  }, [id]);

  const handlehome = () => {
    setdatamagazile(magazile);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const createMarkup = (htmlContent: string): { __html: string } => {
    return { __html: htmlContent };
  };
  console.log(datamagazile);
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='TẠP CHÍ NUTY' />
        <Stack direction={"row"} mb={"40px"} justifyContent={"space-between"}>
          <Box width={"75%"}>
            <Typography variant='h5' mb={"20px"}>
              {history && history.query.magazile && history.query?.magazile[0]}{" "}
            </Typography>
            <Box width={"100%"} bgcolor={"white"} padding={"50px"}>
              <div
                dangerouslySetInnerHTML={createMarkup(
                  datamagazile &&
                    datamagazile.length &&
                    datamagazile[0].magaziledes
                )}></div>
            </Box>
          </Box>
          <Box width={"23%"}>
            <Typography variant='h5'> TẠP CHÍ NUTY</Typography>
            {magazile &&
              magazile.length &&
              magazile.map((item, index) => {
                return (
                  <Link href={`../magazile/${item.magazilename}/${item.id}`}>
                    <Box display={"flex"} my={"10px"} gap={"15px"}>
                      <img
                        width={105}
                        style={{ borderRadius: "8px" }}
                        height={67}
                        src={item.image}
                        alt=''
                      />
                      <Box width={200}>
                        <span>28/06/2022</span>
                        <p style={{ fontSize: "12px" }}>{item.magazilename}</p>
                      </Box>
                    </Box>
                  </Link>
                );
              })}
          </Box>
        </Stack>
        <Box width={"100%"} my={"40px"}>
          <Typography variant='h4' mb={"20px"}>
            Tin tức khác
          </Typography>
          <Slider className='magazile' {...settings}>
            {listmagazile &&
              listmagazile.length &&
              listmagazile.map((item: any, index: number) => {
                return (
                  <Box
                    key={index}
                    width={"100%"}
                    px={"10px"}
                    textAlign={"center"}>
                    <Link href={`../magazile/${item.magazilename}/${item.id}`}>
                      <img
                        className='magazileimg'
                        width={"100%"}
                        style={{ borderRadius: "8px", margin: "0 auto" }}
                        src={item.image}
                        alt=''
                      />
                      <span>28/06/2022</span>
                      <p style={{ width: "100%", margin: "0 auto" }}>
                        {item.magazilename}
                      </p>
                      <b>
                        Chi Tiết <i className='fa-solid fa-arrow-right'></i>
                      </b>
                    </Link>
                  </Box>
                );
              })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
