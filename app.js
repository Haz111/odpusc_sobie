(function() {
  console.log(database);
  var button = document.getElementById("randomButton");

  function putRandomNameOnText() {
    var num = Math.floor(randNumber = Math.random() * database.length);
    console.log(num);
    var person = database[num];

    document.getElementById("randomName").innerHTML = person.name;
    document.getElementById("randomDescription").innerHTML = person.description;
  }

  button.onclick = function(e) {
    putRandomNameOnText();
  }
})()
