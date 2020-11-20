const main = document.getElementById("main");


function getBusRoute() {
  let busRoute = document.getElementById("busroute").value;

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let apiurl = "https://api.umd.io/v0/bus/routes/"
    let busRouteURL = apiurl.concat(busRoute); 

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        console.log(route);
        let title,lat_max, lat_min, lon_max, lon_min;
          title = route.title;
<<<<<<< HEAD
          lat_max = route.lat_max;
          lat_min = route.lat_min;
          lon_max = route.lon_max;
          lon_min = route.lon_min;
          sessionStorage.setItem("main", JSON.stringify(main));
          sessionStorage.setItem("latMax", JSON.stringify(lat_max));
          sessionStorage.setItem("latMin", JSON.stringify(lat_min));
          sessionStorage.setItem("lonMax", JSON.stringify(lon_max));
          sessionStorage.setItem("lonMin", JSON.stringify(lon_min));
=======
          latMax = route.lat_max;
          latMin = route.lat_min;
          lonMax = route.lon_max;
          lonMin = route.lon_min;
  
          sessionStorage.setItem("latMax", JSON.stringify(latMax));
          sessionStorage.setItem("latMin", JSON.stringify(latMin));
          sessionStorage.setItem("lonMax", JSON.stringify(lonMax));
          sessionStorage.setItem("lonMin", JSON.stringify(lonMin));
>>>>>>> parent of 6bf463c... Update setSessionData.js
          sessionStorage.setItem("title", JSON.stringify(title));
    })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.clear();
  }
}



