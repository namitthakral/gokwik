import React from 'react';
import whatsapp from '../images/whatsapp.png';
import card from '../images/card.png';
import cancel from '../images/cancel.png';
import gokwik from '../images/gokwik.png';

const ThankYou = () => {
    
    const clear = () => {
        localStorage.clear();
    }
    return(
        <div className='thankyou'>
            <p>
                <img id='whatsapp' src = {whatsapp} alt='whatsapp'/>
                <b>Where will I get the gift card?</b><br />
                You will receive it on Whatsapp/SMS on your mobile.
            </p>
            <p>
                <img id='card' src = {card} alt='card'/>
                <b>When will I receive the gift card?</b><br />
                Within 48 hours, when your Man Matters order is delivered.
            </p>
            <p>
                <img id='cancel' src = {cancel} alt='cancel'/>
                <b>What if I cancel the order?</b><br />
                The voucher will not be delivered if you cancel the order.
            </p>
            <img src = {gokwik} alt='gokwik'/>
            <br/>
            <button onClick={clear}>Clear Local Storage</button>
        </div>
    );
}

export default ThankYou;