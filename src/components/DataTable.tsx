import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridCellParams, GridColDef } from "@mui/x-data-grid";
import type { Person } from "../types/person";
import dayjs from "dayjs";

const data: Person[] = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    birthday: new Date("1990-01-01"),
    address: "123 Main St",
    phone_number: "555-1234",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    birthday: new Date("1985-03-22"),
    address: "456 Oak Ave",
    phone_number: "555-5678",
  },
  {
    id: 3,
    first_name: "Michael",
    last_name: "Johnson",
    birthday: new Date("1979-07-11"),
    address: "",
    phone_number: "555-9012",
  },
  {
    id: 4,
    first_name: "Emily",
    last_name: "Brown",
    birthday: new Date("1992-12-05"),
    address: "321 Maple Ln",
    phone_number: "",
  },
  {
    id: 5,
    first_name: "David",
    last_name: "Wilson",
    birthday: undefined,
    address: "654 Cedar Blvd",
    phone_number: "555-7890",
  },
  {
    id: 6,
    first_name: "Olivia",
    last_name: "Martinez",
    birthday: new Date("1995-09-14"),
    address: "987 Birch St",
    phone_number: "555-2345",
  },
  {
    id: 7,
    first_name: "Christopher",
    last_name: "Garcia",
    birthday: new Date("1982-02-18"),
    address: "159 Spruce Ct",
    phone_number: "555-6789",
  },
  {
    id: 8,
    first_name: "Sophia",
    last_name: "Lee",
    birthday: new Date("1998-11-03"),
    address: "753 Elm Dr",
    phone_number: "555-0123",
  },
  {
    id: 9,
    first_name: "Daniel",
    last_name: "Kim",
    birthday: new Date("1975-08-25"),
    address: "258 Willow Way",
    phone_number: "555-4567",
  },
  {
    id: 10,
    first_name: "Ava",
    last_name: "Anderson",
    birthday: new Date("2000-06-17"),
    address: "846 Poplar Pl",
    phone_number: "555-8901",
  },
];

export const DataTable = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    {
      field: "birthday",
      headerName: "Birthday",
      width: 130,
      valueFormatter: (date: Date) => {
        if (!date) return "-";
        return dayjs(date).format("DD MMM YYYY");
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      valueFormatter: (data) => data || "-",
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 150,
      valueFormatter: (data) => data || "-",
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  const handleCellClick = (params: GridCellParams) => {
    console.log("Cell clicked:", params);
  };

  return (
    <Paper sx={{ minHeight: 400, maxHeight: 800 }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        disableMultipleRowSelection
        hideFooterSelectedRowCount
        onCellClick={handleCellClick}
        sx={{
          border: 0,
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
        }}
      />
    </Paper>
  );
};
