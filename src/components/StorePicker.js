import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    console.log(this.myInput.value);
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store </h2>
        <input
            type="text"
            required
            ref={this.myInput}
            defaultValue={getFunName()}
            placeholder="Store Name"/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
