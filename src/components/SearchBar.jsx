import { SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import countriesList from "../assets/json/countries.json";

export default function SearchBar(props) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function handleChange(event) {
    setSearchItem(event.target.value);
  }

  function handleKeyUp() {
    setSearchResult(
      countriesList.filter((item) => {
        const regex = new RegExp(`^${searchItem}`, "gi");
        return item.name.match(regex) || item.code.match(regex);
      })
    );

    // To be fixed......

    if (searchItem.length > 0 && searchResult.length === 0) {
      setIsEmpty(true);
    } else if (searchItem.length > 0 && searchResult.length > 0) {
      setIsEmpty(false);
    } else if (searchItem.length === 0) {
      setIsEmpty(true);
    } else if (searchResult.length > 0) {
      setIsEmpty(false);
    }
    /*---------------------------------------------------------------- */
  }

  function handleClick(item) {
    setSearchItem(item.name);
    setIsEmpty(true);
  }

  return (
    <div>
      <form
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            setIsEmpty(true);
          }
        }}
        onSubmit={(event) => {
          event.preventDefault();
          setIsEmpty(true);
          props.handleSearch(searchItem);
        }}
        className="mx-5 my-5"
      >
        <div
          className={
            "flex shadow-md bg-white " +
            (isEmpty ? "rounded-xl " : "rounded-t-xl ")
          }
        >
          <input
            className="rounded-l-xl p-3 flex-auto outline-none"
            type="text"
            placeholder="Search for a country"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={searchItem}
          />
          <button className="flex-none px-3">
            <SearchIcon className="text-black w-6 h-6" />
          </button>
        </div>
        {!isEmpty && (
          <div className="relative">
            <div className="absolute w-full bg-white rounded-b-xl max-h-80 overflow-auto shadow-md ">
              {searchResult.map((item, index) => (
                <h1
                  onClick={() => {
                    handleClick(item);
                    props.handleSearch(item.code);
                  }}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100 border-t border-opacity-60"
                  key={index}
                >
                  {item.name}{" "}
                  <span className="text-xs text-gray-600">{item.code}</span>
                </h1>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
