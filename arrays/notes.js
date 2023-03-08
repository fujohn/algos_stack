///////////////////////////////// Intro //////////////////////////////

var myArr = [];
console.log(myArr.length); // -> "0"

myArr[0] = 42; // myArr == [42], length==1
console.log(myArr[0]); // -> "42"

myArr[1] = "hi"; // myArr == [42,"hi"], length==2
myArr[2] = true; // myArr == [42,"hi",true], length==3

myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // -> "5"

myArr[0] = 101; // myArr == [101,"hi",true,undefined,2]
myArr[3] = "MG"; // myArr == [101,"hi",true,"MG",2]

myArr.pop(); // myArr == [101,"hi",true,"MG"]
console.log(myArr.length); // -> "4"
myArr.push("dat"); // myArr == [101,"hi",true,"MG","dat"]
console.log(myArr.length); // -> "5"
