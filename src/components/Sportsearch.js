import React from 'react';

//import "./sportsearch.css";

//Används ej
class Sportsearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
    }

    componentDidMount() {

        let data = fetch('http://localhost/reusesport/src/api/sportsearch.php')
            .then((res) => {
                res.json().then((res) => {
                    console.log(res);
                    this.setState({data:res})
                })
            })
    
            
    }
    render() {
        return(
            <div className="sportsearch">
                {
                        this.state.data ?
                        this.state.data.map((item) =>
                        <div className="sportsearch_advertisment">
                        <h3>{item.title}</h3>
                        <img src="{'item.picture'}" alt="{item.title}"/>
                        <h3>{item.price}</h3>
                        </div>
                    )
                        :
                        <h3>Vänta - datat hämtas</h3>
                    }
            </div>
        )
    }    
}

export default Sportsearch;