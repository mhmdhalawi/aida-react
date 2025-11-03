import { DataGrid } from "@mui/x-data-grid";
import type { GridCellParams, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import type { DataGridProps } from "@mui/x-data-grid";

interface Props extends Omit<DataGridProps, "columns"> {
  search: string;
}

export const DataTable = (props: Props) => {
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
    <DataGrid
      {...props}
      rows={props.rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5]}
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
  );
};
