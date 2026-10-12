// let name = "Askar";

// console.log(name)


// function greet(name, age){
//     console.log("Hello " + name + " age: " + age)
// }

// greet("Askar", 15)



function multi(x,y){
    console.log("hello World");
    return x * y; 
    
}
function div(x,y){
    return x / y; 
}
function add(x,y){
    return x + y; 
}
function sub(x,y){
    return x - y; 
}

let num1 = 10;
let num2 = 0;
let oper = "/"
let result = 0;

if(oper === "*"){
    console.log(multi(num1, num2));
}else if(oper === "/"){
    console.log(div(num1, num2));
}else if(oper === "+"){
    console.log(add(num1, num2));
}else if(oper === "-"){
    console.log(sub(num1, num2));
} else {
    console.log("Error oper")
}



 