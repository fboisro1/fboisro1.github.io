window.onload = () => {

    const appearanceButton = document.getElementById('appearanceAction');
   // const otherButton = document.getElementById('otherButtonAction');

    appearanceButton.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(defaults);
        enableStylesheet(basic);
    }

  /*  otherButton.onclick = () => {
        const defaults = document.getElementById('default1');
        const basic = document.getElementById('basics1');

        disableStylesheet(defaults);
        enableStylesheet(basic);
    }*/

}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}                
 