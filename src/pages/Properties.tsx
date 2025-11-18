import { useEffect, useState } from "react";
import api from "../services/api";
import { Propierty } from "../types/Propierty";

export default function Properties() {
  const [propierties, setPropierties] = useState<Propierty[]>([]);

  useEffect(() => {
    api.get<Propierty[]>("/api/propierty")
      .then(res => setPropierties(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Propierties</h1>

      <button onClick={() => window.location.href = "/properties/create"}>
        Crear Propierty
      </button>

      {propierties.map((p) => (
        <div key={p.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>${p.price}</p>
          <p>{p.location}</p>

          {p.imagesUrl?.map((img, idx) => (
            <img key={idx} src={img} width={100} />
          ))}
        </div>
      ))}
    </div>
  );
}
