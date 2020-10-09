let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

let header = document.getElementsByClassName("header")[0]
header.innerText = "Ruthwik Kuppachi's Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

let myContent = document.getElementsByClassName("content")[0];

let p1 = document.createElement('p')
let myText1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
let p2 = document.createElement('p');
let myText2 = document.createTextNode("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

p1.append(myText1);
myContent.appendChild(p1);

p2.append(myText2);
myContent.appendChild(p2);

p1.classList.add("para1");
p2.classList.add("para2");


// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

let name = "Ruthwik Kuppachi";
let nameLengthText = document.createTextNode(" My name has " + (name.length - 1) + " characters");
let para1 = document.getElementsByClassName("para1")[0];
para1.appendChild(nameLengthText);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

let thirdChar = document.createTextNode(" " + name[2].toUpperCase());
let para2 = document.getElementsByClassName("para2")[0];
para2.appendChild(thirdChar);

// 6 Add a new line to your second paragraph

para2.innerText += "\n";

// 7 Return the final three characters of your last name to that new line

let lastThree = name.slice(name.length - 3);
para2.innerText += lastThree;

// 8 Substring your first and last name into two separate variables
let firstName = name.slice(0,7);
let lastName = name.slice(8);

// 9 Add the total length of your first and last names together
let totalLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header
header.innerText += " " + totalLength;