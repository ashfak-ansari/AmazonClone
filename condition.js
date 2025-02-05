// // 
// let num = prompt ("Enter the number");

// if (num % 5){
//     console.log ("Number is multiple" );
// } else{
//     console.log(" Number is not multiple");
// };

let score = prompt("Enter the marks");
let Grade;

if (score >= 90 && score<= 100){
   Grade = "A";
}
else if(score >= 70 && score<= 89){
   Grade = "B";
}
else if(score >= 60 && score<= 69){
    Grade = "C";
}
else if(score >= 50 && score<= 59){
    Grade = "F";
}


console.log("according to your scores, your grade was", Grade);
