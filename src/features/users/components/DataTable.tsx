import { DataGrid } from "@mui/x-data-grid";
import type {
  GridCellParams,
  GridColDef,
  GridPaginationModel,
  GridRowParams,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import type { DataGridProps } from "@mui/x-data-grid";
import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserCard } from "./UserCard";
import type { User } from "../types/user";

interface Props extends Omit<DataGridProps, "columns"> {
  search: string;
  setCursor: (cursor: string | undefined) => void;
  nextCursor: string | undefined;
}

export const DataTable = (props: Props) => {
  const { setCursor, rows, nextCursor, ...rest } = props;

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

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

  const handleRowClick = (params: GridRowParams) => {
    setSelectedUser(params.row as User);
    setIsDialogOpen(true);
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    const page = model.page;

    if (page > 0 && nextCursor) {
      setCursor(nextCursor);
    } else if (page === 0) {
      setCursor(undefined);
    }
  };

  return (
    <Box>
      <DataGrid
        {...rest}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5]}
        disableMultipleRowSelection
        hideFooterSelectedRowCount
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
        onPaginationModelChange={handlePaginationModelChange}
        sx={{
          border: 0,
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
        }}
      />
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ m: 0, p: 2, pr: 6 }}>
          User details
          <IconButton
            aria-label="close"
            onClick={() => setIsDialogOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedUser && <UserCard user={selectedUser} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
