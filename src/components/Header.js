import React from 'react';
import coupon from '../images/giftcard.png';
import logo from '../images/pic.png';
import party from '../images/party.png';

const Header = () => {
    return(
        <div className="header">
            <div className="greetings">
                <img src = {logo} alt='logo'/>
                <br />
                <b>Congratulations</b>
                <img id='party' src = {party} alt='party'/>
            </div>
            <br/>
            <img src = {coupon} id="coupon" alt='coupon'/>
        </div>
    )
}

export default Header;