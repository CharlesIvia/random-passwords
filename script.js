//Fetch dom elements and and set variables

const result = document.querySelector("#result"),
  copyBtn = document.querySelector(".result-copy"),
  length = document.querySelector("#length"),
  uppercase = document.querySelector("#uppercase"),
  lowercase = document.querySelector("#lowercase"),
  numbers = document.querySelector("#numbers"),
  symbols = document.querySelector("#symbols"),
  generate = document.querySelector("#generate"),
  message = document.querySelector(".message");

//Fn to generate passsword

generate.addEventListener("click", function (e) {
  e.preventDefault();
  let passswordLength = length.value;
  if (passswordLength > 4 && passswordLength <= 25) {
    let passsword = "";
    for (let i = 0; i < passswordLength; i++) {
      passsword += generateRandomCharacter();
    }
    result.value = passsword;
    message.textContent = "";
  } else {
    message.textContent = "Selecr length betwen 5 and 25";
    if (message.classList.contains("message-success")) {
      message.classList.remove("message-success");
    }
    result.value = "";
    hideMessage();
  }
});
