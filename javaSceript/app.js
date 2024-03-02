// alert("Hello JavaScript");
// console.log("Hello JavaScript");

// var person = "Zaid";

// var 10person  (illegal)
// var person10 (legal)
// var person-1 (illegal)
// var person_1 (legal)
// var $person (illegal)
// var pe%rson (illegal)
// var pe!rson (illegal)
// var pe*rson (illegal)
// var person name (illegal)
// var alert (illegal)

// var firstPersonName = "zaid";

// var marks = 75;
// alert(marks);

// var marks = 85;
// alert(marks);

// var a = 10;
// var b = 20;
// var c = 40;
// var d = 60;

// console.log(a + b - c * d);

// var a = 10;
// // var b = a + 1;
// var b = ++a;
// console.log(b, "B value");
// console.log(a, "A value");

// var a = 10;
// var b = "20";
// var c = a * b;

// console.log(c);

// var userName = prompt("Enter Your Name");
// var age = prompt("Enter Your Age");
// console.log(userName, age);

// var a = 10;
// a = 20;
// console.log(a);

// var a;
// a = 20;

// var age = prompt("Enter Age");
// age = Number(age);
// console.log(age);

// var age = 15;
// var studentCard = true;

// if (age >= 18) {
//   console.log("Allow");
// } else {
//   if (studentCard == true) {
//     console.log("allow on Student Card");
//   } else {
//     console.log("Not Allow");
//   }
// }

// if (age >= 18) {
//   console.log("Allow");
// } else if (studentCard == true) {
//   console.log("allow on Student Card");
// } else {
//   console.log("Not Allow");
// }

// == , === equal to
// != , !== not equal to
// > greater than
// < less than
// <= less than equal to
// >= greater than equal to

// var age = 10;
// var cnic = true;
// var studentCard = true;

// if (age >= 18 && cnic == true) {
//   console.log("Allow");
// }

// if (age >= 18 || studentCard == true) {
//   console.log("Allow");
// }

// var a = "A";
// var b = "B";

// var arr = ["A", "B", "C", "D", "E"];

// console.log(arr);

// arr[2] = 12;

// console.log(arr);

// arr[5] = "D";

// console.log(arr);
// arr.push("D");
// arr.pop();

// arr.shift();
// arr.unshift("1");

// var a = arr.slice(1, 4);

// var a = arr.splice(2, 0, "1", "2", "3", "4");
// console.log(a);
// console.log(arr);

// var a = ["abc", "kjl", "yut", "omn", "abc", "mno", "xyz"];
// var b = [1, 2, 3, 4, 5];

// var i = a.indexOf("qwe");
// console.log(i);

// var i = a.indexOf("qwe");
// if (i != -1) {
//   console.log("Word Found");
// } else {
//   console.log("Word Not Found");
// }

// var count = a.length;
// console.log(count);

// var lastIndex = count - 1;
// console.log(a[lastIndex]);

// var lastElement = a.slice(-1);
// console.log(lastElement);

// var rev = a.reverse();
// console.log(rev);

// var combineLetters = a.join("");
// console.log(combineLetters);

// var combineArray = a.concat(b);
// console.log(combineArray);
// console.log(a);
// console.log(b);

// var existing = a.includes("xyz");
// console.log(existing);

// var i = a.lastIndexOf("abc");
// console.log(i);

