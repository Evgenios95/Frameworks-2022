import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Filters = () => {
  const [filter] = useSearchParams();
  const [filterInput, setFilterInput] = useState(
    Object.fromEntries([...filter])
  );

  useEffect(() => {
    setFilterInput(Object.fromEntries([...filter]));
  }, [filter]);

  const navigate = useNavigate();
  useEffect(() => {
    const url = "/products?" + new URLSearchParams(filterInput).toString();
    navigate(url);
  }, [filterInput]);

  function toggleDiscount() {
    if (!filterInput.discount)
      setFilterInput((currFilter) => {
        const newFilter = { ...currFilter };
        newFilter.discount = "true";
        return newFilter;
      });
    else if (filterInput.discount) {
      setFilterInput((currFilter) => {
        const newFilter = { ...currFilter };
        delete newFilter.discount;
        return newFilter;
      });
    }
  }

  return (
    <div className={"filters-wrapper"}>
      <div className={"filter-input-container"}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="brand-selection">Brand</InputLabel>
            <Select
              labelId="brand-selection"
              value={filterInput.brand || ""}
              label="Brand"
              onChange={(e) => {
                setFilterInput({ ...filterInput, brand: e.target.value });
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="starbucks">Starbucks</MenuItem>
              <MenuItem value="lavazza">Lavazza</MenuItem>
              <MenuItem value="depresso">Depresso</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className={"filter-input-container"}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="roast-selection">Roast</InputLabel>
            <Select
              labelId="roast-selection"
              value={filterInput.roast || ""}
              label="Roast"
              onChange={(e) => {
                setFilterInput({ ...filterInput, roast: e.target.value });
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className={"filter-input-container"}>
        <input
          type="checkbox"
          value="true"
          name="discount"
          checked={filterInput.discount === "true"}
          onChange={() => toggleDiscount()}
        />
        On Sale
      </div>
    </div>
  );
};
