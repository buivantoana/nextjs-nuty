import { Box, Stack } from "@mui/material";
import { match } from "assert";
import moment from "moment";
import * as React from "react";

export interface ICloseProps {}

export function Close(props: ICloseProps) {
  const [countdown, setCountdown] = React.useState<number[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const targetDate = moment("2023-06-30 00:00:00"); // Thay đổi ngày đích ở đây
      const duration = moment.duration(targetDate.diff(now));
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown([days, hours, minutes, seconds]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={"10px"}>
        <Box
          width={32}
          height={22}
          bgcolor={"#662d91"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <p style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>
            {countdown[0]}
          </p>
        </Box>
        <Box
          width={32}
          height={22}
          bgcolor={"#662d91"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <p style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>
            {countdown[1]}
          </p>
        </Box>
        <Box
          width={32}
          height={22}
          bgcolor={"#662d91"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <p style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>
            {countdown[2]}
          </p>
        </Box>
        <Box
          width={32}
          height={22}
          bgcolor={"#662d91"}
          borderRadius={"6px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <p style={{ color: "white", fontWeight: "700", fontSize: "13px" }}>
            {countdown[3]}
          </p>
        </Box>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} fontSize='12px'>
        <p>Ngày</p>
        <p>Giờ</p>
        <p>Phút</p>
        <p>Giây</p>
      </Stack>
    </Box>
  );
}
