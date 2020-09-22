import React, { Component } from 'react';
import propTypes from 'prop-types';
import phonePic from '../assets/product_image_placeholder.png';
// import * as propTypes from "prop-types";

class Phone extends Component {
  render() {
    return (
      <div className="phone">
        <h3>{this.props.name}</h3>
        <img src={phonePic} alt="手机图片" />
        <div>
          <p className="phone_price">{this.props.price}</p>
          <button className="add_to_cart" onClick={() => this.props.addNum()}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

Phone.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  addNum: propTypes.func,
};

export default Phone;
