import { Route, Routes, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const openPage = () => {
        navigate(`/dashboard`);
      };
    return (
      <>
        <div>
          <h1>Home</h1>
          <button onClick={openPage}>Click to open Dashboard</button>
        </div>
      </>
    );
  }
  