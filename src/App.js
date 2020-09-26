import React from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
// import App from './App';
import Logo, { NewName } from "./Logo";
import BestPokemon from "./BestPokemon";


  function logWhenClicked() {
    console.log("Button was clicked!");
  }




function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div class="headingWithImg">
      {" "}
      <Logo appName="Pokedex" appName2="Huseein" />{" "}
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />{" "}
      <logWhenClicked/>
    </div>
  );
}

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on{date}</p>;
}




export default App;
