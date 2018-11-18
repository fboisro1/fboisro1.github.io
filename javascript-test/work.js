
/*const person = {};
person.firstName = 'Sefu';
person.lastName = 'Kaba';
person.fullName = person.firstName + ' ' + person.lastName;

console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)

const calculator = {};*/
function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

//Person 
const person = {
    firstName: 'Sefu',
    lastName: 'Kaba',
    fullName: function () {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

//Calculator

const calculator = {
    operand01: 4,
    operand02: 4,
    add: function () {
        'use strict';
        return this.operand01 + this.operand02;

    },

    multiply: function () {
        'use strict';
        return this.operand01 * this.operand02;
    },

    divide: function () {
        'use strict';
        return this.operand01 / this.operand02;
    }


};


calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;


divider('Person');
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
divider('Calculator');
console.log('operand01 =', calculator.operand01);
console.log('operand02 =', calculator.operand02);
console.log('Add =', calculator.add());
console.log('Multiply =', calculator.multiply());
console.log('Divide =', calculator.divide());
//console.log(calculator.operand01);
//console.log(calculator.operand02);
//console.log(calculator.add());
//console.log(calculator.multiply());
//console.log(calculator.divide());