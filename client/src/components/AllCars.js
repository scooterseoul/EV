import styles from "./AllCars.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeroCar from "./HeroCar";
import MakeSelector from "./MakeSelector";
import Footer from "./Footer";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cars`);

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
    return <p>Cranking up the database... Just a moment</p>;
  }

  return (
    <>
      <div>
        <Header />
        <HeroCar />
        <div className={styles.favorites}>Electric Cars</div>
        <div className={styles.toptext}>
          Favorite Electric Vehicles for 2023 and 2024
        </div>
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
                  <Link to={"/cars/" + car.id} className={styles.makeName}>
                    {car.year} {car.maker} {car.name}{" "}
                  </Link>
                  <div className={styles.range}>
                    Range: <strong>{car.range}</strong>mi /{" "}
                    <strong>{convert(car.range)}</strong>
                    km
                  </div>
                  <div className={styles.price}>
                    MSRP <strong>{car.price}</strong>
                  </div>
                </div>
                <div className={styles.lite_description}>
                  {car.lite_description}
                </div>
              </li>
            );
          })}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default AllCars;
