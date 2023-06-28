import * as React from "react";
import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export interface ITableHomeProps {}

export default function TableHome({
  datacategory,
  update,
  deletecategory,
}: {
  datacategory: any;
  update: any;
  deletecategory: any;
}) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Tên Danh mục</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datacategory &&
              datacategory.length &&
              datacategory.map((row: any) => (
                <TableRow key={row.productname}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.categoryname}
                  </TableCell>

                  <TableCell align='right' sx={{ display: "flex" }}>
                    <button
                      onClick={() => update(row.id)}
                      style={{ background: "orange" }}>
                      Sửa
                    </button>{" "}
                    <button
                      onClick={() => deletecategory(row.id)}
                      style={{ background: "red" }}>
                      Xóa
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
