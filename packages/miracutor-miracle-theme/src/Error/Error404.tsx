import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { connect } from "frontity";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Error404 = ({ state, when }) => {
  return (
    <Container sx={{ px: 0 }}>
      <Card variant="outlined" sx={{ py: 3, px: 1, textAlign: "center" }}>
        <Typography variant="h2">404 Error</Typography>
        <Typography variant="h3">
          The path <em>{state.router.link}</em> cannot be found.
        </Typography>
      </Card>
    </Container>
  );
};

export default connect(Error404);
