import db from "../config/db.js"

let createCar = (req,res) => {
    let { plate_number, type, model,  manufacturing_year, driver_phone, mechanic_name } = req.body
    let newCar =  [ plate_number, type, model,  manufacturing_year, driver_phone, mechanic_name ]
    let sql = "INSERT INTO car (plate_number,type,  model, manufacturing_year,driver_phone, mechanic_name) VALUES (?,?,?,?,?,?)"
    let [ result ] = db.query(sql, newCar)
    res.status(201).json({ id: result.insertId });

}

let getAllCars = async (req,res) => {
    let sql = "SELECT * FROM car"
    let [ result ] = await db.query(sql)
    res.status(200).json(result)
}

export {createCar, getAllCars}