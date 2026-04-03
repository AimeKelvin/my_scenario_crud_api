import { useEffect, useState } from "react";

function ServiceList() {
  const [services, setServices] = useState([]);

  const [service_id, setId] = useState("");
  const [service_name, setName] = useState("");
  const [service_description, setDescription] = useState("");
  const [service_price, setPrice] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("http://localhost:8080/api/services");
      const data = await res.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:8080/api/services/${id}`, { method: "DELETE" });
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/api/services/${service_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_name, service_description, service_price }),
    });

 
    setId(""); setName(""); setDescription(""); setPrice("");
  };

  return (
    <div>
      <h2>View all Services</h2>

    <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
      <tbody>
                  {services.map((s: any) => (
            <tr key={s.service_id}>
              <td>{s.service_id}</td>
            <td>{s.service_name}</td>
              <td>{s.service_description}</td>
            <td>{s.service_price}</td>
              <td>
                <button onClick={() => handleDelete(s.service_id)}>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    <h2>Update Service</h2>     
     <form onSubmit={handleUpdate}>
        <input
          placeholder="Service ID"
                    value={service_id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="Name"
          value={service_name}
      onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={service_description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          value={service_price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">apply changes</button>
      </form>
    </div>
  );
}

export default ServiceList;