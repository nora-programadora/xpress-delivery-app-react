// src/App.js
import React, { useState } from "react";
import Shipments from "./components/Shipments";
import FutureShipments from "./components/FutureShipments";
import { Couriers, Packages, STATUSES } from "./data";

function App() {
  const [shipments, setShipments] = useState([]);
  const [futureShipments, setFutureShipments] = useState([]);
  const [availableCouriers, setAvailableCouriers] = useState(
    Couriers.map((courier, index) => ({
      ...courier,
      assignedPackages: 0,
      index,
    }))
  );

  const assignPackages = () => {
    let unassignedPackages = Packages.filter(
      (pkg) => pkg.status === STATUSES[0]
    );
    let updatedShipments = [...shipments];
    let updatedFutureShipments = [...futureShipments];
    let updatedCouriers = [...availableCouriers];

    unassignedPackages.forEach((pkg, pkgIndex) => {
      const courier = updatedCouriers.find(
        (c) => c.assignedPackages < c.maxPackages
      );
      if (courier) {
        courier.assignedPackages += 1;
        updatedShipments.push({
          ...pkg,
          status: STATUSES[1],
          courierIndex: courier.index,
          pkgIndex,
        });
      } else {
        updatedFutureShipments.push({ ...pkg, status: STATUSES[3], pkgIndex });
      }
    });

    setShipments(updatedShipments);
    setFutureShipments(updatedFutureShipments);
    setAvailableCouriers(updatedCouriers);
  };

  const completeShipment = (pkgIndex) => {
    setShipments(
      shipments.map((pkg) =>
        pkg.pkgIndex === pkgIndex ? { ...pkg, status: STATUSES[2] } : pkg
      )
    );
  };

  const delayShipment = (pkgIndex) => {
    const delayedPackage = shipments.find((pkg) => pkg.pkgIndex === pkgIndex);
    setShipments(shipments.filter((pkg) => pkg.pkgIndex !== pkgIndex));
    setFutureShipments([
      ...futureShipments,
      { ...delayedPackage, status: STATUSES[3] },
    ]);
  };

  return (
    <div>
      <h1 className="title">Xpress Delivery App</h1>
      <Shipments
        shipments={shipments}
        onComplete={completeShipment}
        onDelay={delayShipment}
        assignPackages={assignPackages}
      />
      <FutureShipments futureShipments={futureShipments} />
    </div>
  );
}

export default App;
