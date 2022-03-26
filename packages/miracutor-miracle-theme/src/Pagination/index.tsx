import React from "react";
import { connect } from "frontity";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const PaginationComponent = ({ state, libraries }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Pagination
        page={page}
        count={totalPages}
        color="secondary"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            sx={{ color: "white" }}
            href={libraries.source.stringify({ path, page: item.page, query })}
            {...item}
          />
        )}
      />
    </Box>
  );
};

export default connect(PaginationComponent);
