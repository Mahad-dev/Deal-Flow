// ColorPicker.js
import React from "react";
import { HuePicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    background: this.props.color,
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    this.props.onChangeComplete(color); // Notify parent component about the color change
  };

  render() {
    return (
      <HuePicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default ColorPicker;
