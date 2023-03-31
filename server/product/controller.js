const e = require("express");
const pool = require("../db");
const queries = require("./queries");

const getCars = (req, res) => {
  pool.query(queries.getCars, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getCarById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCarById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addCar = (req, res) => {
  const {
    maker,
    name,
    range,
    price,
    country,
    chargespeed,
    year,
    firstyear,
    url,
    image_url,
  } = req.body;
  //check if car name exist
  pool.query(queries.checkCarName, [name], (error, results) => {
    if (results.rows.length) {
      res.send("Name already exists");
    }
    //add car to db
    pool.query(
      queries.addCar,
      [
        maker,
        name,
        range,
        price,
        country,
        chargespeed,
        year,
        firstyear,
        url,
        image_url,
      ],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Car added successfully");
      }
    );
  });
};

const deleteCar = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getCarById, [id], (error, results) => {
    const noCarFound = !results.rows.length;
    if (noCarFound) {
      res.send("Car does not exist in database");
    }
    pool.query(queries.deleteCar, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Car deleted successfully");
    });
  });
};

const updateCar = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    maker,
    name,
    range,
    price,
    country,
    chargespeed,
    year,
    firstyear,
    url,
    image_url,
  } = req.body;
  pool.query(queries.getCarById, [id], (error, results) => {
    const noCarFound = !results.rows.length;
    if (noCarFound) {
      res.send("Car does not exist in database");
    }
    pool.query(
      queries.updateCar,
      [
        maker,
        name,
        range,
        price,
        country,
        chargespeed,
        year,
        firstyear,
        url,
        image_url,
        id,
      ],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("Car has been updated.");
      }
    );
  });
};

module.exports = {
  getCars,
  getCarById,
  addCar,
  deleteCar,
  updateCar,
};
