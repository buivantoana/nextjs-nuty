import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";
import Image from "next/image";
import image1 from "../../image/brand/10-paula_s-choice.png";
import { gettypebrand } from "@/service";
export interface IBrandhomeProps {
  zero: { data: [] };
  A: { data: [] };
  B: { data: [] };
  C: { data: [] };
  D: { data: [] };
  E: { data: [] };
  F: { data: [] };
  G: { data: [] };
  H: { data: [] };
  I: { data: [] };
  J: { data: [] };
  K: { data: [] };
  L: { data: [] };
  M: { data: [] };
  N: { data: [] };
  O: { data: [] };
  P: { data: [] };
  R: { data: [] };
  S: { data: [] };
  T: { data: [] };
  U: { data: [] };
  V: { data: [] };
  W: { data: [] };
  Y: { data: [] };
}

export function Brandhome({
  zero,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  R,
  S,
  T,
  U,
  V,
  W,
  Y,
}: IBrandhomeProps) {
  const array: string[] = [
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "J",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
  ];

  return (
    <Box>
      <Container maxWidth='xl' sx={{ width: "1300px" }}>
        <Header name='Thương hiệu' />
        <Box
          width='1300px'
          height='56px'
          display={"flex"}
          justifyContent='flex-start'
          alignItems={"center"}
          bgcolor={"white"}
          position={"fixed"}
          bottom={0}
          left={120}>
          <ul style={{ display: "flex", gap: "6px" }}>
            {array.map((item, index) => {
              return (
                <li style={{ padding: "0 15px" }} key={index}>
                  <a href={item === "0-9" ? "#" : `#${item}`}>{item}</a>
                </li>
              );
            })}
          </ul>
        </Box>
        <Box>
          <Box id='A'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              0-9
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {zero &&
                zero.data.length &&
                zero.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='B'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              A
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {A &&
                A.data.length &&
                A.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='C'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              B
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {B &&
                B.data.length &&
                B.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='D'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              C
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {C &&
                C.data.length &&
                C.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='E'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              D
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {D &&
                D.data.length &&
                D.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='F'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              E
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {E &&
                E.data.length &&
                E.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='G'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              F
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {F &&
                F.data.length &&
                F.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='H'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              G
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {G &&
                G.data.length &&
                G.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='I'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              H
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {H &&
                H.data.length &&
                H.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='K'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              I
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {I &&
                I.data.length &&
                I.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='J'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              K
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {K &&
                K.data.length &&
                K.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='L'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              J
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {J &&
                J.data.length &&
                J.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='M'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              L
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {L &&
                L.data.length &&
                L.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='N'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              M
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {M &&
                M.data.length &&
                M.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='O'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              N
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {N &&
                N.data.length &&
                N.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='P'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              O
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {O &&
                O.data.length &&
                O.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='R'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              P
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {P &&
                P.data.length &&
                P.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='S'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              R
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {R &&
                R.data.length &&
                R.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='T'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              S
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {S &&
                S.data.length &&
                S.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='U'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              T
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {T &&
                T.data.length &&
                T.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='V'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              U
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {U &&
                U.data.length &&
                U.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='W'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              V
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {V &&
                V.data.length &&
                V.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box id='Y'>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              W
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {W &&
                W.data.length &&
                W.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
          <Box>
            <Typography
              variant='h4'
              fontWeight={500}
              fontSize='26px !important'
              marginBottom={"18px"}
              marginTop={"33px"}>
              Y
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} width={"100%"}>
              {Y &&
                Y.data.length &&
                Y.data.map(
                  (item: { image: string; brandname: string }, index) => {
                    return (
                      <Box flexBasis={"20%"} textAlign={"center"} key={index}>
                        <Image
                          src={item.image}
                          className='brandimage'
                          width={182}
                          height={182}
                          alt='brand'
                        />
                        <Typography>{item.brandname}</Typography>
                      </Box>
                    );
                  }
                )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
