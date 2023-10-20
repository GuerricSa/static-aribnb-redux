import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  static defaultProps = {
    flats: [{
      name: "Charm at the Steps of Montmartre",
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      price: 164,
      priceCurrency: "EUR"
    }]
  };

  componentWillMount() {
    
  }

  render() {
    const style = {
      height: "100vh"
    };

    return (
      <div className="col-sm-5 flat-list" style={style}>
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

export default FlatList;
