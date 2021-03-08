import React from 'react';
import gokwik from '../images/gokwik.png';

const InputNumber = () => {

    const [number,setNumber] = React.useState('');

    const handleChange = (e) => {
        if(e.target.value === ''){
            document.getElementById("phone").style.letterSpacing='0px';  
            document.getElementById("phone").style.fontSize='13.33px';
            document.getElementById("phone").style.fontWeight='normal'; 
        }
        else{
            document.getElementById("phone").style.letterSpacing='2px';
            document.getElementById("phone").style.fontSize='17px';
            document.getElementById("phone").style.fontWeight='bold';
        }
        const exp = new RegExp("^(?=[6-9]{1}[0-9]{9})");
        setNumber(e.target.value);
        if(exp.test(e.target.value)){
            document.getElementById("voucher").disabled=false;
        }
        else{
            document.getElementById("voucher").disabled=true;
        }
    }

    const handleClick = () => {
        localStorage.setItem('phoneNumber', number);
    }

    return(
        <form onSubmit={handleClick}>
            <div className='number'>
                <p>You have WON Paytm Gift Card of Rs 200 for <b>placing the order on Man Matters</b></p>
                <input type='text' value={number}  placeholder='Enter Mobile Number' id='phone' maxLength='10' onChange={handleChange} /><br/>
                <b id='disclaimer'>Enter the same number used on Man Matters</b><br/><br/>
                <button type="submit" id='voucher' disabled>Wow! Get My Paytm Gift Card</button>
            </div>
            <br/>
            <img src = {gokwik} alt='gokwik'/>
        </form>
    );
}

export default InputNumber;