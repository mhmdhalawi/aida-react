import { useState } from "react";
import { Box, Container, Paper, TextField } from "@mui/material";
import { DataTable } from "./features/users/components/DataTable";
import type { GetUserResponse } from "./features/users/types/user";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getUsers } from "./features/users/services/user";
import { useDebounce } from "@uidotdev/usehooks";

function App() {
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useQuery<GetUserResponse, Error>({
    queryKey: ["users", { debouncedSearch, cursor }],
    queryFn: () => getUsers({ q: debouncedSearch, cursor }),
    placeholderData: keepPreviousData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ maxHeight: 800 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 2,
              gap: 1,
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={search || ""}
              onChange={handleChange}
              sx={{ flexGrow: 1, maxWidth: 400 }}
            />
          </Box>
          <DataTable
            rows={data?.users || []}
            search={search || ""}
            setCursor={setCursor}
            nextCursor={data?.nextCursor}
            loading={isLoading}
            rowCount={data?.total || 0}
            paginationMode="server"
          />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
