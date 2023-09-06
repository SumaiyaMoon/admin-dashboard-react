import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";


export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
