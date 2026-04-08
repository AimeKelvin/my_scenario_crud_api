import CarList from "../components/CarList"
import { useState } from "react";

export default function CarPage() {
 
    const [plate_number, setPlateNumber] = useState(""); 
    const [type, setType] = useState("");
    const [model, setModel] = useState("");
    const [manufacturing_year, setManufacturingYear] = useState("");
    const [driver_phone, setDriverPhone] = useState("");
    const [mechanic_name, setMechanicName] = useState("");
  
let handleSubmit = async () => {
    try{
      let data =  { plate_number, type, model, manufacturing_year, driver_phone, mechanic_name };
   console.log(data)
      const res = await fetch("http://localhost:8080/api/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Plate Number"
          value={plate_number}
          onChange={(e) => setPlateNumber(e.target.value)}
        />

        <input
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          placeholder="Manufacturing Year"
          value={manufacturing_year}
          onChange={(e) => setManufacturingYear(e.target.value)}
        />
        <input
          placeholder="Driver Phone"
          value={driver_phone}
          onChange={(e) => setDriverPhone(e.target.value)}
        />
        <input
          placeholder="Mechanic Name"
          value={mechanic_name}
          onChange={(e) => setMechanicName(e.target.value)}
        />

        <button type="submit">Add Car</button>
      </form>

      <CarList/>
    </div>
  )
}
