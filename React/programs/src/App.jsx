import { useState } from 'react';
import UserContext from './components/context/UserContext';
import Login from './components/context/Login';
import Dashboard from './components/context/Dashboard';
import './App.css';

function App() {
  // Get the saved user from localStorage when the app loads
  const [user, setUser] = useState(() => {
    return localStorage.getItem('user');
  });

  const login = (username) => {
    // Save username in localStorage
    localStorage.setItem('user', username);

    // Update React state
    setUser(username);
  };

  const logout = () => {
    // Remove saved user from localStorage
    localStorage.removeItem('user');

    // Update React state
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ login, logout, user }}>
      {user ? <Dashboard /> : <Login />}
    </UserContext.Provider>
  );
}

export default App;