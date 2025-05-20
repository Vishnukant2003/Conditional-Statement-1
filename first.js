let age = 50;
 if(age>=18) {
        console.log("You are eligible to vote");
 }
 console.log("Thank you");

 // given number is positive

 let num = 0;
 if(num>0){
     console.log("Number is positive");
 }else if(num==0){
     console.log("Number is zero");
 }
// prompt & conditional statement
 let percentage = 80; //prompt("Enter your percentage");

 if(percentage>=90){
     console.log("Grade A");

 }else if(percentage>=80){
     console.log("Grade B");

 }else if(percentage>=70){
     console.log("Grade C");
 }else if(percentage>=60){
     console.log("Grade D");
 }else{ 
     console.log("Grade E");
 }


//  let language = prompt("Enter your language");

//  if(language=="marathi"){
//      console.log("Ram Ram ");    
//  }else if(language=="hindi"){
//      console.log("Namaste");
//  }else if(language=="english"){
//      console.log("Hello");
//  }else{
//      console.log("Invalid language");
//  }
  
 let number = 5;
// Given number is even or odd --> % gives remainder
if(number%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}


let fizzBuzz = 15;
if (fizzBuzz%3==0 && fizzBuzz%5==0){
    console.log("given number is divisible by 3 and 5")
}
else if(fizzBuzz%3==0){
    console.log("Fizz");

}else if(fizzBuzz%5==0){
    console.log("Buzz");

}