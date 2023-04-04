import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Backbtn from "../images/icons8-back-arrow-96gray.png";
import styles from "./SingleCar.module.css";
import logo from "../images/logo2.png";
import mail from "../images/icons8-secured-letter-64.png";

const SingleCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = await fetch(`http://localhost:5000/api/cars/${id}`);
      if (fetchUrl.ok === false) {
        setIsNotFound(true);
        return;
      }
      const data = await fetchUrl.json();
      setCar(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! We can't find that product.</p>
      </>
    );
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  function convert(mi) {
    return Math.round(mi * 1.6);
  }

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          {" "}
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <div className={styles.mailCont}>
          <img
            src={mail}
            className={styles.mail}
            alt="email"
            onClick={() => (window.location = "mailto: scooterseoul@gmail.com")}
          />
        </div>
      </div>
      <div className={styles.prodCont}>
        <ul className={styles.listCont1}>
          {car.map((item) => {
            return (
              <li key={item.id}>
                <div className={styles.cell}>
                  <div className={styles.photoCont}>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className={styles.photos}
                    />
                  </div>

                  <div className={styles.infoCont}>
                    <div className={styles.name}>
                      {item.year} {item.maker} {item.name}
                    </div>

                    <div className={styles.makerlogoCont}>
                      <img
                        src={item.makerlogo}
                        className={styles.makerlogo}
                        alt={item.maker}
                      />
                    </div>

                    <div className={styles.statCont}>
                      <div className={styles.price}>Avg. {item.price}</div>
                      <div className={styles.country}>
                        Country: {item.country}
                      </div>
                      <div>
                        Range: {item.range} mi / {convert(item.range)}km
                      </div>
                      <div>Max charging: {item.chargespeed}kw</div>
                      <div>Introduced: {item.firstyear}</div>
                    </div>
                    <div className={styles.description}>{item.description}</div>
                  </div>
                </div>

                <div className={styles.bottomCont}>
                  <Link to="/">
                    <img
                      src={Backbtn}
                      className={styles.backbtn}
                      alt="back"
                    ></img>
                  </Link>
                  <div className={styles.seemoreCont}>
                    <Link
                      to={item.url}
                      className={styles.makerurl}
                      target="_blank"
                    >
                      See more...
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default SingleCar;
