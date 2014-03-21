//Working but only basic
function basicLocalStorage(){
  localStorage.setItem("First Item", "This is my first item");
  localStorage.setItem("Second Item", "This is my second item");
  console.log(localStorage.getItem("First Item"));
  console.log(localStorage.length);
  localStorage.removeItem("Second Item");
  console.log(localStorage.length);
  localStorage.clear();
  console.log(localStorage.length);
}

//Creating Student Names
function studentNames(){

//Creating an object called Student One
var studentOne = {
  fn: "Nick",
  sn: "Liffen",
  email: "nick.liffen@port.ac.uk"
};
//Creating an object called Student Two
var studentTwo = {
  fn: "Tom",
  sn: "Tatton",
  email: "Tom.Tatton@port.ac.uk"
};
//Creating an object called Student Three
var studentThree = {
  fn: "Sam",
  sn: "Jones",
  email: "Sam.Jones@port.ac.uk"
};
//Passes the three students into local storage function
practiseLocalStorage(studentOne, studentTwo, studentThree);

}

//More complex local storage
function practiseLocalStorage(studentOne, studentTwo, studentThree){
//Convert Objects to Strings
var studentOneString   = JSON.stringify(studentOne);
var studentTwoString   = JSON.stringify(studentTwo);
var studentThreeString = JSON.stringify(studentThree);
//Store them in Local Storage
localStorage.setItem("StudentOne",   studentOneString);
localStorage.setItem("StudentTwo",   studentTwoString);
localStorage.setItem("StudentThree", studentThreeString);
//Console Log Students as Strings
console.log(studentOneString);
console.log(studentTwoString);
console.log(studentThreeString);
//Get the Items from Storage
var getStudentOne = localStorage.getItem("StudentOne");
var getStudentTwo = localStorage.getItem("StudentTwo");
var getStudentThree = localStorage.getItem("StudentThree");
//Parses the Stringified Object
var studentOneAsObject = JSON.parse(getStudentOne);
var studentTwoAsObject = JSON.parse(getStudentTwo);
var studentThreeAsObject = JSON.parse(getStudentThree);
//Console Log the Different Parts of Students
//StudentOne
console.log(studentOneAsObject.fn);
console.log(studentOneAsObject.sn);
console.log(studentOneAsObject.email);
//Student Two
console.log(studentTwoAsObject.fn);
console.log(studentTwoAsObject.sn);
console.log(studentTwoAsObject.email);
//Student Three
console.log(studentThreeAsObject.fn);
console.log(studentThreeAsObject.sn);
console.log(studentThreeAsObject.email);
}

//Tells me when a storage event has occured
function storageEventHandler(e) {
	console.log("A storage event occurred", e.key, e.value);
}

setListeners = function() {
  basicLocalStorage();
  studentNames();
}


window.addEventListener("load", setListeners);
window.addEventListener("storage", storageEventHandler);
