import React, { Component } from 'react';
import './css/Pokecard.css';

class Pokecard extends Component {
  render() {
    function formatId(id) {
      const num = 3 - String(id).length;
      return "0".repeat(num) + id;
    }

    const { name, id, type, exp } = this.props;

    return (
      <div className="Pokecard">
        <h2 className="Pokecard-name">{name}</h2>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatId(id)}.png`} alt={name}></img>
        <div className="Pokecard-stats">
          <p><strong>Type:</strong> {type}</p>
          <p><strong>EXP:</strong> {exp}</p>
        </div>
      </div>
    )
  }
}

export default Pokecard;