import React from 'react'
// Code Keypad Component Here
function Keypad() {
    function clickKeypad(){
        console.log('Entering password...')
    }
    return (
    <input type="password" onChange={clickKeypad} />
    )

}

export default Keypad;