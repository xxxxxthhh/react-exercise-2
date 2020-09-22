import React, { Component } from 'react';
import propTypes from 'prop-types';
import Phone from './Phone';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      curCategory: this.props.phoneCategory,
    };
  }

  render() {
    const curPhones = this.state.data.filter(
      (item) => item.category === this.state.curCategory
    );
    return (
      <div className="category">
        <h2>{this.props.phoneCategory}</h2>
        {curPhones.map((item) => (
          <Phone
            name={item.name}
            price={item.price}
            key={item.name}
            addNum={this.props.addNum}
          />
        ))}
      </div>
    );
  }
}

Category.propTypes = {
  phoneCategory: propTypes.string,
  data: propTypes.object,
  curCategory: propTypes.string,
  addNum: propTypes.func,
};

export default Category;
