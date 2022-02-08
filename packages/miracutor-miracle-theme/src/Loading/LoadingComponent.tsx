import React from "react";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";

type LoadingProps = {
  when?: boolean;
}

const Loading = (props: LoadingProps) => {
  return (
    <Container sx={{ px: 0 }}>
      <Card variant="outlined" sx={{ px: 3, py: 20, textAlign: "center" }}>
        <CircularProgress size={80} />
      </Card>
    </Container>
  );
};

export default Loading;
