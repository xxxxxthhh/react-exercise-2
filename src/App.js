import React, { Component } from 'react';
import './App.scss';
import Category from './components/Category';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      num: 0,
      addNum: () => {
        this.setState({
          num: this.state.num + 1,
        });
      },
    };
    fetch('http://127.0.0.1:3000/products')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }
  render() {
    const data = this.state.data;
    const cartList = new Set();
    data.forEach((cart) => cartList.add(cart.category));

    return (
      <main className="app">
        <div className="navigation">
          <h1>Store</h1>
          <div className="cartNum">
            <i className="fa fa-shopping-cart" />
            <span>{this.state.num}</span>
          </div>
        </div>
        {Array.from(cartList).map((cart) => (
          <Category
            phoneCategory={cart}
            data={data}
            key={cart}
            addNum={this.state.addNum}
          />
        ))}
      </main>
    );
  }
}

export default App;
