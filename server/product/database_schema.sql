CREATE TABLE cars (
ID SERIAL PRIMARY KEY,
maker VARCHAR(255),
name VARCHAR(255),
range INT,
price MONEY,
country VARCHAR(255),
maxchargingspeed INT,
year INT,
firstyearmade INT,
url VARCHAR(255),
image_url VARCHAR(255));