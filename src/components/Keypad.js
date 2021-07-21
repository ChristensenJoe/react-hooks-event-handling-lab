// Code Keypad Component Here

function Keypad() {
    function keypadOnChange() {
        console.log("Entering password...");
    }
    return (
        <input onChange={keypadOnChange} type="password" />
    )
}

export default Keypad;