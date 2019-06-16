import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';


class Pokegame extends Component {
    static defaultProps = {
        pokemons: 
        [
            {id: "4", name: 'Charmander', type: 'fire', base_experience: 62},
            {id: "7", name: 'Squirtle', type: 'water', base_experience: 63},
            {id: "11", name: 'Metapod', type: 'bug', base_experience: 72},
            {id: "12", name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: "25", name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: "39", name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: "94", name: 'Gengar', type: 'poison', base_experience: 225},
            {id: "133", name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    render() {
        const hands = [this.createDeck(), this.createDeck()];
        const totalExps = hands.map(el => el.map(el => el.base_experience).reduce((acc, cur) => acc + cur));

        const decks = [
            {hand: hands[0], totalExp: totalExps[0]},
            {hand: hands[1], totalExp: totalExps[1]}
        ];

        return (
            <div className="Pokegame">
                <h1>Pokedex Game</h1>
                <Pokedex 
                    pokemons={decks[0].hand}
                    totalExp={decks[0].totalExp}
                    winner={decks[0].totalExp > decks[1].totalExp ? true : false}
                 />
                 <Pokedex 
                    pokemons={decks[1].hand}
                    totalExp={decks[1].totalExp}
                    winner={decks[1].totalExp > decks[0].totalExp ? true : false}
                 />
            </div>
        )
    }

    createDeck(){
        let deck = [];

        for(let i = 0; i < 4; i++){
            deck.push(this.getRandomPoke());
        }

        return deck;
    }

    getRandomPoke(){
        const pokemon = this.props.pokemons[Math.floor(Math.random() * this.props.pokemons.length)];
        return pokemon;
    }
}

export default Pokegame;