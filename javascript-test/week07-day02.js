//function showMessage(text){
var showMessage = (message) => {

    console.log('========================');
    console.log('== ' + message + ' =====');
    console.log('========================');
}

showMessage('Operator Precedence');

let results = 1 + 2 * 3;
console.log(results);

//ORDER OF PRECEDENCE difference between having paranthesis and NOT 

results = (1 + 2) *3;
console.log(results);

//For Loops

showMessage('For Loops');

for ( let i = 10; i <= 26; i = i + 2){
console.log(i);
}

//While loops

showMessage('While Loops');

let looper = 10;

while (looper < 15) {
    console.log(looper++);
}
do {
    console.log(looper++);
    
} while (looper < 20);  