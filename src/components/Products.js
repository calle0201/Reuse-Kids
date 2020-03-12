import React from 'react';

import "./Products.css";



class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    
    update(e){
        console.log('update')
        //this.setState({products: product});
    }


    componentDidMount() {
   
       /* fetch('http://localhost/reusesport/src/api/product.php'
        {
            header: {
                "Content-Type": "application/json"
            },
            method: 'GET',
            body: JSON.stringify({obj})
         })
         .then((Response) => Response.json())
         .then((findresponse) => {
             console.log(findresponse)
             this.setState({
                 products:findresponse
             })
        }); */

        var formData = new FormData();
        formData.append('content', 'test2');
        fetch('http://reusesport.se/APIs/product.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: formData,
        }).then(res => res.json())
        .then(response => {
            console.log('response:');
            console.log(response);
        });    
       
        /*fetch('http://localhost/reusesport/src/api/product.php')
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({
                    products:findresponse
                })
            })
            .catch(error => {
                console.log(error)
            })*/
    }

    render() {
        <h1>Artiklar till salu</h1>
        if(this.state.products && this.state.products.length > 0 ){
            return(
                <div>
                    {
                        this.state.products.map((items =>
                            
                            <th key= "">
                                <div className="Product">
                                    <div className="Product-title">{items.title}</div>
                                    <div className="Product-picture" >{items.picture}</div>
                                    <div className="Product-price">{items.price} kr</div>
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


export default Products;


/*import React from 'react';
import ProductList from './ProductList';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            txt: 'this is the state txt',
            products: "",
        };
    }
    
    /*update(e){
        this.setState({txt: e.target.value})
    }*/
/*
    update(e){
        this.setState({products: productList});
    }

    product = (productList) => {
        this.setState({productList: productList});
    }
    

    render() {
        return(
            <div>
                <input type="text" onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
            Produkter
            <ProductList productList = {this.productList} />
            </div>
        );
    }
}


export default Products;*/