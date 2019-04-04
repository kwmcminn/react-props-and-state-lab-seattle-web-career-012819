import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
const ALLPETSURL = "/api/pets";
const CATURL = "/api/pets?type=cat";
const DOGURL = "/api/pets?type=dog";
const MICROPIGURL = "/api/pets?type=micropig";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = selectedType => {
    console.log(selectedType);
    this.setState({
      filters: {
        type: selectedType
      }
    });
  };

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch(ALLPETSURL)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({ pets: json });
        });
    } else {
      fetch(`${ALLPETSURL}?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({ pets: json });
        });
    }
  };

  adoptPet = (pet) => {
     pet.isAdopted = true
     this.setState({pets: this.state.pets})
     console.log(pet)
 }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
