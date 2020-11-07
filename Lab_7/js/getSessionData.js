// Get saved data from sessionStorage
let title = sessionStorage.getItem("title");
let lat_max = sessionStorage.getItem("latMax");
let lat_min = sessionStorage.getItem("latMin");
let lon_max = sessionStorage.getItem("lonMax");
let lon_min = sessionStorage.getItem("lonMin");

const title1 = JSON.parse(title);
const latmax1 = JSON.parse(lat_max);
const latmin1 = JSON.parse(lat_min);
const lonmax1 = JSON.parse(lon_max);
const lonmin1 = JSON.parse(lon_min);



document.getElementById("title").innerHTML = title1;
document.getElementById("lat_max").innerHTML = latmax1;
document.getElementById("lat_min").innerHTML = latmin1;
document.getElementById("lon_max").innerHTML = lonmax1;
document.getElementById("lon_min").innerHTML = lonmin1;


sessionStorage.clear();

