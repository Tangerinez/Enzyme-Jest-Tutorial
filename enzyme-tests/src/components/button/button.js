import React from "react";

class Button extends React.Component {
  state = {
    text: ""
  };

  handleClick = () => {
    this.setState(() => {
      return { text: "PROCEED TO CHECKOUT" };
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}

export default Button;
