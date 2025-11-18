import { useState } from "react";
import api from "../services/api";
import { RegisterRequest } from "../types/Auth";

export default function Register() {
  const [form, setForm] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    await api.post("/api/auth/register", form);
    alert("Usuario creado");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Registro</h1>

      <input
        placeholder="Nombre"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={register}>Registrarme</button>
    </div>
  );
}
