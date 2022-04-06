var array = [];
var counter = 0;

function submit() {
  var btn = document.getElementById("btn");
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var pwd = document.getElementById("password").value;
  var eror = document.getElementById("eror");
  var eror2 = document.getElementById("eror2");
  var eror3 = document.getElementById("eror3");

  var obj = {
    first1: first,
    last1: last,
    password1: pwd,
  };
  if (first > "" && last > "" && pwd > "") {
    counter++;
    array[counter - 1] = obj;
    document.getElementById("main").style.display = "none";
    document.getElementById(
      "logout"
    ).innerText = `გამარჯობა ${obj.first1} ${obj.last1}`;
    document.getElementById("div").style.display = "flex";
  }

  if (first == "" && last == "" && pwd == "") {
    eror.style.display = "block";
    eror2.style.display = "block";
    eror3.style.display = "block";
  } else if (first == "" || last == "" || pwd == "") {
    if (first == "") {
      eror.style.display = "block";
    } else if (last == "") {
      eror2.style.display = "block";
    } else if (pwd == "") {
      eror3.style.display = "block";
    }
  }
  document.getElementById("first").addEventListener("input", () => {
    eror.style.display = "none";
  });
  document.getElementById("last").addEventListener("input", () => {
    eror2.style.display = "none";
  });
  document.getElementById("password").addEventListener("input", () => {
    eror3.style.display = "none";
  });
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("password").value = "";
}
function logout() {
  document.getElementById("div").style.display = "none";
  document.getElementById("logindiv").style.display = "flex";
}
function login() {
  var login = document.getElementById("login");
  var logpwd = document.getElementById("logpwd");

  for (let i = 0; i < array.length; i++) {
    if (array[i].first1 == login.value && array[i].password1 == logpwd.value) {
      document.getElementById("div").style.display = "flex";
      document.getElementById(
        "logout"
      ).innerText = ` ${array[i].first1} ${array[i].last1} კეთილი იყოს თქვენი მობრძანება`;
      login.value = "";
      logpwd.value = "";
    } else {
      document.getElementById("loginp").style.display = "block";
      login.addEventListener("input", () => {
        document.getElementById("loginp").style.display = "none";
      });
      logpwd.addEventListener("input", () => {
        document.getElementById("loginp").style.display = "none";
      });
      login.value = "";
      logpwd.value = "";
    }
  }
}
function back() {
  document.getElementById("main").style.display = "flex";
  document.getElementById("logindiv").style.display = "none";
}
