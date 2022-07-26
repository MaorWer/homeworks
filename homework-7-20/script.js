const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const userColor = document.getElementById("color");
const userGenderMale = document.getElementById("male");
const userGenderFemale = document.getElementById("female");
const userCountry = document.getElementById("country");
const submit = document.getElementById("submit");
const userCard = document.getElementById("user-card");

function clearInputs() {
  userColor.value = "#000";
  userName.value = "";
  userAge.value = "";
  userCountry.value = "";
  userGenderMale.checked = false;
  userGenderFemale.checked = false;
}

function userGenderChoice() {
  if (userGenderMale.checked) {
    return "male";
  } else if (userGenderFemale.checked) return "female";
}

function inputSubmit() {
  userBg();
  clearInputs();
  userGenderChoice();
}

function userBg() {
  if (userName.value.length < 2) {
    alert("user name must be at least two characters long");
    return;
  }
  if (userAge.value <= 18) {
    alert("you are to yong");
    return;
  }

  userCard.innerHTML +=
    `<div class="card-body" style="background-color:` +
    userColor.value +
    `;">
    <h5 class="card-title">` +
    userName.value +
    `</h5>
    <p class="card-text">` +
    userAge.value +
    `</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">` +
    userGenderChoice() +
    `</li>
    <li class="list-group-item">` +
    userCountry.value +
    `</li>
  </ul>
</div>`;
}
