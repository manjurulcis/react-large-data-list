import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseTable, { Column, SortOrder } from "react-base-table";
import "react-base-table/styles.css";
import { FixedSizeList as List } from "react-window";
const WindowExample = (props) => {
  const defaultSort = {
    name: SortOrder.ASC,
    email: SortOrder.ASC,
    address: SortOrder.ASC,
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/list").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const [searchItem, SetSearchItem] = useState("");

  const filteredData = users.filter((val) => {
    if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
      return [...users, val];
    }
  });

  const Row = ({ index, style }) => {
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <p>{searchItem == "" ? users[index].name : filteredData[index].name}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>
        {" "}
        {searchItem == ""
          ? "Loaded " + users.length
          : "Found " + filteredData.length}{" "}
        entry
      </h1>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          SetSearchItem(event.target.value);
        }}
      />

      <List
        className="List"
        height={530}
        itemCount={searchItem == "" ? users.length : filteredData.length}
        itemSize={35}
        width={500}
      >
        {Row}
      </List>
    </div>
  );
};
export default WindowExample;
