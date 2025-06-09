//answer 1
function scope(){
    {
    let x="let variable i am inside only";
    var y="var variable i am global";
    const z="const i am inside only ";
    console.log("inside the block")
    console.log(x);
    console.log(y);
    console.log(z);
    }    
    console.log("outside the block");
    // console.log(x);  //error in this due to outside block 
    console.log(y);
    // console.log(z); //same error or reference error
}
scope();

//answer 2
let fruits = ["Apple", "Banana", "guavava", "Mango", "Orange","strawberry"];
function se(){
    console.log(fruits[1]);
}
se();

//answer 3

function newarray(arr) {
  arr.push(45);  
  arr.pop();                
  return arr;              
}
let arr = [1, 2, 3];
let result = newarray(arr);
console.log("new Array is:", result);

//answer 4
let num = [1,2,3,4,5,45,67,99];
function sqrnum(arr) {
  return arr.map(n => n * n);    //generally it is used for returning new array without changing original array
}
console.log(sqrnum(num));

//answer 5
function oddnums(arr) {
  return arr.filter(function(n) { // select or return only few elements that matches a condition
    return n % 2 !== 0;
  });
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
let j = oddnums(numbers);
console.log(j); 

//answer 6
let person = {
  name: "Mayank",
  age: 28,
  occupation: "Teacher"
};
function greet(person) {
  console.log(`Hellooo My name is ${person.name}. I am ${person.age} years old and i am currently working as a ${person.occupation}.`); 
}
greet(person);

//answer 7
function Area(r) {
  return r.width * r.height;
}
let Rect = { width: 28, 
               height: 40 };
console.log(Area(Rect)); 

//answer 8
function ObjKeys(obj) {
  return Object.keys(obj);
}
let Obj = { name: "Mayank", age: 28, city: "Jaipur" };
console.log(ObjKeys(Obj)); 

//answer 9
function mrgObj(a,b) {
  return Object.assign({},a,b);
}
let O1 = { name: "Mayank", age: 25 };
let O2 = { occupation: "Teacher", age: 28 };
console.log(mrgObj(O1,O2));

//answer 10
let nums = [5,10,15,20,25];
const sumArray = arr => arr.reduce((a, b) => a + b, 0); // a is accumulator initialized with 0 and b is current element
console.log(sumArray(nums));

