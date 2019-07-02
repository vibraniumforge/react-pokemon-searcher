import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonList: [],
      searchTerm: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      // .then(res => {
      //   console.log(res);
      //   return res;
      // })
      .then(res => this.setState({ pokemonList: res }))
      .catch(err => console.log(err));
  }

  // handleSearchChange = (e, data) => {
  //   this.setState({ searchTerm: data.value });
  // };
  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value });
  };

  handleCardToggle = pokemon => {
    const col = this.state.pokemonList;
    const i = col.indexOf(pokemon);
    this.setState({
      pokemonList: [
        ...col.slice(0, i),
        // initially pokemon.isClicked is undefined; inverting that falsey value makes it true
        { ...pokemon, isClicked: !pokemon.isClicked },
        ...col.slice(i + 1)
      ]
    });
  };

  handleAddPokemon = pokemon => {
    this.setState(prevState => ({
      pokemonList: [...prevState.pokemonList, pokemon]
    }));
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection
          pokemonList={this.state.pokemonList}
          seeFront={this.state.seeFront}
          handleCardToggle={this.handleCardToggle}
        />
        <br />
        <PokemonForm handleAddPokemon={this.handleAddPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
