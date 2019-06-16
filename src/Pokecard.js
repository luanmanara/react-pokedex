import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
    render(){
        const { id, name, type, base_experience } = this.props;
        const imgSrc = `${POKE_API}${id.padStart(3,'0')}.png`;
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-name">{name}</h2>
                <img className="Pokecard-img" src={imgSrc} alt={name}/>
                <p className="Pokecard-p"><b>Type:</b> {type}</p>
                <p className="Pokecard-p"><b>Exp:</b> {base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;