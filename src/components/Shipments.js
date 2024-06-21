// src/shipments.js
import React from "react";
import { STATUSES, Couriers } from "../data";

function Shipments({ shipments, onComplete, onDelay, assignPackages }) {
  return (
    <>
      <h2 className="subtitle">Today Shipments</h2>
      <table
        id="main-table"
        width="100%"
        className="table-primary table-striped"
      >
        <thead>
          <tr>
            <th scope="col">Delivery Man</th>
            <th scope="col">Max</th>
            <th scope="col">Packages</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr
              key={shipment.pkgIndex}
              style={{
                backgroundColor:
                  shipment.status === STATUSES[2] ? "#b3e7c7" : "white",
                textDecoration:
                  shipment.status === STATUSES[2] ? "underline" : "none",
              }}
            >
              <td>{Couriers[shipment.courierIndex].name}</td>
              <td align="center">
                {Couriers[shipment.courierIndex].maxPackages}
              </td>
              <td>
                <table width="100%" className="table table-success">
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
                        <button
                          className="btn btn-outline-success button"
                          onClick={() => onComplete(shipment.pkgIndex)}
                        >
                          COMPLETE
                        </button>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => onDelay(shipment.pkgIndex)}
                        >
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
      <button
        className="btn btn-outline-success button"
        onClick={assignPackages}
      >
        Assign
      </button>
    </>
  );
}

export default Shipments;
