import React, { Component } from 'react';
import ValueCode from './ValueCode';
import './Price.css';


class Price extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: '',
            hasPrice: false,
            email: ''
        }

        this.cost = '';

      
    }
 

    newCost(){
        console.log('nytt pris');
    }
    
    render() {
        const price = this.props.price;
        const email = this.props.email;
        //this.setState({hasPrice: true});

        console.log(price);
        console.log(email);
        //console.log(procent);

        var cost = 0;
        var procent;

        if ( this.props.price > 0 && this.props.price < 51) {
            cost = 5;
        } else if (this.props.price > 50 && this.props.price < 100) {
            cost = 10;
        } else if (this.props.price > 101 && this.props.price < 200) {
            cost = 20;
        } else if (this.props.price > 201 && this.props.price < 500) {
            cost = 30;
        } else if (this.props.price > 501 && this.props.price < 1000) {
            cost = 40;
        } else if (this.props.price > 1001 && this.props.price < 2000) {
            cost = 50;
        } else if (this.props.price > 2001 && this.props.price < 5000) {
            cost = 75;
        } else if (this.props.price > 5001) {
            cost = 100;
        }

      return (
         

        <div className='Price'>
         
            <ValueCode procent={this.state.cost} email={this.props.email} />
            <div className="Price-price">Din annons skulle kostat {cost} kr.</div>
         
         
        </div>
      );
    }
  }

  export default Price;  