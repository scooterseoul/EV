import styles from "./AllCars.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeroCar from "./HeroCar";
import MakeSelector from "./MakeSelector";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/cars");

      const data = await response.json();
      setCars(data);
      setIsLoading(false);
      setFilteredCars(data);
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
      <Header />
      <HeroCar />
      <div>
        <MakeSelector cars={cars} setFilteredCars={setFilteredCars} />
      </div>
      <ul className={styles.mainCont}>
        {filteredCars.map((car) => {
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
              <div className={styles.maker}>
                {car.year} {car.maker} {car.name}{" "}
                <div className={styles.range}>
                  Range: {car.range} mi / {convert(car.range)}km
                </div>
                <div className={styles.price}>{car.price}</div>
              </div>
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
};

export default AllCars;
