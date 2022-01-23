import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from 'material-table'
import "./styles.css";

const App = () => {
  const[users, setUsers] = useState([])

  useEffect(() => {
    axios.get("/list").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Email Address', field: 'email' },
        { title: 'Address', field: 'address',},
      ]}
      data={users}
      options={{
        pageSizeOptions: [1000, 2000, 5000],
        pageSize: 10000,
        maxBodyHeight: 750,
        selection: true,
        loading: true,
        loadType: 'linear',
        filtering: true
      }}
      title="Large Data List Example"
    />
  </div>
  );
}
export default App;