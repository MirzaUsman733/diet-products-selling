"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const Approval: React.FC = () => {
  const [unapprovedUsers, setUnapprovedUsers] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchUnapprovedUsers();
    const intervalId = setInterval(fetchUnapprovedUsers, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchUnapprovedUsers = async () => {
    try {
      const response = await fetch("/api/unapprovedUsers");
      const data: User[] = await response.json();
      setUnapprovedUsers(data);
    } catch (error) {
      console.error("Error fetching unapproved users", error);
    }
  };

  const approveUser = async (userId: string) => {
    try {
      const response = await fetch("/api/approvedUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        fetchUnapprovedUsers();
      } else {
        console.error("Failed to approve user");
      }
    } catch (error) {
      console.error("Error approving user", error);
    }
  };

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
      <div className="shadow-2xl bg-gray-300 shadow-slate-400 text-black p-8 bg-opacity-20 bg-zince-300/10 flex flex-col gap-2 my-6 mt-8">
        <h2 className="text-center text-4xl font-bold mb-16">
          Unapproved Users
        </h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="text-center">SR.NO</TableCell>
                <TableCell className="text-center">Name</TableCell>
                <TableCell className="text-center">Email</TableCell>
                <TableCell className="text-center">Role</TableCell>
                <TableCell className="text-center">Approval</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unapprovedUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={user._id}>
                    <TableCell
                      className="text-center"
                      component="th"
                      scope="row"
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-center">{user.name}</TableCell>
                    <TableCell className="text-center">{user.email}</TableCell>
                    <TableCell className="text-center">{user.role}</TableCell>

                    <TableCell
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        variant="outlined"
                        className="text-center m-auto"
                        onClick={() => {
                          approveUser(user._id);
                        }}
                      >
                        Approve User
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={unapprovedUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Approval;
