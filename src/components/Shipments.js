// src/shipments.js
import React from "react";
import { STATUSES, Couriers } from "../data";

function Shipments({ shipments, onComplete, onDelay, assignPackages }) {
  return (
    <>
      <h2>Today</h2>
      <table id="main-table" width="100%" className="main-table">
        <thead>
          <tr>
            <th>Delivery Man</th>
            <th>Max</th>
            <th>Packages</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr
              key={shipment.pkgIndex}
              style={{
                backgroundColor:
                  shipment.status === STATUSES[2] ? "green" : "white",
                textDecoration:
                  shipment.status === STATUSES[2] ? "underline" : "none",
              }}
            >
              <td>{Couriers[shipment.courierIndex].name}</td>
              <td align="center">
                {Couriers[shipment.courierIndex].maxPackages}
              </td>
              <td>
                <table width="100%">
                  <thead>
                    <tr>
                      <th width="35%">Name</th>
                      <th width="35%">Status</th>
                      <th width="30%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="on-the-way">
                      <td>{shipment.name}</td>
                      <td align="center">{shipment.status}</td>
                      <td align="center">
                        <button onClick={() => onComplete(shipment.pkgIndex)}>
                          COMPLETE
                        </button>
                        <button onClick={() => onDelay(shipment.pkgIndex)}>
                          DELAY
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={assignPackages}>Assign</button>
    </>
  );
}

export default Shipments;
