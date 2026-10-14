
import "./App.css";
import { useState } from "react";
import UserContext from "./components/contextExample/UserContext";
import Login from "./components/contextExample/Login";
import Dashboard from "./components/contextExample/Dashboard";
function App() {
  const [user, setUser]=useState(null);
  const login = (username) => {
    setUser(username)

  }

  const logout = () => {
    setUser(null)

  }

 

  return (
  <UserContext.Provider value={{ user, login, logout }}>
      <div
        style={{
          minHeight: "100vh",
          padding: "30px",
        }}
      >
        {user ? <Dashboard /> : <Login />}
      </div>
    </UserContext.Provider>
   
  );
}

export default App;