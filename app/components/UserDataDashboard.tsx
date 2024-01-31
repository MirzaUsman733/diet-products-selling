"use client";
import React, { useState } from "react";
import { useUserDataContext } from "@/app/contexts/userDataContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const UserDataDashboard: React.FC = () => {
  const { userData, loading } = useUserDataContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div className="">
        <div className="shadow-2xl bg-gray-300 shadow-slate-400 text-black p-8 bg-opacity-20 bg-zince-300/10 flex flex-col gap-2 my-6">
          <h1 className="text-4xl font-bold text-center mb-4">All Users</h1>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, textAlign: "center" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="text-center">SR.NO</TableCell>
                  <TableCell className="text-center">Name</TableCell>
                  <TableCell className="text-center">Email</TableCell>
                  <TableCell className="text-center">Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user: any, index: number) => (
                    <TableRow key={user._id}>
                      <TableCell
                        className="text-center"
                        component="th"
                        scope="row"
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell className="text-center">
                        {user?.name}
                      </TableCell>
                      <TableCell className="text-center">
                        {user?.email}
                      </TableCell>
                      <TableCell className="text-center">
                        {user?.role}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[
              5,
              10,
              25,
              { label: "All", value: userData.length },
            ]}
            component="div"
            count={userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDataDashboard;
