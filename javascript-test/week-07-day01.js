let num = 3;
const numberString = '3';
const rain = false;
/*'Const' keeps a value the same without ever changing, 
'let' allows flexibility 'var' is old fashioned*/


console.log(num, numberString, rain);
console.log(typeof num, typeof numberString, typeof rain);
console.log(num + numberString);
console.log(typeof num);

/*when you want to compare use '===' can be applied to T/F coding situations.*/
if (rain === true) {
    console.log('Go to the gym.');
} else {
    console.log('Go for a walk.');
}


/* isEven determines whether a number that goes through it is even or not.
{} indicate declaring an object. (% or modulus)*/

num = 5;
console.log('MODULUS TEST FOR EVEN.', num % 2);
console.log('MODULUS TEST FOR EVEN.', (num % 2) === 0);

function evenOrOdd(value) {
    if ((value % 2) === 0) {
        console.log('The number ' + value + ' is even.');

    } else {
        console.log('The number ' + value + ' is even.');
    }

}
evenOrOdd(4);
evenOrOdd(15);


console.log('MODULUS TEST FOR EVEN.', (num % 2) === 0);
if ((num % 2) === 0) {
    console.log('The number ' + num + ' is even.');

} else {
    console.log('The number ' + num + ' is even.');
}



var app = {

    isEven: function (input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
};

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);