import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import NewPassword from './NewPassword';
import './Logout.css';

import ReactGA from 'react-ga';



class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginEmail: "",
            loginPassword: ""
        }

        this.logoutSubmit = this.logoutSubmit.bind(this);
        this.findUserid = this.findUserid.bind(this);

    }

    componentDidMount() {
        console.log(this.props.userid);
       let userid = this.props.userid;

      //  this.getAdvertisment(userid);
    }

    findUserid() {

        let userid = JSON.parse(localStorage.getItem('userid'));
        console.log(userid);

       /* fetch('https://reusesport.se/APIs/userid.php', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(resp => resp.text())
        .then((data) => {
            console.log(data);
            this.setState({
                userid: data
            });*/

          //  let userid = this.state.userid;
            userid = userid.substring(1,userid.length - 1);
         

            this.setState({ loggedInStatus: true }, function () {
                console.log(this.state.loggedInStatus);
           });
            
           console.log(this.state.loggedInStatus);

            this.props.history.push({
                pathname: '/MySide',
                state: {
                    userid: userid,
                    loggedInStatus: this.state.loggedInStatus
                }
            }) 
            
       // });
    }

  

    logoutSubmit(event) {
        event.preventDefault();

        let userid = JSON.parse(localStorage.getItem('userid'));
        console.log(userid);

        userid = userid.substring(1,userid.length - 1);
        console.log(userid);
        
        localStorage.removeItem('userid');

        let path = 'loginRegister';
        this.props.history.push(path); 


    }


    render() {
    return (
        <div className="Logout">
            <form className="Logout-form" onSubmit={this.logoutSubmit}>
                 <input className="Submit_button-logout" type="submit" id="sub" value="Logga ut" />
            </form>
        </div>


    );
    }

}

export default withRouter(Logout);