// var userString = prompt("Type in your message");
// var countLetters = (userString.length) - 50;

// var userDisplay = alert("You have "+userString.length+ " charecters and "+countLetters+" charecters left!");

// var userSlice = userString.slice(0,50);
// alert("Your modified string is "+userSlice.toUpperCase()+" !");
//-----------------------------------------------------------//
//capitalising the first letter 
/*
var name = prompt("enter your name");
var cap = name.slice(0,1).toUpperCase();
var lowerRest = name.slice(1,).toLowerCase();
alert("Hello "+ cap + lowerRest +" !");  */

//-------------------------------------------------//
// Dog age to Human age Converter 
/*
var dogAge = prompt("Enter Dog Age");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("When Dog Age is "+dogAge+ " & Human Age is "+humanAge); 
*/

//-----------------------------------------------------------//
//How mamy bottles of milk can you get for the money 
// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var bottles = 2;
//   console.log("Buy "+Math.floor(money/bottles)+" bottles of Milk");

//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }
// getMilk(11);
//--------------------------------------------//
/*
function bmiCalculator(weight, height)  {
    var bmi = weight/(height*height);
    var bmiWhole = Math.floor(bmi);
    return bmiWhole;
}
var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);
*/
// ------------DICE LOGIC -------------------- //
/*
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
*/
//----------------Love Score------------------//

/* 
var lover1 = prompt("Enter your Name");
var lover2 = prompt("Enter your Crushes Name  💓");
var match = Math.random() * 100;
match = Math.floor(match) + 1;
alert("Love match between "+ lover1 +" and "+ lover2 +" is "+ match +"%");
*/

//----------BMI Calculator--------------------//
/* 
function bmiCalculator (weight, height) {
    var interpretation = (weight/(Math.pow(height, 2)));
    if(interpretation < 18.5)
    {
        console.log("Your BMI is " + interpretation + ", so you are underweight.");
    } 
else if(interpretaion > 18.5 && interpretation < 24.9) {
        console.log("Your BMI is " + interpretation + ", so you have normal weight");
    }
else if(interpretaion > 24.9) {
        console.log("Your BMI is " + interpretation + ", so you are overweight");
    }

    return interpretation;
}

bmiCalculator(60,2); 
*/
//================Leap Year===================//
/* 
var year = 2016 ;
if(((year % 4)==0) && ((year % 100)!==0) || ((year % 400) == 0))
{console.log("It is a leap year");}
else {
  console.log("It is not a leap year")
}
*/
//----------------FIZZ BUZZ -----------------//
/*
var output = [];
var count = 1;
function fizzBuzz(){
  
  while(count <= 100) {
  if(count % 3 == 0 && count % 5 == 0){
    output.push("FizzBuzz");
  }
  else if(count % 3 == 0)  {
    (output.push("fizz"))
    }
  else if(count % 5 == 0) {output.push("buzz")}

  else {output.push(count);}
  count++;
  }
  console.log(output)

}
fizzBuzz();
*/
// ========Who's Paying For lunch========//
/*  

function whosPaying(names) {    
     var n = Math.random();
    n = n * names.length;
    n = Math.floor(n);
    return (names[n])+" is going to buy lunch today!";
}
console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chole"]));

*/
// ---------->99 Bottles Of Beer --------------//
/*  
var count = 99;
while(count >= 0){
  
  if(count == 1){
    console.log(count+" bottles of beer on the wall, count bottles of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  }   else if((count) == 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some, 99 bottles of beer on the wall");
  }       else {
            console.log(count+" bottles of beer on the wall,"+ count +" bottles of beer.");
             console.log("Take one down and pass it around, "+(count -1)+" bottles of beer on the wall.");
  }
  count--;
}

*/
// ========== Fibonacci Generator ========== //
/* function fibonacciGenerator (n) {
 var output = [];
  for(var i = 0; i < n; i++){
        i = i + i;
        console.log(output.push[i])
    }
}
fibonacciGenerator (5);
*/
//============== Higher Order Function =============//
/*
function add(num1, num2){return num1 + num2;}
function multiply(num1, num2){return num1 * num2;}
function calc(num1, num2, operator){
  return operator(num1, num2);
}
calc(1, 2, add)
*/
//========== Call backs wih Event Listener ===========//
