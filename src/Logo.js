import React from "react";

const Logo = ({ callLogo, appName, appName2 }) => {
  // const appName = 'Pokedex';

  /*   function logWhenClicked() {
    console.log("Button was clicked!");
  } */

  return (
    <header>
      <h1>
        Welcome to {appName}, {appName2}
      </h1>
      <img
        onClick={callLogo}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      />
    </header>
  );
};

export function NewName() {
  return <p> Hello World </p>;
}

export default Logo;
