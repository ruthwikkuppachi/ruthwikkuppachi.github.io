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
        root.appendChild(ol);
        arr.forEach(function(country, index) {
        if(getRandomInt25(0,243).includes(index)){
          li = document.createElement('li');
          li.appendChild(document.createTextNode(country.code));
          li.append(document.createTextNode(" " + country.name));
          ol.appendChild(li);
        }
          
        });
      }

      btn.onclick = arrToUl(myContent, countries);