const getCars = "SELECT * FROM cars";

const getCarById = "SELECT * FROM cars WHERE id = $1";

const checkCarName = "SELECT a FROM cars a WHERE a.name = $1";

const addCar =
  "INSERT INTO cars (maker, name, range, price, country, chargespeed, year, firstyear, url, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

const deleteCar = "DELETE FROM cars WHERE id = $1";

const updateCar =
  "UPDATE cars SET maker = $1, name = $2, range = $3, price = $4, country = $5, chargespeed = $6, year = $7, firstyear = $8, url = $9, image_url = $10 WHERE id = $11";

module.exports = {
  getCars,
  getCarById,
  checkCarName,
  addCar,
  deleteCar,
  updateCar,
};
