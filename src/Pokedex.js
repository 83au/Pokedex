import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <p className="Pokedex-totalExp">Total Experience: {this.props.totalExp}</p>
        <div className="Pokedex-grid">
          {this.props.pokemon.map(mon => {
            return (
              <Pokecard 
                id={mon.id}
                name={mon.name}
                type={mon.type}
                exp={mon.base_experience}
              />
            )
          })}
        </div>
        {
            this.props.isWinner ? <h2 className="Pokedex-winner">THIS HAND WINS!</h2> :
            <h2 className="Pokedex-loser">THIS HAND LOSES!</h2>
        }
      </div>
    );
  }
}

export default Pokedex;