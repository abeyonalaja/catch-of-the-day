import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount(){
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId)

    console.log(localStorageRef)

    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)})
    }

    this.ref = base.syncState(`${params.storeId}/fishes`,{
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    console.log("Updated")
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  }

  componentWillUnMount(){
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    //take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to thAT FISHES VARIABLE
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = (key) => {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1;
    this.setState({order})
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Abey is the best"/>
          <ul className="fishes" >
            {Object.keys(this.state.fishes).map(key =>
              <Fish key={key}
                    index={key}
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder}/>)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
