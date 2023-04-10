CREATE TABLE cars (
ID SERIAL PRIMARY KEY,
maker VARCHAR(255),
name VARCHAR(255),
range INT,
price MONEY,
country VARCHAR(255),
chargespeed INT,
year INT,
firstyear INT,
url VARCHAR(255),
image_url VARCHAR(255),
description VARCHAR,
makerlogo VARCHAR(255),
lite_description VARCHAR(255)
);