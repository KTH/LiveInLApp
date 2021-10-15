import "kth-style/dist/css/kth-bootstrap.css";
import React, { useState } from "react";

const DataTable = (props) => {
    const [tableData] = useState(props.tableData)

    const renderColumn = (column, index) => {
        return (
            <tr key={index}>
                <td>{column.column}</td>
                <td>{column.datatype}</td>
                <td>{column.exampleData}</td>
            </tr>
        )
    }

    return (
        <div>
            <table class="table">
                <caption>Available data and data examples</caption>
                <thead>
                <tr>
                    <th>Column name</th>
                    <th>Datatype</th>
                    <th>Example</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map(renderColumn)}
                </tbody>
            </table>
        </div>
    );
};
export default DataTable;
