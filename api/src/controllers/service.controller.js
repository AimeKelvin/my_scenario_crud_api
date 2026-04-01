import db from "../config/db.js";

let getAllServices = async (req, res) => {
  let [result] = await db.query("SELECT * FROM services");
  res.status(200).json(result);
};

let createService = async (req, res) => {
  let { service_name, service_description, service_price } = req.body;
  let [result] = await db.query(
    "INSERT INTO services (service_name, service_description, service_price) VALUES (?, ?, ?)",
    [service_name, service_description, service_price]
  );
  res.status(201).json({ id: result.insertId });
};

let updateService = async (req, res) => {
  let { id } = req.params;
  let { service_name, service_description, service_price } = req.body;
  await db.query(
    "UPDATE services SET service_name = ?, service_description = ?, service_price = ? WHERE service_id = ?",
    [service_name, service_description, service_price, id]
  );
  res.status(200).json({ message: "updated" });
};

let deleteService = async (req, res) => {
  let { id } = req.params;
  await db.query("DELETE FROM services WHERE service_id = ?", [id]);
  res.status(200).json({ message: "deleted" });
};

let getServiceById = async (req, res) => {
  let { id } = req.params;
  let [result] = await db.query(
    "SELECT * FROM services WHERE service_id = ?",
    [id]
  );
  res.status(200).json(result[0] || {});
};

export {
  getAllServices,
  createService,
  updateService,
  deleteService,
  getServiceById
};