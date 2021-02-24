import React, { useState, Fragment } from "react";
import axios from 'axios';
import Card from "../Card/Card";

import './SearchBar.css'

const SearchBar = () => {

  const [userInput, setUserInput] = useState("");
  const [issues, setIssues] = useState([]);
  
  const handleChange = (e) => {
    // console.log(e.target.value)
    setUserInput(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(userInput)

    try {
      const searchResult = await axios(`https://api.github.com/search/issues?q=${userInput}+in:title+is:issue+repo:facebook/react`);
    setIssues(searchResult)

    } catch (error) {
      console.log(error)
    }
    

  }

  console.log(issues)
  return (<Fragment>
<div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          name="github issue"
          value={userInput}
          onChange={handleChange}
        />
      </form>
      
    </div>
    <Card issues={issues}/>
  </Fragment>
    
    
    
  );
};

export default SearchBar;
