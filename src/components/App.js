import '../App.css';
import React from 'react';
import Header from './Header';
import InputNumber from './InputNumber';
import ThankYou from './ThankYou';

const App = () => {

    const phoneNumber = localStorage.getItem('phoneNumber');

    if(phoneNumber){
        return(
            <div align="center">
                <Header />
                <ThankYou/>
            </div>
        )
    }
    else{
        return(
            <div align="center">
                <Header />
                <InputNumber/>
            </div>
        )
    }
}

export default App;
