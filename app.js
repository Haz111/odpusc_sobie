(function() {
  var button = document.getElementById("randomButton");

  function putRandomNameOnText() {
     document.getElementById("randomName").innerHTML = "siema, dziala"
      document.getElementById("randomDescription").innerHTML = "siema, dziala2"
  }

  button.onclick = function(e) {
    putRandomNameOnText();
  }
})()
