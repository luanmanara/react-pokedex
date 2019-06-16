import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        const { pokemons, totalExp, winner } = this.props;
        return (
            <div className="Pokedex">
                <div className="Pokedex-cards">
                    {pokemons.map(pokemon => (
                        <Pokecard
                            key={Math.random() * pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}
                        />
                    ))}
                </div>
                <div className={`Pokedex-info ${winner ? 'Pokedex-winner' : 'Pokedex-loser'}`}>
                    {winner ? "You won with " : "You lost with"} {totalExp} points
                </div>
            </div>
        )
    }
}

export default Pokedex;