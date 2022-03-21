import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import pokedex from '../pokedex.json'

// AREA DE TRABAJO --> Reemplazar por el JSON

// AREA DE TRABAJO -----------------------------------
export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      pokemon : ["Bulbasaur",1,"Grass"],
      pokemons:pokedex
    }
    this.update=this.update.bind(this)
  }
  // AREA DE TRABAJO --> Usar estructura de Class Component
  pokemon = [pokedex[0].name, pokedex[0].id, pokedex[0].type];
  pokemons = pokedex;
  // AREA DE TRABAJO -------------------------------------------


  update(pokemon) {
    console.log(pokemon);
    this.setState(pokemon)
    // En esta funcion se deberia actualizar el pokemon visible
    // No olvidemos que si es funcion debemos bindearla... como podemos evitar usar el bind?
  }

  getPokemon = () => {
      if (this.state.pokemon[1]?.toString()?.length === 1) return `00${this.state.pokemon[1]}` 
      if (this.state.pokemon[1]?.toString()?.length === 2) return `0${this.state.pokemon[1]}` 
      if (this.state.pokemon[1]?.toString()?.length === 3) return `${this.state.pokemon[1]}` 
  } 


  getTypes = () => {
    let phrase;
    if(this.state.pokemon[2].length === 1) return this.state.pokemon[2][0]
    if(this.state.pokemon[2].length > 1) {
     for (let index = 0; index < this.state.pokemon[2].length; index++) {
       if(index === 0) phrase = this.state.pokemon[2][index]
       if(index !== 0) phrase = `${phrase} and ${this.state.pokemon[2][index]}`
     }
     return phrase
    }
  }

  render() {
    /* AREA DE TRABAJO
    Pueden usar desestructuracion o directamente modificar las variables this.pokemon por this.state...
    */
    const [name,_id,tpe]=this.state.pokemon
    console.log(tpe)
    return (
      <div style={{display:"flex"}}>
      <div className="container">
        <img id={_id} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={name} />
        <p id={this.state.pokemon.name}>{`${name} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <Pokedex updateParent={this.update} pokemons={this.pokemons} />
    </div>
    )
  }
}


