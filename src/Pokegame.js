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
    const { pokemon } = this.props;
    const PokemonList = pokemon.sort(() => Math.random() - .5);
    const handOne = PokemonList.slice(0, 4);
    const handTwo = PokemonList.slice(4);

    const handOneTotalExp = handOne.reduce((a, c) => a + c.base_experience, 0);
    const handTwoTotalExp = handTwo.reduce((a, c) => a + c.base_experience, 0);
    const handOneWins = handOneTotalExp > handTwoTotalExp;

    return (
      <div className="Pokegame">
        <Pokedex 
          pokemon={handOne} 
          totalExp={handOneTotalExp}
          isWinner={handOneWins}
        />
        <Pokedex 
          pokemon={handTwo} 
          totalExp={handTwoTotalExp}
          isWinner={!handOneWins}
        />
      </div>
    )
  }
}

export default Pokegame;