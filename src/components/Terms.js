import React from 'react';

import "./Terms.css";



class Terms extends React.Component {

   
    

    render() {
        return(
            <div className="terms">
                <div className="terms-title">Våra villkor</div>
                <div className="terms-subtitle">Mailadress</div>
                    <div>Din mailadress sparas för att du ska kunna lägga in annonser hos oss. </div>
                    <div>För att det bara ska vara du som ska kunna radera annonsen måste du logga in för att kunna radera annonsen.</div>
                    <div>Reuse Kids säljer inte några mailadresser vidare utan de används endast för inloggning och efter ert godkännade även för nyhetsbrev.</div>

                <div className="terms-subtitle">Telefonnummer</div>    
                    <div>Du väljer själv om du vill uppge ditt telefonnummer. Detta rekommenderas då det gör att det ger din köpare har lättare att komma i kontakt med dig.</div>
                
                <div className="terms-subtitle">Borttagning av annonser</div>    
                    <div>Om vi hittar annonser som inte innehåller sportartiklar eller som anses opassande så kommer vi att ta bort dem utan att först meddela annonsören. Annonskonstnaden kommer inte betalas tillbaka.</div>


                <div className="terms-subtitle">Försäljning av vapen</div>    
                    <div>Alla annonser som gäller andra vapen än tävlingsvapen kommer tas bort och en polisanmäla göras. Annonskonstnaden kommer inte betalas tillbaka.</div>


                <div className="terms-subtitle">Våra friskrivningar</div>  
                    <div>Vi friskriver oss allt ansvar för kvaliteten på produkterna som säljs via Reuse Kidss webbsida. Reuse Kids är endast förmedlare av annonsen och har inget ansvar för produkterna som säljs. är endast Köp ingenting utan att först kontrollera kvalitet och eventuella kvitton. </div>
                    <div>Reuse Kids garanterar inte att du kommer att få varan såld men vi kommer att göra vårt yttersta för att den ska bli såld. Ange när du lägger in annonsen att vi får använda din bild i marknadsföringen så kommer chansen att din vara bli såld att öka.</div>
                    <div></div>

                <div className="terms-subtitle">Annonstext</div>
                    <div>De data du anger i annonsen raderas när annonsen tas bort.</div>

                <div className="terms-subtitle">Bilder</div>    
                    <div>Med ditt godkännande kan vi använda dina bilder i vår marknadsföring för att öka chanserna att få din vara såld.</div>
            </div>
        )
    }    
}

export default Terms;