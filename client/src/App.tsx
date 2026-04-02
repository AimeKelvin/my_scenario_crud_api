import { useState } from "react";

function App() {
  const [service_name, setName] = useState("");
  const [service_description, setDescription] = useState("");
  const [service_price, setPrice] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = { service_name, service_description, service_price };

    const res = await fetch("http://localhost:8080/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;