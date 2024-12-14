function add(num1, num2) {
    const sum = num1 + num2;                                  //tio said sth abt math.log??
    return sum;
}

/*  FUN DEFINATION
function funName(parameter1, 2) {
   code to execute
    return someValue;
}
*/

function subtract(num1, num2) {                       //did the same for sub,mult,div
    const difference = num1 - num2;
    return difference;
}

function multiply(num1, num2) {
    const product = num1 * num2;
    return product;
}

function divide(num1, num2) {
  if( num2==0){                       //error
    return "Error:division by 0"  
  }
    const quotient = num1 / num2;
    return quotient;
    
}

function power(num1, num2) {
  const power = num1**num2;                                  
  return power;
}

function log(num1, num2) {
                                   //tio said sth abt math.log??
  return Math.log(num1)/Math.log(num2);
}

function mod(num1,num2){
  const remainder = num1%num2;
  return remainder;
}
let firstNumber = 0;          // VARIABLE INITIALIZATION- let variableName = initialValue 
let secondNumber = 0;
let selectedOperator= "";   //



const firstNumberElement = document.getElementById("first-number");   //getting elements (num 1)from DOM

firstNumberElement.addEventListener("change", function (){         //adding an event listener for 1st num
    console.log("first number type"+ typeof this.value);
    firstNumber = parseInt(this.value);
});

const secondNumberElement = document.getElementById("second-number");   //getting num2

secondNumberElement.addEventListener("change", function () {         //adding eventlistener
  secondNumber = parseInt(this.value);
});

/*  

GETTING ELEMENTS FROM DOM:
const element = document.getElementById("element-id")

ADDING EVENT LISTENER:
element.addEventListener( "event-type",function(){
    code to execute when the event occurs
}  )

*/

 const addButtonElement = document.getElementById("add-button");   //getting button

 addButtonElement.addEventListener("click", function () {                  //adding eventlistener
   // const h1Element = document.createElement("h1");                        //creating h1 element to display result
   // h1Element.innerHTML  = "result: " + add(firstNumber, secondNumber);   //setting innerhtml and calling the add function we defined earlier
   // document.getElementById("selected operator").innerHTML="+";              // **fr span, mehal lay sign endiyasay(only added line)
   // document.body.appendChild(h1Element);                                 //adding the new h1 element to the document

   selectedOperator = "+" ;
   document.getElementById("selected-operator").innerHTML= selectedOperator;
 });   

 const subtractButtonElement = document.getElementById("subtract-button");              //do z same lekerut

 subtractButtonElement.addEventListener("click", function () {    
    //const h1Element = document.createElement("h1");
    //h1Element.innerHTML  = "result: " + subtract(firstNumber, secondNumber);
     //document.getElementById("selected operator").innerHTML="-"; //
    // document.body.appendChild(h1Element);

    selectedOperator = "-" ;
   document.getElementById("selected-operator").innerHTML= selectedOperator;

 });   

 

 const multiplyButtonElement = document.getElementById("multiply-button");  

 multiplyButtonElement.addEventListener("click", function () {    
    //const h1Element = document.createElement("h1");
    // h1Element.innerHTML  = "result: " + multiply(firstNumber, secondNumber);
     //document.getElementById("selected operator").innerHTML="*"; //
     //document.body.appendChild(h1Element);
 
     selectedOperator = "*" ;
   document.getElementById("selected-operator").innerHTML= selectedOperator;
    });


    const divideButtonElement = document.getElementById("divide-button");   

 divideButtonElement.addEventListener("click", function () {    
    // const h1Element = document.createElement("h1");
   // h1Element.innerHTML  = "result: " + divide(firstNumber, secondNumber);
     //document.getElementById("selected operator").innerHTML="/";  //
    // document.body.appendChild(h1Element);

    selectedOperator = "/" ;
   document.getElementById("selected-operator").innerHTML= selectedOperator;
});  

const powerButtonElement = document.getElementById("power-button");   

powerButtonElement.addEventListener("click", function () {    
  
  selectedOperator = "**" ;    // bezi^ ayseram
  document.getElementById("selected-operator").innerHTML= selectedOperator;
}); 

const logButtonElement = document.getElementById("log-button");   

logButtonElement.addEventListener("click", function () {    
  
  selectedOperator = "log" ;
  document.getElementById("selected-operator").innerHTML= selectedOperator;
}); 

const modButtonElement = document.getElementById("mod-button");   

modButtonElement.addEventListener("click", function () {    
  
  selectedOperator = "%" ;
  document.getElementById("selected-operator").innerHTML= selectedOperator;
}); 


   //evaluate button endisera:   
 const evaluateButtonElement = document.getElementById("evaluate-button");

 evaluateButtonElement.addEventListener ("click", function(){
   // const h1Element = document.createElement("h1");
   // h1Element.innerHTML = "result:" +   (firstNumber,secondNumber);  // + blo mn operation ygba?? lehulum leyebcha meserat alebet??
   // document.body.appendChild(h1Element);          //ayseram endezi

   let result;
   switch(selectedOperator){
    case "+": result=add(firstNumber,secondNumber);
    break;
    case "-": result=subtract(firstNumber,secondNumber);
    break;
    case "*": result=multiply(firstNumber,secondNumber);
    break;
    case "/": result=divide(firstNumber,secondNumber);
    break;
    case "**": result=power(firstNumber,secondNumber);
    break;
    case "log": result=log(firstNumber,secondNumber);
    break;
    case "%": result=mod(firstNumber,secondNumber);
    break;
    default: result="select an operator";
   }
   document.getElementById("result").innerHTML="Result: "+ result; 

 });


 //A statement in programming is a single line of code that performs a specific action. For example, let x = 5; is a statement that declares a variable x and assigns it the value 5.
 //A switch statement is a control structure that allows you to execute different blocks of code based on the value of a variable or expression. It's like a series of if-else statements but more organized and easier to read. Here's a simple example:
 //The break statement in a switch statement stops the code from running into the next case. Without it, all the following cases will execute, even if a match is found.
 //?typo errors !! selected-operator vs selectedOperator,  id name vs variable dce alw??