import React, {Component} from "react";
import "./styles.css";

class App extends Component {

  msgStyle = {
    fontSize: "20px"
  }
  btnStyle = {
    fontSize: "20px"
  }

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello',
    };
    let timer = setInterval(() => {
      this.setState((state)=>({
        msg: state.msg + "!"
      }));
    },3000);
  }

  render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}

export default App;