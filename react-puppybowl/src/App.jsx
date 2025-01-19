import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      <h1>Welcome to Puppy Bowl!</h1>
      <div>
        <SearchBar players={players}></SearchBar>{" "}
      </div>
      <div>
        {" "}
        <NewPlayerForm></NewPlayerForm>
      </div>

      <div>
        <Routes>
          <Route
            path="/"
            element={<AllPlayers players={players} setPlayers={setPlayers} />}
          />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
