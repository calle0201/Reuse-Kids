import React, { Component } from 'react';
import './ValueCode.css';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';


const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class ValueCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: props.cost,
            code: '',
            email: props.email,
            procent:'',
            newprocent:''
        }

        this.cost = '';

        this.testCode = this.testCode.bind(this);

    }

    update() {

        this.setState({
            cost: this.refs.code.value,
        })
    }       

    
    //handleSubmit(event) {
    testCode(event) {

        console.log(this.props.email);
        
        event.preventDefault();
        this.setState({ code: this.refs.code.value});

        let host = 'reusesport.se.mysql';
let user = 'reusesport_sekids';
let password = 'J87jket37snjt89yte5lk2';
let database = 'reusesport_sekids';

        const data = {   
            code: this.refs.code.value,
            email: this.props.email,
            host: host,
            user: user,
            password: password,
            database: database,
        }
       
        console.log(data);

        fetch('https://reusesport.se/kidsAPI/valuecode.php', {
            method: 'POST',
            body: JSON.stringify(data),
        })
       // .then(resp => resp.text()) 
       // .then(data => console.log(data))
       .then(resp => resp.text()) 
       .then((data) => {
          // console.log(data);
           this.setState({
               data: data 
           });
          // console.log(data)
           if(data == 1) {
               console.log('koden fungerar');
           }
           else if(data == 2) {
                console.log('Koden är förbrukad eller felaktig.')
           }
           else if(data == 3) {
            console.log('Det saknas uppgifter.')
       }
       })


        console.log(data);
  
        var newprocent;
        console.log(this.refs.code.value)

        if(this.refs.code.value === 'kalle') {
            console.log('kod kalle');
            var procent = 0.5;
            this.setState({ newprocent: procent});
            console.log(procent);
            console.log(this.state.newprocent);
        } else {
            console.log('annan kod');
            var procent = 1;
            this.setState({ procent: procent});
            console.log(procent);
        }
      

    }
    
    
    render() {


      
      return (
         

        <div className='ValueCode'>
          <form className="Price-form" onSubmit={this.handleSubmit}>
            <div className="Price-code" >
                <div className="Price-text">Har du en värdekod? Skriv den i rutan för att ta del av erbjudandet.</div>
                <div className="Price-outerBox">
                    <input className="Price-input" name="code" type="text" ref="code" onChange={this.handleChange} onChange={this.update.bind(this)} />
                    <div className="Price-box">
                        <input className="Price-submit" id="sub" type="submit" onClick={this.testCode} value="Aktivera värdekoden" />
                    </div>
                </div>
            </div>
            </form>
  
         
         
        </div>
      );
    }
  }

  export default ValueCode;  