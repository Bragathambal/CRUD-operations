import React from "react";
import { useState } from "react";
import { Table } from "./comp/Table";
import { Modal } from "./comp/Modal";
function App() {
  const [modelOPen, setmodelOpen] = useState(false)
  const [rows, setRows] = useState([
    { name: "Sairam", collegename: "PSG college of arts and science", department: "bca" },
    { name: "Elayabrabha", collegename: "PSG college of arts and science", department: "bca" },
    { name: "Anusha", collegename: "KG college of arts and science", department: "bcs" }
  ]);

  const [rowToEdit, setRowToEdit] = useState(null)
  
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setmodelOpen(true);
  }

  const handleSubmit = (newRows) => {
    rowToEdit === null
      ? setRows([...rows, newRows]) : setRows(rows.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;


        return newRows;
      }));
  };

  return (
    <div>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        <button className=
        "submitbtn" onClick={() => setmodelOpen(true)}>New</button>

      {modelOPen && (
        <Modal
          close={() => {
            setmodelOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />)}

    </div>

  );
}

export default App;
