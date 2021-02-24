import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Refactor into components */}
      <NavBar />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
