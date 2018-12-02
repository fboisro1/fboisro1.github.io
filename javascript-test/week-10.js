window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-display-action');
    const numbersAction = document.getElementById('numbers-action');
    objectLiteralAction.onclick =() => {
            //  alert('You clicked a button!'); gives us a pop up on our page.
            //
        //const displayString = 'you clicked a button!';    
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        

        console.log(objectLiteral.getName());

        objectLiteralDisplay.textContent = objectLiteral.getName();
    }

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        
        numbersDisplay.textContent = numbers;
        for (let number of numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }
        
    }

}

// ----Beneath window.onload 

const numbers = [2, 1, 3];
const strings = ['one', 'two', 'three']
const objectLiteral = {
    objectName: 'object literal is my name',

    getName: function (){
        return this.objectName;
    }
}