// var a = ["abc", "kjl", "yut", "omn", "abc", "mno", "xyz"];
// var b = "mno";

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 5; j++) {
//     console.log(i, j);
//   }
// }

// var a = ["A", "B", "C", "D", "E"];
// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// output will be like
// ["1A", "1B", "1C", "1D", "1E", "2A", "2B", "2C"  .....   "9E"];

// var a = "Karachi";
// a = a.toLowerCase();

// var b = prompt("Enter City Name");
// b = b.toLowerCase();

// if (a == b) {
//   console.log("City Matched");
// }

// var arr = ["Karachi", "Islamabad", "Lahore", "Multan"];
// var a = prompt("Enter City");
// a = a.toLowerCase();

// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].toLowerCase();
//   console.log(arr[i]);
// }

// var a = "HARIS";
// var letter1 = a.slice(0, 1);
// letter1 = letter1.toUpperCase();

// var otherLetters = a.slice(1);
// otherLetters = otherLetters.toLowerCase();

// var word = letter1 + otherLetters;
// console.log(word);

// var a =
//   "Lorem ipsum dolor sit amet, consectetur Saturday adipisicing elit. Autnihilsimilique error fugiat quo atque numquam aspernatur. Saturday velomnis veniam laborum repudiandae? Dolor fugiat quis provident nostrum ab.";

// var word = "Saturday";
// var secondWord = "kal chhhutti hai";

// var i = a.indexOf("Saturday");
// console.log(i);

// var startingText;
// var endingText;
// startingText = a.slice(0, i);
// endingText = a.slice(i + 8);
// a = startingText + secondWord + endingText;

// for (var i = 0; i < a.length; i++) {
//   var checkLetter = a.slice(i, i + 8);
//   console.log(checkLetter);
//   if (checkLetter == word) {
//     console.log(checkLetter, i);
//     startingText = a.slice(0, i);
//     endingText = a.slice(i + 8);
//     console.log(startingText);
//     console.log(endingText);
//     a = startingText + secondWord + endingText;
//     break;
//   }
// }

// var txt = "[abc][kjl][132][tu2]";

// a = a.replace(/Saturday/g, secondWord);

// console.log(a);

// var pass = "a32s1da2s1d32asd";
// console.log("*".repeat(pass.length));

// var a = 3.5;
// var b = Math.round(a);
// console.log(b);

// var a = 45.1;

// var b = Math.ceil(a);

// console.log(b);

// var a = 16.6;
// var b = Math.floor(a);

// console.log(b);

// var a = Math.random();

// var b = Math.round(a);
// console.log(a, b);

// 0.0000000000000000

// 0.9999999999999999

// var a = "100.99";

// var b = Number(a);
// var b = parseInt(a);
// var b = parseFloat(a);
// var b = +a;

// console.log(b + 33);
// var a = 100.99;
// var b = a.toString();
// console.log(b);

// var a = 34.349;
// console.log(a * 2000);

// var b = a.toFixed(2);
// console.log(b * 2000);

// var currentDate = new Date();

// currentDate.setDate(15);
// console.log(currentDate.getDate());

// currentDate.setFullYear(2024);
// console.log(currentDate.getFullYear());

// currentDate.setMonth(2);
// console.log(currentDate.getMonth());

// currentDate.setHours(4);
// console.log(currentDate.getHours());

// currentDate.setMinutes(30);
// console.log(currentDate.getMinutes());

// currentDate.setSeconds(30);
// console.log(currentDate.getSeconds());

// currentDate.setMilliseconds(500);
// console.log(currentDate.getMilliseconds());

// console.log(currentDate.getDay());

// var dateOfBirth = new Date("01-01-2000");
// var currentDate = new Date();

// var currentTime = currentDate.getTime();
// var dateOfBirthTime = dateOfBirth.getTime();

// var diff = currentTime - dateOfBirthTime;

// console.log(currentTime);
// console.log(dateOfBirthTime);
// console.log(diff);

// var a = 300;
// var b = 0.3456132;

// var c = (a * b) / 15;
// console.log(c);

// function abc() {
//   var a = 10;
//   console.log(a);
// }

// abc();

// function abc(a, b) {
//   var amount = a - b;
//   console.log(amount);
// }
// abc(500, 100);
// abc(1000, 200);
// abc(600, 50);
// abc(700, 100);

// var a = 10;

// function abc() {
//   a = 20;
// }

// function xyz() {
//   console.log(a, "Function XYZ");
// }

// abc();
// xyz();

// function abc() {
//   return "abc123456789";
// }

// var a = abc();

// console.log(a);

// function numReverce(x) {
//   return x.toString().split("").reverse().join("");
// }

// numReverce(321745163);

// function abc(text) {
//   var a = text.split(" ");
//   console.log(a);

//   for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].slice(0, 1).toUpperCase() + a[i].slice(1).toLowerCase();
//   }

//   a = a.join(" ");
//   return a;
// }

// var b = abc("the quick brown fox");
// console.log(b);

// var a = new Date();
// a.setDate(2)
// console.log(a);

// var day = "apna";

// switch (day) {
//   case "mon":
//     console.log("Monday Alert !");
//     break;
//   case "tue":
//     console.log("Tuesday Alert !");
//     break;
//   case "wed":
//     console.log("Wednesday Alert !");
//     break;
//   case "thu":
//     console.log("Thursday Alert !");
//     break;
//   case "fri":
//     console.log("Friday Alert !");
//     break;
//   case "sat":
//   case "sun":
//     console.log("Chhutti Alert !");
//     break;
//   default:
//     console.log("is Hafte main nai hai");
// }

// var i = 0;
// while(i<0){
//     i++
//     console.log(i)
// }

// var i = 0;
// do{
//     i++
//     console.log(i)
// }while(i<0)

// function clickBtn(){
//     console.log("Button Clicked")
// }

// function flip(element,value){
//     console.log(element,value)
//     if(value){
//         element.style.backgroundImage = "url('./images/diamond.jpg')"
//     }else{
//         element.style.backgroundImage = "url('./images/noimage.png')"
//     }
// }

// undefined //false
// null //false
// 0 //false
// 1 //true
// -1 //true
// "" //false
// "asdas" //true
// true //true
// false //false

// function abc(message) {
//   console.log(message);
// }

// function checkField(element) {
//   if (element.value.length < 3) {
//     alert("Input Value should be greater than 3 letters");
//   }
// }

// function addValue() {
//   console.log("Button Click");
//   var a = document.getElementById("inp");
//   var b = document.getElementById("inp2");
//   console.log(a.value);
//   b.value = a.value;
// }

// function shape(cls) {
//   var a = document.getElementById("shape");
//   a.className = cls;
// }

// function addClass() {
//   var a = document.getElementById("shape");
//   a.className += " border";
// }

// function addValue() {
//   var a = document.getElementById("inp");
//   var b = document.getElementById("dis");

//   b.innerHTML = a.value;
// }

// var parent = document.getElementById("parent");
// var pera = parent.getElementsByTagName("P");
// console.log(pera);

// var a = document.getElementById('main')
// var inp = document.getElementById('inp')

// function createElem(){
//     var p = document.createElement('P')
//     var txt = document.createTextNode(inp.value)
//     p.appendChild(txt)
//     p.setAttribute('class','pera')
//     p.setAttribute('id','p1')

//     var delBtn = document.createElement("BUTTON")
//     var delLabel = document.createTextNode('Delete')
//     delBtn.appendChild(delLabel)
//     delBtn.setAttribute('onclick','delTodo(this)')
//     p.appendChild(delBtn)

//     a.appendChild(p)
// }

// function delTodo (elem){
//     var p = elem.parentNode
//     p.remove()
// }
