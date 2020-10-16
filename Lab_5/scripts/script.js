let myContent = document.getElementsByClassName("content")[0];
let ol = document.createElement("ol");
ol.classList.add("countries");

const btn = document.getElementsByClassName('activate');

function getRandomInt25(min, max) {
    var arr = [];
    for (i=0; i<25; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
        n = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(n);
      }
      return arr;
    }

  
    function arrToUl(root, arr) {
        var li;
        root.appendChild(ol); // append the created ul to the root
      
        arr.forEach(function(country, index) {
        if(index in getRandomInt25(0,240)){
          li = document.createElement('li'); // create a new list item
          li.appendChild(document.createTextNode(country.code + " " + country.name)); // append the text to the li
          ol.appendChild(li); // append the list item to the ul
        }
          
        });
      }

      btn.onclick = arrToUl(myContent, countries);