import React, { useState } from "react";
import styles from "./MakeSelector.module.css";

const MakeSelector = ({ cars, setFilteredCars }) => {
  const [selectMake, setSelectMake] = useState("");

  const handleSelection = (e) => {
    const maker = e.target.value;
    setSelectMake(maker);

    if (maker) {
      const filtered = cars.filter((c) => c.maker === maker);
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  };
  const uniqueMake = [...new Set(cars.map((car) => car.maker))];

  return (
    <div className={styles.dropCont}>
      <label htmlFor="maker-select" className={styles.label}></label>
      <select
        id="maker-select"
        className={styles.select}
        value={selectMake}
        onChange={handleSelection}
      >
        <option value="">All Brands</option>

        {uniqueMake
          .sort((a, b) => a.localeCompare(b))
          .map((maker) => (
            <option key={maker} value={maker}>
              {maker}
            </option>
          ))}
      </select>
    </div>
  );
};

export default MakeSelector;
