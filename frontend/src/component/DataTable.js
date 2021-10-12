import React, { useEffect, useState } from "react";
import "kth-style/dist/css/kth-bootstrap.css";
const DataTable = () => {
    const exampleData = [{
        column: 'externalseqno',
        datatype: 'bigint',
        exampleData: '8391'
    },{
        column: 'mappedserverguid',
        datatype: 'uuid',
        exampleData: '26bdfdd7-a747-214c-808e-69a570aa9ac0'
    },{
        column: 'acknowledgetime',
        datatype: 'timestamp without time zone',
        exampleData: 'NULL'
    }, {
        column: 'acknowledgetime_tzinfo',
        datatype: 'smallint',
        exampleData: 'NULL'
    }, {
        column: 'alarmstate',
        datatype: 'smallint',
        exampleData: '1'
    }, {
        column: 'alarmtext',
        datatype: 'text',
        exampleData: 'Hög rumstemperatur'
    }, {
        column: 'assignedstate',
        datatype: 'smallint',
        exampleData: '0'
    },{
        column: 'assignedtodomain',
        datatype: 'text',
        exampleData: 'NULL'
    }];
    const [tableData, setTableData] = useState(exampleData)


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
                console.log(json);
                var jsondata = JSON.parse(json);
                var jsonarray = Array.from(json);
                setTableData(jsonarray);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>

            <table class="table">
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
