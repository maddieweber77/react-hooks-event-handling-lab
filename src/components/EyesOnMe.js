// Code EyesOnMe Component Here
import React from 'react'
function EyesOnMe() {
    function Focus() {
        console.log('Good!')
    };
    function Blur() {
        console.log('Hey! Eyes on me!')
    };
    return <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
}

export default EyesOnMe;




// import React from 'react'
// // Code Keypad Component Here
// function Keypad() {
//     function clickKeypad(){
//         console.log('Entering password...')
//     }
//     return (
//     <input type="password" onChange={clickKeypad} />
//     )

// }

// export default Keypad;