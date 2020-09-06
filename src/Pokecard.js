import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { name, id, type, exp } = this.props;
    return (
      <div className="Pokecard">
        <h2>{name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}></img>
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    )
  }
}

export default Pokecard;