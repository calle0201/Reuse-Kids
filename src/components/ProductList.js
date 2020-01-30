import React from 'react';


//Används ej
class ProductList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            titles: []
        }
    }
       
    product = () => {
     //   this.props.product(productList);
    }

    componentDidMount() {
        fetch('http://localhost/reusesport/src/api/product.php')
            .then(response => {
                this.setState({titles : response})
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        if(this.state.titles && this.state.titles.length > 0 ){
            return(
                <div>
                    <h1>Produktbilder</h1>
                    {
                        this.state.titles.map((items =>
                            <th key= "">
                                <div>
                                    {items.title}
                                </div>
                            </th>       
                        ))
                    }
                </div>    
            );
        }
        return null;
    }
}


export default ProductList;