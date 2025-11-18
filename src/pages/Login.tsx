import { useState } from "react";
import api from "../services/api";
import { LoginRequest, LoginResponse } from "../types/Auth";

export default function Login() {
  const [form, setForm] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await api.post<LoginResponse>("/api/auth/login", form);

      localStorage.setItem("access", res.data.accessToken);
      localStorage.setItem("refresh", res.data.refreshToken);

      window.location.href = "/properties";
    } catch (err) {
      console.error(err);
      alert("Error al iniciar sesión. Revisa tus credenciales y vuelve a intentarlo.");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
