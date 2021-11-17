import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { connect } from "frontity";

const Error404 = ({ state }) => {
  return (
    <Container>
      <Card variant="outlined" sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h2">404 Error</Typography>
        <Typography variant="h3">
          The path <em>{state.router.link}</em> cannot be found.
        </Typography>
      </Card>
    </Container>
  );
};

export default connect(Error404);
