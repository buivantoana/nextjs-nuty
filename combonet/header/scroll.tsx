import { LayoutProps } from "@/modal/main";
import { Container } from "@mui/material";
import * as React from "react";
import { number } from "yup";

export interface IScrolProps {}

export function Scrol({ children }: LayoutProps) {
  const [scroll, setscroll] = React.useState(0);

  const handlescroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setscroll(scrollTop);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <Container
      className='header'
      maxWidth={"xl"}
      sx={
        scroll >= 64.5381851196289
          ? {
              width: "100%",
              position: "fixed",
              height: "112px",
              left: "0",
              top: 0,
              bgcolor: "white",
              padding: "0 120px !important",
              zIndex: 4,
            }
          : {
              width: "100%",
              position: "relative",
              bgcolor: "white",
              padding: "0 120px !important",
              zIndex: 4,
            }
      }>
      {children}
    </Container>
  );
}
