import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./Pages/Main.jsx";
import Favourites from "./Pages/Favourites";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("Batman");

  return (
    <BrowserRouter>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="favourites">Favourites</NavLink>
        <div className="search">
          <input
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main searchTerm={searchTerm} />}></Route>
          <Route path="favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
