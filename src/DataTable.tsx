import React from "react";
import { startCase } from "lodash";

const DataTable = ({ title, data }: any) => (
    <section>
        <table>
            <thead>
                <tr>
                    <td>{title}</td>
    </tr>
    </thead>
    <tbody>
    {Object.entries(data).map(([key, value]: any, idx) => (
            <tr key={idx}>
                <td>{startCase(key)}</td>
                <td>{value}</td>
                </tr>
        ))}
    </tbody>
    </table>
    </section>
);

export default DataTable;