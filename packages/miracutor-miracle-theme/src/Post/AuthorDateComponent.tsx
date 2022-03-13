import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import Icon from '@mui/material/Icon';
import dayjs from "dayjs";

const AuthorDateComponent = ({ authorName, date }) => {
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
      {/* <PersonRoundedIcon /> */}
      <Icon>person</Icon>
      <Typography>{authorName}</Typography>
      {/* <CalendarTodayRoundedIcon /> */}
      <Icon>calendar_today</Icon>
      <Typography>{formattedDate}</Typography>
    </Stack>
  );
};

export default AuthorDateComponent;
