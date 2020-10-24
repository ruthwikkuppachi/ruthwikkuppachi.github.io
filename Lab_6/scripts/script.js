const form = document.getElementsByTagName("form")[0];

let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let label1 = document.createElement("label");
label1.setAttribute("for", "name");
li1.appendChild(label1);
ul.appendChild(li1);

label1.appendChild(document.createTextNode('Name'));

var x = document.createElement("input");
x.setAttribute("type", "text");
x.setAttribute("maxLength", 140);
label1.appendChild(x);

let label2 = document.createElement("label");
label2.setAttribute("for", "interests");
form.appendChild(label2);

li2.appendChild(label2);
ul.appendChild(li2);

label2.appendChild(document.createTextNode('Interests'));


var y = document.createElement("textarea");
y.setAttribute("id", "Interests");
y.setAttribute("cols", 33);
y.setAttribute("rows", 5);
y.setAttribute("defaultValue", "Enter your Interests");
label2.appendChild(y);

let b = document.createElement("button");
li3.appendChild(b);
ul.appendChild(li3);
b.appendChild(document.createTextNode('Submit'));

form.appendChild(ul);


