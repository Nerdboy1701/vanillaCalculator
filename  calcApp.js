const boxes = Array.from(document.getElementsByClassName("box"));
const mathBox = Array.from(document.getElementsByClassName("boxMath"));
const displayBox = document.getElementById("displayBox");

//Logic for display on calculator

let displayNum;

// when numbers get pressed. This will most likely go in a function. 
displayNum = (displayNum * 10) + numPress;
 
// didplayed number being held until calculation gets made 
let numHold;

displayBox.innerText = `54321`;

