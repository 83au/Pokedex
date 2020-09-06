import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    function formatId(id) {
      const num = 3 - String(id).length;
      return "0".repeat(num) + id;
    }

    const { name, id, type, exp } = this.props;

    return (
      <div className="Pokecard">
        <h2>{name}</h2>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatId(id)}.png`} alt={name}></img>
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    )
  }
}

export default Pokecard;