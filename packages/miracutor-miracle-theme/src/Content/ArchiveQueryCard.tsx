import React from "react";
import { connect } from "frontity";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MobileContext } from "../Context/MobileProvider";
import { isListing } from "../utils";

// React component for displaying the current search query.
const ArchiveQueryCard = ({ state, libraries }) => {
  const { id } = state.source.get(state.router.link);
  const { query } = libraries.source.parse(state.router.link);
  const { isTag, isCategory } = isListing(state.router.link);

  return (
    <MobileContext.Consumer>
      {(mobileStatus) => (
        <Card variant="outlined" sx={{ bgcolor: "grey.300" }}>
          <CardContent>
            <Typography variant={mobileStatus ? "h5" : "h4"}>
              {query.s && `Search Result For: ${query.s}`}
              {isCategory && `Category: ${state.source.category[id].name}`}
              {isTag && `Tag: ${state.source.tag[id].name}`}
            </Typography>
          </CardContent>
        </Card>
      )}
    </MobileContext.Consumer>
  );
};

export default connect(ArchiveQueryCard);
