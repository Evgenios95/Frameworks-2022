import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Filters = () => {
  const [filter] = useSearchParams();
  const [filterInput, setFilterInput] = useState(
    Object.fromEntries([...filter])
  );

  const navigate = useNavigate();

  useEffect(() => {
    setFilterInput(Object.fromEntries([...filter]));
  }, [filter]);

  useEffect(() => {
    const url = "/catalog?" + new URLSearchParams(filterInput).toString();
    navigate(url);
  }, [filterInput]);

  return (
    <div className={"filtersWrapper"}>
      Brand
      <select
        name="brand"
        id="brand"
        onChange={(e) => {
          setFilterInput({ ...filterInput, brand: e.target.value });
        }}
      >
        <option
          value=""
          selected={filterInput.brand === "" || filterInput.brand === undefined}
        >
          All
        </option>

        <option
          value="starbucks"
          selected={
            filterInput.brand !== undefined && filterInput.brand === "starbucks"
          }
        >
          Starbucks
        </option>

        <option
          value="lavazza"
          selected={
            filterInput.brand !== undefined && filterInput.brand === "lavazza"
          }
        >
          Lavazza
        </option>

        <option
          value="depresso"
          selected={
            filterInput.brand !== undefined && filterInput.brand === "depresso"
          }
        >
          Depresso
        </option>
      </select>
      Roast
      <select
        name="roast"
        id="roast"
        onChange={(e) => {
          setFilterInput({ ...filterInput, roast: e.target.value });
        }}
      >
        <option
          value=""
          selected={
            filterInput.roast === "starbucks" || filterInput.roast === undefined
          }
        >
          All
        </option>

        <option
          value="lightroast"
          selected={filterInput.roast === "lightroast"}
        >
          Light
        </option>

        <option value="darkroast" selected={filterInput.roast === "darkroast"}>
          Dark
        </option>

        <option
          value="mediumroast"
          selected={filterInput.roast === "mediumroast"}
        >
          Medium
        </option>
      </select>
    </div>
  );
};
