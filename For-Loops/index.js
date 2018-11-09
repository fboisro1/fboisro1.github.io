window.onload = () => {

    const listButton = document.getElementById('run-for-loop');
    /*getElementById calls a specific element by name, example "I want to grab *example*
    and I want it to do .... " it returns a value and we save it in the variable list button. */



    listButton.onclick = function () {
        const myList = document.getElementById('my-List');
        // WRAP THE NEXT LINE IN A for-loop that iterates over a variable named i. 
        // The loop should iterate 5 times (count from zero to five).
        // i++ =,  i = i + 1
        //for ( let i = 0; i <= 5; i = i + 1){
        for (let i = 0; i < 5; i++) {
            elfCode.appendToList(myList, i);
        }
        // END LOOP
    }
}  