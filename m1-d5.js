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
let word = []
const upperFirst = function (string8){
   let afterSplitArray = string8.split(" ")
    
    for(let i = 0; i < afterSplitArray.length; i++){   
        
        let temp = afterSplitArray[i].split("")
            temp[0] = temp[0].toUpperCase()
            temp= temp.join("")
            word.push(temp)
        }
        word = word.join(" ")
        console.log(word)       
    }

upperFirst("is this really happening, i can't believe it")



headingTitle(9)


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
/* WRITE YOUR ANSWER HERE */

word = []
const cutString = function (string8){
        let temp = string8.split("")
            temp[0] = [""]
            temp[string8.length -1] = [""]
        word = temp.join("")
        console.log(word)       
    }

cutString("is this really happening, i can't believe it")

cutString("jonchhen")


headingTitle(10)

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
/* WRITE YOUR ANSWER HERE */
let newArray = [];
const giveMeRandom = function(n){
    for(let i = 0; i <  n; i++){
            newArray[i] = parseInt((Math.random() * 10))
          }
          return(newArray)
    }

giveMeRandom(10)
console.log(newArray)

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/



// Additional assignments for Day 5
headingTitle("Extra 1")
/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
/* WRITE YOUR ANSWER HERE */
let arrayBiggerThan5 = []
const checkArray = function(giveMeRandom(n)){
    let t = n
      arrayBiggerThan5.push(giveMeRandom(t))
console.log(arrayBiggerThan5)
}

checkArray(5)

headingTitle("Extra 2")
/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/
/* WRITE YOUR ANSWER HERE */



/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/