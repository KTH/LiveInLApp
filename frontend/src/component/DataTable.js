import "kth-style/dist/css/kth-bootstrap.css";
import React, { useEffect, useState } from "react";

const DataTable = () => {
    const [tableData, setTableData] = useState([])

    const renderColumn = (column, index) => {
        return (
            <tr key={index}>
                <td>{column.column}</td>
                <td>{column.datatype}</td>
                <td>{column.exampleData}</td>
            </tr>
        )
    }

    useEffect(() => {
        const url = "http://localhost:8080/api/getTableData"

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const tableData = Array.from(json);
                setTableData(tableData);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

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
