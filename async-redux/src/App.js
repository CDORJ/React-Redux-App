import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const initialGenre = ["age", "alone", "graft", "beer"];

function App() {
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [quote, setQuote] = useState([]);
  const [number, setNumber] = useState(1)

  const setCount = (number) => {
    setNumber(number);
  }

  const selectGenre = (selection) => {
    setSelectedGenre(selection);
  };

  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/genres")
      .then((res) => {
        // console.log("axios response", res.data.data);
        setGenre(res.data.data);
      })
      .catch((err) => console.log("err from genre axios", err));
  }, []);

  useEffect(() => {
    axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/?genre=${selectedGenre}&limit=${number}`
    )
      .then((res) => {
      console.log("this is the quote based on genre", res)
    })
  }, [selectGenre, setCount])

  return (
    <div className="App">
      <select
        value={selectedGenre}
        onChange={(e) => selectGenre(e.target.value)}
      >
        {genre.map((item) => (
          <option>{item}</option>
        ))}
        {console.log(selectedGenre)}
      </select>
      <input type='number' onChange={(e) => setCount(e.target.value)}></input>
    </div>
  );
}

export default App;
