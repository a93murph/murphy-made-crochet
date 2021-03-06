import "./App.css";
import React from "react";
import axios from "axios";

export default function App() {
  const [pattern, setPattern] = React.useState({});

  return (
    <div className="App">
      <div className="image">
        <h1>MurphyMadeCrochet</h1>
      </div>
      <h3>
        Crochet designs that will have you saying, "Thanks, I made it!" to
        everyone you see! Happy making!
      </h3>
      <br />
      <div className="container">
        <label for="nameInput">Name:</label>
        <input
          class="inputField"
          type="text"
          id="nameInput"
          placeholder="Everything's Pine Tank"
          value={pattern.name}
          onChange={(e) => {
            setPattern({ ...pattern, name: e.target.value });
          }}
        />
        <br />
        <label for="priceInput">Price:</label>
        <input
          class="inputField"
          id="priceInput"
          type="number"
          step=".01"
          placeholder="$9.15"
          value={pattern.price}
          onChange={(e) => {
            setPattern({ ...pattern, price: parseFloat(e.target.value) });
            console.log(pattern.price);
          }}
        />
        <br />
        <textArea
          class="inputField"
          type="textArea"
          id="descriptionInput"
          placeholder="Description"
          value={pattern.description}
          onChange={(e) => {
            setPattern({ ...pattern, description: e.target.value });
          }}
        />
        <br />
        <input
          type="file"
          id="imgInput"
          name="img"
          accept="image/*"
          onChange={(e) => {
            setPattern({ ...pattern, image: e.target.innerHTML });
          }}
        />
        <br />
        <br />
        <button
          class="inputField"
          onClick={() => {
            axios
              .post("http://localhost:3001/pattern", pattern)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            setPattern({ name: "", price: "", description: null });
          }}
        >
          Submit
        </button>
      </div>
      {/* <img
          src="https://i.etsystatic.com/21643598/r/il/bca6a4/3346861401/il_1588xN.3346861401_1o4h.jpg"
          alt="Everything's Pine"
        /> */}
    </div>
  );
}
