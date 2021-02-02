import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadQuote } from "../actions/quoteActions";

const Params = (props) => {
  const [form, setForm] = useState({
    limit: 1,
    genre: "",
  });
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/genres")
      .then((res) => {
        // console.log("this is the genre list",res.data);
        setGenre(res.data.data);
      });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.loadQuote(form);
  };

  return (
    <div>
      <input name="limit" value={form.limit} onChange={handleChange} />
      <select name="genre" value={form.genre} onChange={handleChange}>
        {genre.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
      <button onClick={handleClick}>Qet Your Quotes</button>
      
    </div>
  );
};



export default connect(null, { loadQuote })(Params);
