import React, { Component } from 'react';
import Footer from './Footer';
import createHistory from 'history/createBrowserHistory'
import Redsunset from './../images/begagnade_sportartiklar-reusesport.jpg';
import ReactGA from 'react-ga';
import './Faq.css'

const history = createHistory()
ReactGA.initialize('UA-140699741-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class Faq extends Component {


    render() {
        return (
            <div>
                
                <div className="About-pictureimg">
                    <img src={Redsunset} alt="Redsunset" />
                </div>
                <div lassName="content">
                    <div className="head">
                        <h1>FAQ</h1>
                        <p>Här hittar du frekvent frågade frågor</p>
                    </div>
                    <div className="body">
                        <div class="grid"> {/* stopppa fårga och svar här */}
                            <h3>Fråga: här</h3> 
                            <p>Svar: här</p>
                            <h3>Fråga: här</h3>
                            <p>Svar: här</p>
                            <h3>Fråga: här</h3>
                            <p>Svar: här</p>
                            <h3>Fråga: här</h3>
                            <p>Svar: här</p>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        )
    }

}

export default Faq;