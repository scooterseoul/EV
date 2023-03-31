import styles from "./AllCars.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/cars");

      const data = await response.json();
      setCars(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {cars.map((car) => {
          return (
            <li key={car.id}>
              <Link to={"/cars/" + car.id}>
                <div>
                  <img src={car.image_url} alt={car.name} />
                </div>
              </Link>
              <div>{car.maker}</div>
              <div>{car.name}</div>
              <div>{car.range} mi</div>
              <div>{car.price}</div>
              <div>{car.country}</div>
              <div>{car.chargespeed}kw</div>
              <div>{car.year}</div>
              <div>{car.firstyear}</div>
              <Link to={car.url}>Go</Link>
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
};

export default AllCars;
