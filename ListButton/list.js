window.onload = () =>{
    const setTextButton = document.getElementById('set-text');
    const userInput = document.getElementById('list-data');
    const listButton = document.getElementById('add-to-list'); 
    
    listButton.onclick = ()=>{
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }
    setTextButton.onclick = () => {
        userInput.value = 'The First Item for my List';
        
        }
    }
    

