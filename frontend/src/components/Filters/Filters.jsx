import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Filters = () => {
  const [filterInput, setFilterInput] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = "/catalog?" + new URLSearchParams(filterInput).toString();
    navigate(url);
  }, [filterInput]);

  return <div className={"filtersWrapper"}>
    Brand
    <select name="brand" id="brand" onChange={(e) => {
      setFilterInput({ ...filterInput, brand: e.target.value });
    }}>
      <option value="">All</option>
      <option value="starbucks">Starbucks</option>
      <option value="lavazza">Lavazza</option>
      <option value="depresso">Depresso</option>

    </select>
    Roast
    <select name="roast" id="roast" onChange={(e) => {
      setFilterInput({ ...filterInput, roast: e.target.value });
    }}>
      <option value="">All</option>
      <option value="darkroast">Dark</option>
      <option value="mediumroast">Medium</option>
    </select>

  </div>;
};
