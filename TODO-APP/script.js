const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");

const todoList = document.querySelector(".todo-list");

function addNewTodo(e) {
  e.preventDefault();

  const todo = formInput.value;

  if (todo === "" || todo.trim() === "") {
    alert("Please add an activity!");
    return;
  }

  createListItem(todo);

  addItemToStorage(todo);

  formInput.value = "";
}

function createListItem(activity) {
  const li = document.createElement("li");
  li.className = "list-item";

  const span = document.createElement("span");
  span.classList.add("content");
  span.appendChild(document.createTextNode(activity));

  const button = document.createElement("button");
  button.classList.add("todo-btn");

  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  button.appendChild(i);

  li.appendChild(span);
  li.appendChild(button);

  document.querySelector(".todo-list").appendChild(li);
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("todo-btn")) {
    e.target.parentElement.parentElement.remove();

    removeFromStorage(e.target.parentElement.parentElement.textContent.trim());
  }
}

// LocalStorage
function addItemToStorage(activity) {
  let stringActivities = getFromLocalStorage();

  stringActivities.push(activity);

  localStorage.setItem("activities", JSON.stringify(stringActivities));
}

function removeFromStorage(items) {
  let allActivities = getFromLocalStorage();

  let newActivities = allActivities.filter((i) => i != items);

  localStorage.setItem("activities", JSON.stringify(newActivities));
}

function getFromLocalStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("activities") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("activities"));
  }

  return itemsFromStorage;
}

function loadUI() {
  let activityFromStorage = getFromLocalStorage();

  activityFromStorage.forEach((activity) => {
    createListItem(activity);
  });
}

form.addEventListener("submit", addNewTodo);
todoList.addEventListener("click", removeItem);
document.addEventListener("DOMContentLoaded", loadUI);
