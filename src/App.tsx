import { useState } from "react";
import { Box, Container, Paper } from "@mui/material";
import { DataTable } from "./features/users/components/DataTable";
import type { GetUserResponse } from "./features/users/types/user";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUsers } from "./features/users/services/user";
import type { GridPaginationModel } from "@mui/x-data-grid";

function App() {
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const { data, isLoading } = useQuery<GetUserResponse, Error>({
    queryKey: ["users", { search, cursor }],
    queryFn: () => getUsers({ q: search, cursor }),
    placeholderData: keepPreviousData,
  });

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    const page = model.page;

    if (page > 0 && data?.nextCursor) {
      setCursor(data.nextCursor);
    } else if (page === 0) {
      setCursor(undefined);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Paper sx={{ minHeight: 400, maxHeight: 800 }}>
          <DataTable
            rows={data?.users || []}
            search={search || ""}
            loading={isLoading}
            rowCount={data?.total || 0}
            paginationMode="server"
            onPaginationModelChange={handlePaginationModelChange}
          />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
