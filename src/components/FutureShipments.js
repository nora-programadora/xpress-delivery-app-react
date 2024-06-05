// src/futureShipments.js
import React from "react";

function FutureShipments({ futureShipments }) {
  return (
    <>
      <h2>Tomorrow</h2>
      <table width="60%" className="main-table">
        <thead>
          <tr>
            <th width="70%">Name</th>
            <th width="10%">Status</th>
          </tr>
        </thead>
        <tbody>
          {futureShipments.map((shipment) => (
            <tr key={shipment.pkgIndex} className="yellow">
              <td>{shipment.name}</td>
              <td align="center">{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FutureShipments;
