import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/list/ListsContainer';
import CalculatorContainer from './components/tempCalc/CalculatorContainer';
import ProductDataContainer from './components/productData/ProductDataContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Poppy!</h1>
        </header>
        <ListsContainer />
        <hr />
        <CalculatorContainer />
        <hr />
        <ProductDataContainer />
        <hr />
        </div>
    );
  }
}

export default App;