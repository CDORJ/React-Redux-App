import React from "react";
import "./App.css";

import Quote from "./components/Quote";
import Params from "./components/Params";

function App() {
  // const [genre, setGenre] = useState([]);
  // const [selectedGenre, setSelectedGenre] = useState("");
  // const [quote, setQuote] = useState([]);
  // const [number, setNumber] = useState(1)

  // const setCount = (number) => {
  //   setNumber(number);
  // }

  // const selectGenre = (selection) => {
  //   setSelectedGenre(selection);
  // };

  // useEffect(() => {
  //   axios
  //     .get("https://quote-garden.herokuapp.com/api/v3/genres")
  //     .then((res) => {
  //       // console.log("axios response", res.data.data);
  //       setGenre(res.data.data);
  //     })
  //     .catch((err) => console.log("err from genre axios", err));

  // }, []);

  // useEffect(() => {
  //   axios.get(
  //     `https://quote-garden.herokuapp.com/api/v3/quotes/?genre=${selectedGenre}&limit=${number}`
  //   )
  //     .then((res) => {
  //       // console.log("this is the quote based on genre", res.data.data)
  //       setQuote(res.data.data)
  //   })
  // }, [selectedGenre, number])
  // // console.log("this is the quote", quote)

  return (
    <div className="App">
      <h2>List of Quotes</h2>
      <Params />
      <Quote />
      {/* <select
        value={selectedGenre}
        onChange={(e) => selectGenre(e.target.value)}
      >
        {genre.map((item) => (
          <option>{item}</option>
        ))}
        {console.log(selectedGenre)}
      </select>
      <input type='number' onChange={(e) => setCount(e.target.value)}></input>
      
        {quote.map((item) => (
          <div key={item.id}>
            <h4>{item.quoteText}</h4>
            <p>{item.quoteAuthor}</p>
          </div>
        ))} */}
    </div>
  );
}

export default App;
