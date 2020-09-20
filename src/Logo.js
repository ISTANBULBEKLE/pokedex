import React from "react";

const Logo = (props) => {
  // const appName = 'Pokedex';
  return (
    <header>
      <h1>
        Welcome to {props.appName}, {props.appName2}
      </h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
    </header>
  );
};

export function NewName() {
  return <p> Hello World </p>;
}

export default Logo;
