import { Box, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Header } from "../headercontainer";

import GoogleMapReact from "google-map-react";

const Marker: React.FC<MarkerInfo> = ({ text, lat, lng }) => (
  <div
    id='click'
    style={{
      position: "absolute",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}>
    <div
      style={{
        color: "white",
        padding: "8px 16px",
        borderRadius: "4px",
      }}>
      <i
        style={{ fontSize: "30px", color: "red" }}
        className='fa-solid fa-location-dot'></i>
    </div>
  </div>
);
const location = [
  {
    id: 1,
    lat: 10.772536024513636,
    lng: 106.70429272802245,
    text: "CHI NHÁNH QUẬN 1",
    address: "68 Ngô Đức Kế, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
    phone: "0896 642 969",
  },
  {
    id: 2,
    lat: 10.846795495284422,
    lng: 106.7778802223215,
    text: "CHI NHÁNH QUẬN 9",
    address: "111 Lê Văn Việt, Phường Hiệp Phú, Quận 9, Hồ Chí Minh",
    phone: "0896 684 969",
  },
  {
    id: 3,
    lat: 10.76727782886246,
    lng: 106.66595946498427,
    text: "CHI NHÁNH QUẬN 10",
    address: "490 Đường 3/2, Phường 14, Quận 10, Hồ Chí Minh",
    phone: "0896 643 969",
  },
  {
    id: 4,
    lat: 10.80565045257596,
    lng: 106.71570119533146,
    text: "CHI NHÁNH BÌNH THẠNH",
    address: "162A Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Hồ Chí Minh",
    phone: "0768 557 969",
  },
  {
    id: 5,
    lat: 10.828113863484944,
    lng: 106.68645079277506,
    text: "CHI NHÁNH GÒ VẤP",
    address: "455-457 Phan Văn Trị, Phường 05, Quận Gò Vấp, Hồ Chí Minh",
    phone: "0896 648 969",
  },
];

export interface IAddressContainerProps {}
interface MarkerInfo {
  lat: number;
  lng: number;
  text: string;
}
export function AddressContainer(props: IAddressContainerProps) {
  let mapRef = React.useRef<google.maps.Map | null>(null);
  const [active, setactive] = React.useState(1);

  const defaultProps = {
    center: {},
    options: {
      mapTypeId: "roadmap",
      zoomControl: true,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,

      disableDefaultUI: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    },
    zoom: 20,
  };

  const handleclickref = (lat: number, lng: number, id: number) => {
    setactive(id);
    if (mapRef.current) {
      mapRef.current.setCenter({
        lat: lat,
        lng: lng,
      });
    }
  };
  const handleApiLoaded = (map: google.maps.Map) => {
    mapRef.current = map;
    // Lưu đối tượng map vào biến hoặc ref tùy thuộc vào việc bạn muốn sử dụng nó ở đâu
  };

  return (
    <Box marginBottom={"30px"}>
      <Container maxWidth={"xl"} sx={{ width: "1300px" }}>
        <Header name='Cửa hàng' />
        <Typography variant='h6' mb={"20px"}>
          HỆ THỐNG CHI NHÁNH
        </Typography>
        <Stack direction={"row"}>
          <Box
            className='address'
            width={"400px"}
            height={"600px"}
            sx={{ overflowY: "scroll", overflowX: "hidden" }}>
            {location.map((item, index) => {
              return (
                <div
                  style={{
                    width: "400px",
                    height: "194px",
                    background: "white",
                    padding: "15px",
                    borderBottom: "1px solid grey",
                  }}
                  className={active === item.id ? "activeaddress" : ""}
                  key={index}
                  onClick={() => handleclickref(item.lat, item.lng, item.id)}>
                  <Box>
                    <Typography mb={"15px"}>{item.text}</Typography>
                    <Box display={"flex"} gap={1} mb={"15px"}>
                      <i className='fa-solid fa-location-dot'></i>
                      <p>{item.address}</p>
                    </Box>
                    <Box display={"flex"} gap={1} mb={"15px"}>
                      <i className='fa-solid fa-phone'></i>
                      <p>{item.phone}</p>
                    </Box>
                    <Box display={"flex"} gap={1} mb={"15px"}>
                      <i className='fa-solid fa-envelope'></i>
                      <p>nutycosmetics@gmail.com</p>
                    </Box>
                  </Box>
                </div>
              );
            })}
          </Box>
          <Box style={{ height: "600px", width: "840px" }}>
            <GoogleMapReact
              onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
              options={defaultProps.options}
              bootstrapURLKeys={{
                key: "AIzaSyDonv4RF9rwbuSAVXbkuRt-_nu0skxZoIg",
              }}
              defaultCenter={{
                lat: 10.772536024513636,
                lng: 106.70429272802245,
              }}
              defaultZoom={defaultProps.zoom}>
              {location.map((item, index) => {
                return (
                  <Marker
                    key={index}
                    lat={item.lat}
                    lng={item.lng}
                    text={item.text}
                  />
                );
              })}
            </GoogleMapReact>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
