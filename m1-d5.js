/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/
const headingTitle = function(exercise){
    console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>','Excercise', exercise ,'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
}
headingTitle(1)

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
/* WRITE YOUR ANSWER HERE */
let areaContainer = function(length,breadth){
    return length * breadth
}

let area = areaContainer(10,20)
console.log(area)


headingTitle(2)
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
/* WRITE YOUR ANSWER HERE */
const crazysum = function(number1, number2){
    if(number1 === number2){
        
        return (number1 + number2) 
    } else {
        
        return  ((number1 + number2) * 3)
    }
}

let sum = crazysum(5,15)

console.log(sum)

headingTitle(3)
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
/* WRITE YOUR ANSWER HERE */
const crazydiff = function(number){
    if(number > 19) {
        return ((number - 19)*3)
    } else{
        return (19 - number)
    }
}
let difference = crazydiff(30)

console.log(difference)


headingTitle(4)
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
/* WRITE YOUR ANSWER HERE */
const boundary = function(n){
    if( typeof n === 'number'){
        if(n>=20 && n <= 100){
            return true
         }       else
            return ("it is equal to 400")

        } else
            return ('wrong input it is not a number')
    }

let answer = boundary(165)
answer = boundary('a165')
console.log(answer)

headingTitle(5)
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
/* WRITE YOUR ANSWER HERE */

const strivify = function(aString){

    let striveTester = aString.slice(0,5)

        if(striveTester.tolower !== 'strive'){
            return ('Strive ' + aString)
        }
         else   {
             return (aString)
         }
            
    
        
}
answer = strivify('Strive is Programming School')
console.log(answer)


headingTitle(6)
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
/* WRITE YOUR ANSWER HERE */

const check3and7 = function (inputNumber){

    if ( typeof inputNumber === 'number' && inputNumber > 0){
        if(inputNumber%3 === 0 && inputNumber%7 === 0){
            return ( inputNumber, 'is multiple of 3 and 7')
         } else if(inputNumber%3 === 0) {
            return( inputNumber,'is multiple of 3 but not 7')
          }else if(inputNumber%7 === 0){
            return( inputNumber, 'is multiple of 7 but not 3')
        } else{
            return( inputNumber, 'is not a multiple of 7 or 3')
        }
    } else {
        return ("It is not a positive number")
    }
}

answer = check3and7(21)
console.log(answer)
answer = check3and7(30)
console.log(answer)
answer = check3and7(14)
console.log(answer)
answer = check3and7('a')
console.log(answer)
answer = check3and7(13)
console.log(answer)


headingTitle(7)
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
/* WRITE YOUR ANSWER HERE */
let answerArray = []
const reverseString = function(exString){
    answerArray =  exString
    for (let i = 0; i <  (answerArray.length)/2 ; i++){
        temp = answerArray[i]
        answerArray[i] = answerArray[answerArray.length - 1 - i]
        answerArray[answerArray.length - 1 - i] = temp
    }
    
}
reverseString("What is your name !")
console.log(answerArray)



headingTitle(8)
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/