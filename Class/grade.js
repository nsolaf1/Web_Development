const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans;

r1.question("Enter your Grade: ", function (grade) {
  r1.question("Is homework Done? (yes/no) ", function (homework) {
    let score = grade

    if( homework == "yes"){
        score += 10
    } else{
        score -= 10
    }
    console.log(score)

    if (score >= 95) {
      console.log("A+");
    } else if (score >= 90) {
      console.log("A");
    } else if (score >= 80) {
      console.log("B");
    } else if (score >= 65) {
      console.log("C");
    } else {
      console.log("YOU FAIL");
    }
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
