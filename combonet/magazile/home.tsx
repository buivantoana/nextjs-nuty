import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import Link from "next/link";
import { item } from "../../pages/product/[...productitem]";

export interface IMagazilehomeProps {
  categorymagazile: [
    {
      id: number;
      categorymagazilename: string;
    }
  ];
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

export function Magazilehome({
  categorymagazile,
  magazile,
}: IMagazilehomeProps) {
  let [datamagazile, setdatamagazile] = React.useState<any>([]);
  React.useEffect(() => {
    setdatamagazile(magazile);
  }, []);
  const handlecategorymagazile = (id: number) => {
    let filter = magazile.filter((item: any) => {
      return item.categorymagazile_id === id;
    });
    if (filter.length > 0) {
      setdatamagazile(filter);
    } else {
      setdatamagazile([]);
    }
  };
  const handlehome = () => {
    setdatamagazile(magazile);
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='TẠP CHÍ NUTY' />
        <Stack direction={"row"} mb={"40px"} justifyContent={"space-between"}>
          <Box width={"75%"}>
            <Typography variant='h5'>TẠP CHÍ NUTY</Typography>
            {datamagazile.length > 0 ? (
              <Box display={"flex"} my={"20px"} gap={"40px"} flexWrap={"wrap"}>
                {datamagazile &&
                  datamagazile.length &&
                  datamagazile.map((item: any, index: number) => {
                    return (
                      <Box
                        className='magazilehover'
                        key={index}
                        flexBasis={"30%"}
                        textAlign={"center"}
                        sx={{ cursor: "pointer" }}>
                        <Link
                          href={`./magazile/${item.magazilename}/${item.id}`}>
                          <img
                            className='magazileimg'
                            width={"100%"}
                            style={{ borderRadius: "8px", margin: "0 auto" }}
                            src={item.image}
                            alt=''
                          />
                          <span>28/06/2022</span>

                          <p>{item.magazilename}</p>
                          <b>
                            Chi Tiết <i className='fa-solid fa-arrow-right'></i>
                          </b>
                        </Link>
                      </Box>
                    );
                  })}
              </Box>
            ) : (
              <Typography textAlign={"center"} my={"30px"}>
                Không có bài viết về danh mục này.
              </Typography>
            )}
          </Box>
          <Box width={"20%"}>
            <Box>
              <Box onClick={handlehome} sx={{ cursor: "pointer" }}>
                <Typography>TẠP CHÍ NUTY</Typography>
              </Box>
              <ul>
                {categorymagazile &&
                  categorymagazile.length &&
                  categorymagazile.map((item, index) => {
                    return (
                      <li
                        onClick={() => handlecategorymagazile(item.id)}
                        key={index}>
                        {item.categorymagazilename}
                      </li>
                    );
                  })}
              </ul>
            </Box>
            <hr style={{ margin: "30px 0" }} />
            <Typography variant='h5'>Bài Viết Mới Nhất</Typography>
            {magazile &&
              magazile.length &&
              magazile.map((item, index) => {
                return (
                  <Link href={`./magazile/${item.magazilename}/${item.id}`}>
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
      </Container>
    </Box>
  );
}
