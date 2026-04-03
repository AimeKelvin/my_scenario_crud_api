import { useEffect, useState } from "react";

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/services");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.log("Error fetching services: ", error);
      }
    };

    getServices();
  }, []);

  return (
    <div>
      <h1>Services</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {services.map((s: any) => (
            <tr key={s.service_id}>
              <td>{s.service_id}</td>
              <td>{s.service_name}</td>
              <td>{s.service_description}</td>
              <td>{s.service_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;