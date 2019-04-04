import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
   constructor(props){
      super(props)
   }
  renderPets = () => {
     return this.props.pets.map(pet => {
        return <Pet pet={pet} adoptPet={this.props.adoptPet}/>
     })
 };

  render() {
    return <div className="ui cards">{this.renderPets()}</div>;
  }
}

export default PetBrowser;
