import { useState } from "react";
import api from "../services/api";

export default function CreateProperty() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<FileList | null>(null);

  const handleCreate = async () => {
    const form = new FormData();
    form.append("Title", title);
    form.append("Description", desc);
    form.append("Price", price.toString());
    form.append("Location", location);

    if (images) {
      Array.from(images).forEach((img) => {
        form.append("Images", img);
      });
    }

    try {
      await api.post("/api/propierty", form);
      alert("Propierty creada correctamente");
      window.location.href = "/Properties";
    } catch (err) {
      alert("Error al crear propierty");
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Crear Propierty</h1>

      <input placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Descripción" onChange={(e) => setDesc(e.target.value)} />
      <input type="number" placeholder="Precio" onChange={(e) => setPrice(Number(e.target.value))} />
      <input placeholder="Ubicación" onChange={(e) => setLocation(e.target.value)} />

      <input type="file" multiple onChange={(e) => setImages(e.target.files)} />

      <button onClick={handleCreate}>Crear Propierty</button>
    </div>
  );
}
