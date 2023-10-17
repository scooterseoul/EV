import styles from "./HeroCar.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroCar = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/cars/56`
      );

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
      <div className={styles.bigCont}>
        <div className={styles.head}>
          ...2023 Hyundai Ioniq 5: <strong>Over 300 mi Range</strong> ...toooo
          cool!
        </div>
        <div className={styles.number1}>#1</div>
        <ul className={styles.mainCont}>
          {cars.map((car) => {
            return (
              <li key={car.id} className={styles.listitem}>
                <Link to={"/cars/" + car.id} className={styles.linkCont}>
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
                    <div className={styles.name}>{car.name} </div>
                    <div className={styles.range}>
                      Range: {car.range}mi / {convert(car.range)}km
                    </div>
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
      </div>
    </>
  );
};

export default HeroCar;
