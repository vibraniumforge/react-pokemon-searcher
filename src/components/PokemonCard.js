import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    return (
      <Card onClick={() => this.props.handleCardToggle(this.props.pokemon)}>
        <div>
          <div className="image">
            <img
              src={
                this.props.pokemon.isClicked
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5]
                ? this.props.pokemon.stats[5].value
                : 50}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
