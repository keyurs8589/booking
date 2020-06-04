import React from "react";
import { FormControl } from "react-bootstrap";

function Search({search, setSearch}) {
  return (
    <FormControl
      size="sm"
      className="roboto search-pos"
      placeholder="search for booking by product name"
      onChange={e => setSearch(e.target.value)}
      value={search}
    />
  );
}

export default Search;
