import { useEffect, useState } from "react";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/cars");
        const data = await res.json();

        setCars(data);
      } catch (err) {
        console.error("Error fetching cars:", err);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h2>View All Cars</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Plate No.</th>

            <th>Type</th>
            <th>Model</th>
            <th>Manufacturing Year</th>
            <th>Driver Phone</th>
            <th>Mechanic Name</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car: any) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.plate_number}</td>
              <td>{car.type}</td>
              <td>{car.model}</td>
              <td>{car.manufacturing_year}</td>
              <td>{car.driver_phone}</td>
              <td>{car.mechanic_name}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default CarList;