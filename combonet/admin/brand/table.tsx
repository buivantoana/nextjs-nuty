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
  databrand,
  update,
  deletebrand,
}: {
  databrand: any;
  update: any;
  deletebrand: any;
}) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Tên Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {databrand &&
              databrand.length &&
              databrand.map((row: any) => (
                <TableRow key={row.brandname}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.brandname}
                  </TableCell>

                  <TableCell align='right' sx={{ display: "flex" }}>
                    <button
                      onClick={() => update(row.id)}
                      style={{ background: "orange" }}>
                      Sửa
                    </button>{" "}
                    <button
                      onClick={() => deletebrand(row.id)}
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
