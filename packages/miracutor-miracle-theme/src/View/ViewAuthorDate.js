import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import dayjs from "dayjs";

const ViewAuthorDate = ({ authorName, date }) => {
  const formattedDate = dayjs(date).format("DD MMMM YYYY");

  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
      mb={3}
      mt={2}
    >
      <PersonRoundedIcon />
      <Typography>{authorName}</Typography>
      <CalendarTodayRoundedIcon />
      <Typography>{formattedDate}</Typography>
    </Stack>
  );
};

export default ViewAuthorDate;
