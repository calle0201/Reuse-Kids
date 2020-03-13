import Redsunset from './../images/begagnade_sportartiklar-reusesport.jpg';
import React, { Component } from 'react';
import Footer from './Footer';
import './Faq.css';




class Faq extends Component {
render() {
    return (
        <div>

            <div className="About-picture">
             <div className="About-pictureimg">
                 <img src={Redsunset} alt="Redsunset" />
            </div> 
        </div>

        <div className="Faq">

     <h1 className="Faq-title">Frågor och svar</h1>
    
            <div className="Faq-box">
                <div className="Faq-question">
                    Vad skiljer ReUse kids ifrån Blocket och liknande sidor?
                </div>
                <div className="Faq-answer">
                    Idén är den samma men i och med att vi endast inriktar oss mot begagnade barn produkter är det mycket lättare att hitta det mansöker hos oss.
                </div>
                <div className="Faq-question">
                    Varför valde ni att göra en ny sida för just barn produkter? 
                </div>
                <div className="Faq-answer">
                    
                </div>
                <div className="Faq-question">
                    Har ni någon fysisk butik?
                </div>
                <div className="Faq-answer">
                    Nej, vi har ingen fysisk butik.
                </div>
                <div className="Faq-question">
                    Vilka webbläsare är bäst att använda?
                </div>
                <div className="Faq-answer">
                    Du bör använda dig av de stora webbläsarna Chrome, Safari, Firefox och Opera.
                </div>
                <div className="Faq-question">
                    Varför måste jag skapa ett konto?
                </div>
                <div className="Faq-answer">
                    Det är för att du ska kunna logga in och se vilken utrustning du har annonser på. Och för att du ska kunna ta bort annonsen när utrustningen är såld.
                </div>
                <div className="Faq-question">
                    Varför måste jag ange samma mailadress vid annonsen som jag registrerat mig med?
                </div>
                <div className="Faq-answer">
                    Det är för att annonsen kopplas till ditt konto med     mailadressen.
                </div>
                <div className="Faq-question">
                    Hur tar jag bort min annons?
                </div>
                <div className="Faq-answer">

                </div>
                <div className="Faq-question">
                    Jag kan inte hitta min annons, vart är den?
                </div>
                <div className="Faq-answer">
                    
                </div>
            </div>
        </div>
    <Footer />
</div>
);
}
}

export default Faq;
