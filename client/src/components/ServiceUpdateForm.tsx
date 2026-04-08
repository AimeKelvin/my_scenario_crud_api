import { useState } from "react";

function ServiceUpdateForm() {
  const [service_id] = useState("");
  const [service_name, setName] = useState("");
  const [service_description, setDescription] = useState("");
  const [service_price, setPrice] = useState("");

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const data = {
      service_name,
      service_description,
      service_price
    };

    try {
      const res = await fetch(
        `http://localhost:8080/api/services/${service_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  return (
    <div>
      <h1>Update Service</h1>

      <form onSubmit={handleUpdate}>

        <input
          placeholder="Service Name"
          value={service_name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Service Description"
          value={service_description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Price"
          value={service_price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ServiceUpdateForm;