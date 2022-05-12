import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchTerm, setSearchTerm] = useState("")
     
  function handleSearchChange(newSearch) {
    setSearchTerm(newSearch)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearchChange} />
      <ListingsContainer
      searchTerm={searchTerm} 
      />
    </div>
  );
}

export default App;
