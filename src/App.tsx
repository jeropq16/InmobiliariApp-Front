import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import CreateProperty from "./pages/CreateProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/create" element={<CreateProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
