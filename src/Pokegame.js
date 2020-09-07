import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }

  render() {
    const pokemon  = [...this.props.pokemon].sort(() => Math.random() - .5);
    const hand1 = pokemon.slice(0, 4);
    const hand2 = pokemon.slice(4);

    const hand1Exp = hand1.reduce((a, c) => a + c.base_experience, 0);
    const hand2Exp = hand2.reduce((a, c) => a + c.base_experience, 0);

    return (
      <div className="Pokegame">
        <Pokedex 
          pokemon={hand1} 
          totalExp={hand1Exp}
          isWinner={hand1Exp > hand2Exp}
        />
        <Pokedex 
          pokemon={hand2} 
          totalExp={hand2Exp}
          isWinner={hand2Exp > hand1Exp}
        />
      </div>
    )
  }
}

export default Pokegame;