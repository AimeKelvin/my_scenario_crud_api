-- My Database
 for scenario of car wash service center

 CREATE TABLE users (
user_id INT PRIMARY KEY AUTO_INCREMENT,
user_firstname VARCHAR(100) NOT NULL,
user_lastname VARCHAR(100) NOT NULL,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
join_date TIMESTAMP
);

CREATE TABLE services(
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    service_name VARCHAR(255) NOT NULL,
    service_desc TEXT,
    service_price INT NOT NULL
)

CREATE TABLE car(
    id INT PRIMARY KEY AUTO_INCREMENT,
    plate_number VARCHAR(20) NOT NULL UNIQUE,
    type VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    manufacturing_year INT NOT NULL,
    driver_phone VARCHAR(20) NOT NULL,
    mechanic_name VARCHAR(255) NOT NULL
)

CREATE TABLE service_record(
    record_number INT PRIMARY KEY AUTO_INCREMENT,
    service_date DATE NOT NULL,
    car_id INT,
    service_id INT,
    FOREIGN KEY (car_id) REFERENCES car(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(service_id)
    ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE payment(
    payment_number INT PRIMARY KEY AUTO_INCREMENT,
    amount_paid INT NOT NULL,
    payment_date DATE NOT NULL,
    record_number INT,
    FOREIGN KEY (record_number) REFERENCES service_record(record_number)
    ON DELETE CASCADE ON UPDATE CASCADE
)
