import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);

ReactDOM.render(myelement, document.getElementById('root2'));

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <div>--------------React Component-----------------<h2>Hi, I am a Car! in the color component : {this.state.color}, color prop: {this.props.color}</h2></div>;
  }
}

ReactDOM.render(<Car color="blue" />, document.getElementById('root3'));

class Car2 extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
    this.statee = { favoritecolor1: "aaaaaaaaaaa" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState2) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState2.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Garage favcol="yellow" />, document.getElementById('root4'));

class Garage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 0 };
    // this.inc = this.inc.bind(this);
  }

  inc = () => {
    console.log('before: ' + this.state.test);
    this.setState({
      test: this.state.test + 1
    });
    console.log('after: ' + this.state.test);
  }

  // componentDidMount() {
  //   setInterval(this.inc, 1000);
  // }

  render() {
    return <button onClick={this.inc}>Click to update</button>
  }
}
ReactDOM.render(<Garage2 />, document.getElementById('root5'));


