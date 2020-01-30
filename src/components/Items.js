import React from 'react';
//import "./Items.css";

class Item extends React.Component {

    getInitialState () {
        return { 
          item: {}
        }
    }  

    componentDidMount () {
        //filter car data by the id parameter from the route here.
        const item = this.props.item.filter(i => i.id == this.props.params.id)
        this.setState({ item: item[0]})
    }
           
         
    render() {
           
              
        return (
            <p>{this.state.item.id} - {this.state.item.name}</p>
        )
    }
   
}  

export default Item;