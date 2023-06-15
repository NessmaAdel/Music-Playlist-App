import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import styles from "./index.module.scss";
export default function Songs_Table({ Songs }) {
  const header_table = [
    "ID",
    "TITLE",
    "Singer Name",
    "AlBUM",
    "created_at",
    "hours",
  ];
 const [searchValue, setSearchValue] = useState("");
 const [viewList, setViewdList] = useState([]);
  const handleSearch = (e) => {
   if (e === true) {
    setSearchValue('');
    setViewdList(Songs);
   } else {
    setSearchValue(e.target.value);
    let filterdList = Songs.filter(
     (item) =>
           (item.song_name &&
             item.song_name.toLowerCase().includes(e.target.value.toLowerCase()))
    );
    setViewdList(filterdList);
   }
  };
 useEffect(() => {
  setViewdList(Songs);
 },[])
  return (
    <>
      <div className={styles.filters}>
        <Form.Control
          size="sm"
          type="search"
          placeholder="filters"
          value={searchValue}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <Table bordered hover variant="dark" responsive="sm">
        <thead>
          <tr>
            {header_table.map((e, index) => (
              <th key={index}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {viewList?.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.song_name}</td>
              <td>{ele.singer_name}</td>
              <td>{ele.album_name}</td>
              <td>{ele.created_at}</td>
              <td>{ele.total_hours}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
