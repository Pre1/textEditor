import React, { Component } from "react";
import "./App.css";


const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};



class App extends Component {

  state = {
    value: "",
    color: "#133B53",
    bold: false,
    italic: false,
    underline: false,
  }

  colorTextArea = clr => {

    this.setState({color: clr})
  }

  styleTextArea = st => {

    let selectedStyle = !this.state[st]
    this.setState({ [st]: selectedStyle})
  } 
   
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {

        return <button 
          style={styles[style], {backgroundColor: this.state[style]?"blue":""}} 
          key={style}
          onClick = {() => this.styleTextArea(style)}>

          {style}
        </button>

         });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick = {() => this.colorTextArea(color)}
        />
      );
    });

    let bold = this.state.bold ? "bold" : ""
    let italic = this.state.italic ? "italic" : ""
    let underline = this.state.underline ? "underline" : ""

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        
        <textarea 
        id="story" 
        style = {{
          color: this.state.color,
          fontWeight: bold,
          fontStyle: italic,
          textDecorationLine: underline
        }}>



        </textarea>
        
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
