import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows, deleteRow, editRow }) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="expand">CollegeName</th>
                        <th className="label label-live">Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        rows.map((row, idx) => {
                            const Depttext =
                                row.department.charAt(0).toUpperCase() + row.department.slice(1)
                            return (
                                <tr key={idx} >
                                    <td>{row.name}</td>
                                    <td className="expand">{row.collegename}</td>
                                    <td>
                                        <span className={`label label-${row.department}`}>{Depttext}</span>
                                    </td>
                                    <td>
                                        <span className="actions">
                                            <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                                            <BsFillPencilFill onClick={() => editRow(idx)} />
                                        </span>
                                    </td>
                                </tr>


                            );
                        })
                    };
                </tbody>

            </table>
        </div>
    );
}