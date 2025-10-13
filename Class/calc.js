const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans;

r1.question("Enter your Grade: ", function (num1) {
  r1.question("Is homework Done? (yes/no) ", function (num2) {
    
    console.log(num1*num2);
    console.log(num1/num2);
    console.log(num1-num2);
    console.log(parseInt(num1)+parseInt(num2));

    r1.close();
  });
});

// let score = 90;
// let isHomeworkDone = true

// if(isHomeworkDone){
//     score = score + 10
//     // score += 10
// } else {
//     score -= 10
// }

// if(score >= 95){
//     console.log("A+");
// } else if(score >= 90){
//     console.log("A")
// } else if(score >= 80){
//     console.log("B")
// } else if(score >=65){
//     console.log("C")
// } else{
//     console.log("YOU FAIL");
// }