import React from 'react';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

import "./Payson.css";

const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Payson extends React.Component {   

    constructor(props) {
        super(props);
        this.state = {
           data:'',
           price: '',
           snippet: '',
           ads: ''
        };

       
    }

    componentDidMount() {

        console.log(this.props.price);

        var obj = {  
            method: 'GET',
            headers: {
                'ContentType': 'application/json',
                'Authorization': 'JzQ6MmFjYWIzMGQtZmU1MC00MjZmLTkwZDctOGM2MGE3ZWIzMWQ0Jw==', 
                'host': 'https://api.payson.se/2.0/' 
            }
              

          };

        fetch('https://api.payson.se/2.0/Checkouts/39007e49cf2ff-1bcd-4952-b6ad-de8a66ad4829', obj)
        .then(res => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    snippet: result.snippet
                });
            });
        }
           
  

    render() {

    return (
        <div className="Payson">
            <h1>Betala din annons.</h1>

             <div className="Advertisment">
                
                {
                    this.state.ads ?
                    this.state.ads.map((item) =>
                    <div className="Advertisment-outsideBox">
                                    <h3 className="AdvertismentBox_title">{item.snippet}</h3>
             
                    </div>
                )
                    :
                    <h3>Vänta - datat hämtas</h3>
                }

</div>
           
        </div>
    );    
    
    }

}

export default Payson;