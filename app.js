(function() {
  function getTodayKey() {
    var date = new Date();
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  }

  function getPersonFromLocalStorage() {
    var key = getTodayKey();
    var person = {
      name: localStorage.getItem(key + "-name"),
      description: localStorage.getItem(key + "-description")
    }
    return person;
  }

  function savePersonToLocalStorage(person) {
    key = getTodayKey();
    localStorage.setItem(key + "-name", person.name);
    localStorage.setItem(key + "-description", person.description);
  }

  function getRandomPerson() {
    var num = Math.floor(randNumber = Math.random() * database.length);
    return database[num];
  }

  function changePersonOnWebsite(person) {
    document.getElementById("randomName").innerHTML = person.name;
    document.getElementById("randomDescription").innerHTML = person.description;
  }

  function putRandomNameOnText() {
    var person = getPersonFromLocalStorage();
    if (!person.name) {
      person = getRandomPerson();
      savePersonToLocalStorage(person);
    }
    changePersonOnWebsite(person);
  }

  function init() {
    document.getElementById("randomButton").onclick = putRandomNameOnText;
    var person = getPersonFromLocalStorage();
    if (person.name)
      changePersonOnWebsite(person);
  }

  init();
})()
