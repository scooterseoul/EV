import styles from "./HeroCar.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroCar = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/cars/56");

      const data = await response.json();
      setCars(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function convert(mi) {
    return Math.round(mi * 1.6);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={styles.head}>
        2023 Hyundai Ionic 5: Over 300 mi Range ...toooo cool!
      </div>
      <ul className={styles.mainCont}>
        {cars.map((car) => {
          return (
            <li key={car.id} className={styles.listitem}>
              <Link to={"/cars/" + car.id}>
                <div className={styles.carCont}>
                  <img
                    src={car.image_url}
                    alt={car.name}
                    className={styles.carphoto}
                  />
                </div>
              </Link>
              <div className={styles.infoCont}>
                <div className={styles.maker}>
                  <img
                    src={car.makerlogo}
                    className={styles.makerlogo}
                    alt="makerlogo"
                  />
                </div>
                <div>
                  <div className={styles.name}>{car.name} </div>Range:
                  {car.range} mi / {convert(car.range)}km
                </div>
                <div className={styles.carndriver}>
                  "The Hyundai Ioniq 5 Is the 2023 MotorTrend SUV of the Year"
                </div>
              </div>
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
};

export default HeroCar;
