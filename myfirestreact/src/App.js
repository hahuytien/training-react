import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './css/style.css';
import './css/bootstrap.min.css';
import './css/setting.css';
import './css/style_2.css';
// import Bootraps from './js/bootstrap.min.js';
// import Jquery from'./js/jquery-3.3.1.min.js';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Test from './components/Test';
import Sidebar from './components/Sidebar';
import Items from './mockdata/Items';
// import TableListView from './components/TableListView';


import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="container">
          <div className="row">
            <Test />
          </div>
        </div>

      </div>
    );
  }
}

export default App;





        {/* <div className="container">
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form />
          </div>
        </div>
        <ListItem />
      </div> */}