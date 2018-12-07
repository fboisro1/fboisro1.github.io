window.onload = () => {

    const otherButton = document.getElementById('otherButtonAction');
   
     otherButton.onclick = () => {
           const defaults = document.getElementById('default1');
           const basic = document.getElementById('basic1');
   
           disableStylesheet(defaults);
           enableStylesheet(basic);
       }
   
   }
   
   function enableStylesheet (node) {
       node.rel = 'stylesheet';
       }
       
   function disableStylesheet (node) {
       node.rel = 'alternate stylesheet';
   }                
    