/*
var person = {};
person.fname = "ewha";
person.lname = "kim";
person.age = 20;

var person2 = {
  fname:"jane",
  lname:"Lee",
  age:19
};

console.log(person.fname+"<br>");

function full_name(p){
  return p.fname+" "+p.lname;
}

console.log(full_name(person) + "<br>");
console.log(full_name(person2) + "<br>");
console.log(person["fname"]);


var a = {
  key:123
};

console.log(a["key"]);

key = "abc";    //변수
a = {key:123};
console.log(a["key"]);
console.log(key);

var a = {};
a[key] = 123;
console.log(a["abc"]);

console.log("Array vs Obj");

var A = [12, 34, "Hi", "Ewha"];
var O = {num1:12, num:34, txt:"Hi", name:"Ewha"};

console.log(O["txt"] + O["name"]);
console.log(O.txt + O.name);


var person = {
  fname:"Ewha",
  lname:"Kim",
  age:20
};

function full_name(p){
  return p.fname+' '+p.lname;
}

console.log(full_name(person));

person.full_name = function full_name(){
  return this.fname + " " + this.lname;
}

console.log(person.full_name());

person.full_name = function (){
  return this.fname + " " + this.lname;
}
console.log(person.full_name());

console.log(person);

*/

console.log("Array of obj");

var a = {name:"Ewha", age:20};
var b = {name:"Jane", age:19};

var P = [a,b];

console.log(a.name);
console.log(P[0].name);