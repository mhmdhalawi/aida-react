import { Card, CardContent, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { User } from "../../users/types/user";

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const fullName = `${user.first_name} ${user.last_name}`.trim();
  const birthday = user.birthday
    ? dayjs(user.birthday).format("DD MMM YYYY")
    : "-";
  const address = user.address || "-";

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6" component="div">
            {fullName || "Unnamed User"}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ minWidth: 90 }}
            >
              Birthday:
            </Typography>
            <Typography variant="body2">{birthday}</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ minWidth: 90 }}
            >
              Address:
            </Typography>
            <Typography variant="body2">{address}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
