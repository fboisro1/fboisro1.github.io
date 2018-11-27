window.onload = () =>{
    
    const myForm = document.getElementById('sort-type');

    /*addEventListener when there is a submit event on myform send an event to */

    myForm.addEventListener('submit', (event) => {

        /* event.preventDefault(); prevents the page from doing what it normally does in populating another page. */
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'language') {
            showChoice(value);
        } else {
            showChoice(value);
        }
       /* if (value.toLowerCase() === 'status') {
            showChoice(value);
        } else {
            showChoice(value);
        }*/

    });
    
}

function showChoice(value) {

   // alert(value);
    console.log(value);
    const userDispaly = document.getElementById('user-choice');
    userDispaly.textContent = value; 
}