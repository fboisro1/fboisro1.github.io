window.onload = () => {
    
    const functioncalls = document.getElementById("function-calls");
    
    
    functioncalls.onclick = () => {
        simpleFunction();
        functionParameters("Many functions take parameters.");
        // GET ELEMENT AND SET TEXT CONTENT FOR 'functionReturn();' ASSIGNMENT
        // Next assignment is on (Objects);.
        functionReturn();
        const returnValue = functionReturn();
        console.log(returnValue);
        
    }
    
}


function simpleFunction() {
    const displayText = "Functions should consist of statements designed to perform a single task."
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;

}
function add(a, b) {
    console.log(a + b);
}

function adder() {
    console.log(2 + 3);
}

function functionParameters(value) {
    const functionParametersParagraph = document.getElementById("function-parameters");
    console.log(value);
    functionParametersParagraph.textContent = value;
}

function functionReturn(){
    return "Many function return values.";
}



// simpleFunction();
//functionParameters("Many functions take parameters.");
add(2, 3);
//add(4,9);
adder();
