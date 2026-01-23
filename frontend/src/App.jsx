import { useEffect, useState } from "react";
import SignInButton from "@clerk/clerk-react";


const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:7000"
    : "https://YOUR-BACKEND-URL.onrender.com";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then((res) => res.json())
      .then((data) => setMsg(data.msg))
      .catch(() => setMsg("Backend not connected"));
  }, []);

  return (
    <>
      <h1>Remote Interview Platform</h1>

      <SignInButton />
    </>
  );
}

export default App;
