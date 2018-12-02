window.onload = () => {

const simpleObject = {
    sayName: 'Simple Object.',
    dynamicMethod: 'Dynamic Method'

},

dynamicMethod: function (){}

simpleObject.fullName = function () {
    return this.sayName;
};

simpleObject.newMethod = function (){
    return this.dynamicMethod;
};

console.log(simpleObject.sayName);
console.log(simpleObject.dynamicMethod);

}

/* Outside the object declaration, use dot notation to add another method called dynamicMethod. 
    It should print out its own name: "Dynamic Method". At the bottom of the file, call the method.
    Here's a hint. 
    The declaration for the method declared outside the object declaration will look something 
    like objectName.methodName = ....) */







