import React from 'react'

class Pet extends React.Component {
   constructor(props){
      super(props)
      console.log(props.pet)
   }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'male' ?  ' ♀ ' : ' ♂ '}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.props.pet.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button className={this.props.pet.isAdopted ? "ui disabled button" : "ui primary button"} onClick={() => this.props.adoptPet(this.props.pet)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
