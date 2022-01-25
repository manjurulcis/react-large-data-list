import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import "../styles.css";

const MaterialExample = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "Name",
      field: "name",
      render: (rowData) => rowData.id + ". " + rowData.name,
      customFilterAndSearch: (term, rowData) =>
        rowData.name.indexOf(term) >= 0 || rowData.id == term,
    },
    { title: "Email Address", field: "email" },
    { title: "Address", field: "address" },
  ];

  const tableEditableConfig = {
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataUpdate = [...users];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setUsers([...dataUpdate]);

          resolve();
        }, 1000);
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDelete = [...users];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          setUsers([...dataDelete]);

          resolve();
        }, 1000);
      }),
  };

  const tableOptions = {
    pageSizeOptions: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000],
    pageSize: 10,
    maxBodyHeight: 800,
    selection: true,
    loading: true,
    loadType: "overlay",
    filtering: true,
    actionsColumnIndex: 5,
    headerStyle: {
      backgroundColor: "#01579b",
      color: "#FFF",
      fontSize: 20,
    },
  };

  const detailPanelConfig = [
    {
      icon: "account_circle",
      tooltip: "Show Bio",
      render: (rowData) => {
        return (
          <div
            style={{
              fontSize: 100,
              textAlign: "center",
              color: "white",
              backgroundColor: "#E53935",
            }}
          >
            {rowData.bio}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    axios.get("/list").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      {
        <MaterialTable
          title="Large Data Set Example"
          isLoading={loading}
          editable={tableEditableConfig}
          columns={columns}
          data={users}
          options={tableOptions}
          detailPanel={detailPanelConfig}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
          actions={[
            {
              icon: "delete",
              tooltip: "Delete Selected Records",
              onClick: (event, rowData) => {
                console.log(rowData, event);
              },
            },
          ]}
        />
      }
    </div>
  );
};
export default MaterialExample;
