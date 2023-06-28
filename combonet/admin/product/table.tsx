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

export default function TableHome({ dataproduct, update }: any) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align='right'>Ảnh sản phẩm</TableCell>
              <TableCell align='right'>Giá sản phẩm</TableCell>
              <TableCell align='right'>Type</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataproduct &&
              dataproduct.length &&
              dataproduct.map((row: any) => (
                <TableRow key={row.productname}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.productname}
                  </TableCell>
                  <TableCell align='right'>
                    <img src={row.image} width={80} height={80} alt='' />
                  </TableCell>
                  <TableCell align='right'>{row.price}</TableCell>
                  <TableCell align='right'>{row.type}</TableCell>
                  <TableCell align='right' sx={{ display: "flex" }}>
                    <button
                      onClick={() => update(row.id)}
                      style={{ background: "orange" }}>
                      Sửa
                    </button>{" "}
                    <button style={{ background: "red" }}>Xóa</button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
