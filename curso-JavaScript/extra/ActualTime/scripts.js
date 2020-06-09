const divTime = document.querySelector(".time");
const plusContainer = document.querySelector(".plus");
const minusContainer = document.querySelector(".minus");
const urls = document.querySelector(".urls");

var urlsList = JSON.parse(localStorage.getItem("urlsList")) || [];

// Every 1 seconds
setInterval(getTime, 1000);

function getTime() {
  divTime.innerHTML = "";
  let today = new Date();

  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  let pTime = document.createElement("p");
  pTime.className = "pTime";
  let pDate = document.createElement("p");
  pDate.className = "pDate";

  let textTime = document.createTextNode(time);
  pTime.appendChild(textTime);

  let textDate = document.createTextNode(date);
  pDate.appendChild(textDate);

  divTime.appendChild(pTime);
  divTime.appendChild(pDate);
}

function add_url() {
  var isEmpty = plusContainer.innerHTML === "";
  if (!isEmpty) {
    plusContainer.innerHTML = "";
    return;
  }

  let input = document.createElement("input");
  input.style.color = "#fff";
  let button = document.createElement("button");
  button.style.color = "#fff";
  button.onclick = add;
  let textButton = document.createTextNode("Adicionar");
  button.appendChild(textButton);

  plusContainer.appendChild(input);
  plusContainer.appendChild(button);
}

function add() {
  let input = document.querySelector("input");

  urlsList.push(input.value);
  saveToStorage();
  renderUrls();

  // remove input
  plusContainer.innerHTML = "";
}

// Salva no Storage local
function saveToStorage() {
  // array para JSON, reconhecido pelo browser
  localStorage.setItem("urlsList", JSON.stringify(urlsList));
  console.log(urlsList);
}

function renderUrls() {
  urls.innerHTML = "";

  for (url of urlsList) {
    let a = document.createElement("a");
    let img = document.createElement("img");

    a.href = "https://" + url;

    img.width = "20";
    img.height = "20";
    img.src = `https://icons.duckduckgo.com/ip3/${url}.ico`;

    a.appendChild(img);
    urls.appendChild(a);
  }
}

function remove_url() {
  var isEmpty = minusContainer.innerHTML === "";
  if (!isEmpty) {
    minusContainer.innerHTML = "";
    return;
  }

  let input = document.createElement("input");
  input.style.color = "#fff";
  let button = document.createElement("button");
  button.style.color = "#fff";
  button.onclick = remove;
  let textButton = document.createTextNode("Adicionar");
  button.appendChild(textButton);

  minusContainer.appendChild(input);
  minusContainer.appendChild(button);
}

function remove() {
  let input = document.querySelector("input");

  urlsList = urlsList.filter((item) => item !== input.value);

  saveToStorage();
  renderUrls();

  // remove input
  minusContainer.innerHTML = "";
}

renderUrls();
