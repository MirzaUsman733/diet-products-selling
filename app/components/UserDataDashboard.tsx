// "use client";
// import { useUserDataContext } from "@/app/contexts/userDataContext";

// const UserDataDashboard: React.FC = () => {

//   const { userData, loading } = useUserDataContext();

//   return (
//     <div>
//       <div className="grid place-items-center h-screen ms-32 max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-xl">
//         <div className="shadow-2xl bg-gray-300 shadow-slate-700 text-black p-8 bg-opacity-20 bg-zince-300/10 flex flex-col gap-2 my-6">
//           <h1 className="text-4xl font-bold text-center mb-4">All Users</h1>
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead>
//               <tr>
//                 <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   SR.NO
//                 </th>
//                 <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Role
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {userData.map((user: any, index: any) => (
//                 <tr key={user._id}>
//                   <td className="px-10 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {index + 1}
//                     </div>
//                   </td>
//                   <td className="px-10 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user?.name}
//                     </div>
//                   </td>
//                   <td className="px-10 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user?.email}
//                     </div>
//                   </td>
//                   <td className="px-10 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user?.role}
//                     </div>
//                   </td>
//                   <td className="px-10 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user?.approved}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDataDashboard;

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
                  {/* <TableCell className="text-center">Approval</TableCell> */}
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
                      {/* <TableCell className="text-center">
                        {user?.approved == true ? "True" : "False"}
                      </TableCell> */}
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
