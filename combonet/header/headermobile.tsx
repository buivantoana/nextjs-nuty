import * as React from "react";
import { Box } from "@mui/material";

export interface IHeadermobileProps {}

export function Headermobile(props: IHeadermobileProps) {
  return <Box display={{ xs: "block", lg: "none" }}>mobile</Box>;
}
