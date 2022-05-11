import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
    const url = "/catalog?" + new URLSearchParams(filterInput).toString();
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
    <div className={"filtersWrapper"}>
      <div className={"filterInputContainer"}>
        <label htmlFor="brand">
          <p>Brand</p>
        </label>
        <select
          name="brand"
          id="brand"
          value={filterInput.brand || ""}
          onChange={(e) => {
            setFilterInput({ ...filterInput, brand: e.target.value });
          }}
        >
          <option value="">All</option>
          <option value="starbucks">Starbucks</option>
          <option value="lavazza">Lavazza</option>
          <option value="depresso">Depresso</option>
        </select>
      </div>

      <div className={"filterInputContainer"}>
        <label htmlFor="brand">
          <p>Roast</p>
        </label>
        <select
          name="roast"
          id="roast"
          value={filterInput.roast || ""}
          onChange={(e) => {
            setFilterInput({ ...filterInput, roast: e.target.value });
          }}
        >
          <option value="">All</option>
          <option value="lightroast">Light</option>
          <option value="darkroast">Dark</option>
          <option value="mediumroast">Medium</option>
        </select>
      </div>

      <div className={"filterInputContainer"}>
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
