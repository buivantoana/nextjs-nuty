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
  datarole,
  update,
  deleterole,
}: {
  datarole: any;
  update: any;
  deleterole: any;
}) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ Width: "100%" }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Tên Role</TableCell>
              <TableCell>Thuộc danh mục</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datarole &&
              datarole.length &&
              datarole.map((row: any) => (
                <TableRow key={row.Rolename}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.Rolename}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {row.all.categoryname}
                  </TableCell>

                  <TableCell align='right' sx={{ display: "flex" }}>
                    <button
                      onClick={() => update(row.id)}
                      style={{ background: "orange" }}>
                      Sửa
                    </button>{" "}
                    <button
                      onClick={() => deleterole(row.id)}
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
