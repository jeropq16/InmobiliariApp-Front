import { useState } from "react";
import api from "../services/api";
import { LoginRequest, LoginResponse } from "../types/Auth";

export default function Login() {
  const [form, setForm] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const res = await api.post<LoginResponse>("/api/auth/login", form);

    localStorage.setItem("access", res.data.accessToken);
    localStorage.setItem("refresh", res.data.refreshToken);

    window.location.href = "/properties";
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
