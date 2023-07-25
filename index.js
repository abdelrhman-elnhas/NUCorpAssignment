function collapse() {
  var x = document.getElementById("Home");
  if (x.className === "home") {
    x.className += " responsive";
  } else {
    x.className = "home";
  }
}
