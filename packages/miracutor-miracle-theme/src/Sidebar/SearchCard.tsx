import React, { useState } from "react";
import { connect } from "frontity";
import SidebarCard from "./SidebarCard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchCard = ({ actions, libraries }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actions.router.set(
      libraries.source.stringify({ query: { s: searchQuery } })
    );
  };

  return (
    <SidebarCard title={"Search"}>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          name="q"
          label="Search anything..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleChange}
          color="secondary"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </SidebarCard>
  );
};

export default connect(SearchCard);
