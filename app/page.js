"use client";

import { useState } from "react";
import Form from "@/components/form";
import Map from "@/components/map";
import { getColumnIndexMap, findItemByColumn } from "@/models/facility";
import FacilityItem from "@/components/facilityItem";

export default function Home() {
  const [facilities, setFacilities] = useState([]);
  const [pois, setPois] = useState([]);
  const [name, setName] = useState([]);

  const columnIndexMap = getColumnIndexMap();

  const handleNameUpdate = (value) => {
    const valueArray = Array.from(value);
    setName(valueArray);

    if (valueArray.length === 0) {
      setFacilities([]);
      setPois([]);

      return;
    }

    const items = [];
    const cords = [];

    for (const item of valueArray) {
      const result = findItemByColumn(columnIndexMap.Applicant, item, 1);

      items.push({ [item]: result });
      !!result &&
        cords.push({
          lat: Number(result[columnIndexMap.Latitude]),
          lng: Number(result[columnIndexMap.Longitude]),
        });
    }

    setFacilities(items);
    setPois(cords);
  };

  return (
    <>
      <div
        className="z-40 hover:z-100 opacity-75 hover:opacity-90 fixed left-6 top-6 bg-white border p-4 w-1/3 h-2/3 overflow-y-scroll"
        hidden={name.length === 0}
      >
        {facilities.map((item, index) => (
          <FacilityItem key={`facility-${index}`} item={item} />
        ))}
      </div>

      <Map pois={pois} />

      <Form
        onUpdate={handleNameUpdate}
        className="z-50 hover:z-100 opacity-75 hover:opacity-100 fixed bottom-16 left-6"
      />
    </>
  );
}
