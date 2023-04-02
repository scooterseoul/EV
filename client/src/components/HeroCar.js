import styles from "./HeroCar.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroCar = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/cars/37");

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
              <div>{car.maker}</div>
              <div>{car.name}</div>
              <div>
                Range:
                {car.range} mi / {convert(car.range)}km
              </div>

              {/* <div>{car.price}</div>
              <div>{car.country}</div>
              <div>{car.chargespeed}kw</div>
              <div>{car.year}</div>
              <div>{car.firstyear}</div> */}
              {/* <Link to={car.url}>Go</Link> */}
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
};

export default HeroCar;
