import Link from "next/link";
import * as React from "react";
import { Headerdestop } from "./header/headerdestop";
import { Headermobile } from "./header/headermobile";

export interface IHeaderProps {
  check: any;
}

export default function Header({ check }: IHeaderProps) {
  return (
    <>
      <Headerdestop check={check} />
      <Headermobile />
    </>
  );
}
