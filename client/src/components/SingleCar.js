import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Backbtn from "../images/icons8-back-arrow-96gray.png";
import styles from "./SingleCar.module.css";
import logo from "../images/logo2.png";
import mail from "../images/icons8-secured-letter-64.png";

const SingleCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [maker, setMaker] = useState("");
  const [name, setName] = useState("");
  const [range, setRange] = useState();
  const [price, setPrice] = useState();
  const [country, setCountry] = useState("");
  const [chargespeed, setChargespeed] = useState();
  const [year, setYear] = useState();
  const [firstyear, setFirstyear] = useState();
  const [url, setUrl] = useState("");
  const [image_url, setImage_url] = useState("");
  const [description, setDescription] = useState("");
  const [makerlogo, setMakerlogo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = await fetch(`http://localhost:5000/api/cars/${id}`);
      if (fetchUrl.ok === false) {
        setIsNotFound(true);
        return;
      }
      const data = await fetchUrl.json();
      setCar(data);
      setMaker(data[0].maker);
      setName(data[0].name);
      setRange(data[0].range);
      setPrice(data[0].price);
      setCountry(data[0].country);
      setChargespeed(data[0].chargespeed);
      setYear(data[0].year);
      setFirstyear(data[0].firstyear);
      setUrl(data[0].url);
      setImage_url(data[0].image_url);
      setDescription(data[0].description);
      setMakerlogo(data[0].makerlogo);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  // function selectProduct(id) {
  //   let item = product[id - 1];
  //   setName(item.name);
  //   setPrice(item.price);
  //   setCountry(item.country);
  //   setImage_url(item.image_url);
  //   setUrl_add(item.url_add);
  // }

  function refresh() {
    window.location.reload(false);
  }

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
  // const renderOnClickRight = (event) => {
  //   setUrl_add(url_add);
  // };

  function convert(mi) {
    return Math.round(mi * 1.6);
  }

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          {" "}
          <img src={logo} className={styles.logo} />
        </Link>
        <div className={styles.mailCont}>
          <img
            src={mail}
            className={styles.mail}
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
                      <img src={item.makerlogo} className={styles.makerlogo} />
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
                      <div>First built: {item.firstyear}</div>
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
