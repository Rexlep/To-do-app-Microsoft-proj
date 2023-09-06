const themeSwitcher = document.getElementById("theme-switcher");
const bodyTag = document.querySelector("body");
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("addt");

function main() {
  //Theme changer
  themeSwitcher.addEventListener("click", () => {
    bodyTag.classList.toggle("light");
    const themImg = themeSwitcher.children[0];
    themImg.setAttribute(
      "src",
      themImg.getAttribute("src") === "./assets/images/icon-sun.svg"
        ? "./assets/images/icon-moon.svg"
        : "./assets/images/icon-sun.svg"
    );
  });

  makeTodo(JSON.parse(localStorage.getItem("todos")));

  //Add to do in local storage
  addBtn.addEventListener("click", () => {
    const item = todoInput.value.trim();
    if (item) {
      todoInput.value = "";
      const todos = !localStorage.getItem("todos")
        ? []
        : JSON.parse(localStorage.getItem("todos"));

      const currentTodo = {
        item: item,
        isCompeleted: false,
      };

      todos.push(currentTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
}

function makeTodo(todoArray) {
  if (!todoArray) {
    return null;
  }
  //Create Elements of todo
  todoArray.forEach((todoObject) => {
    const cardElement = document.createElement("li");
    const cbContainer = document.createElement("div");
    const cbInput = document.createElement("input");
    const spanCheck = document.createElement("span");
    const item = document.createElement("p");
    const clearBtn = document.createElement("button");
    const img = document.createElement("img");

    //Add classes
    cardElement.classList.add("card");
    cbContainer.classList.add("cb-container");
    cbInput.classList.add("cb-input");
    spanCheck.classList.add("check");
    item.classList.add("item");
    clearBtn.classList.add("clear");

    //Add Atributes
    cardElement.setAttribute("draggable", true);
    cbInput.setAttribute("type", "checkbox");
    img.setAttribute("src", "./assets/images/icon-cross.svg");
    img.setAttribute("alt", "Clear it");
    item.textContent = todoObject.item;

    //Set EventListeners

    //Set Elements by Parents Childe
    clearBtn.appendChild(img);
    cbContainer.appendChild(cbInput);
    cbContainer.appendChild(spanCheck);
    cardElement.appendChild(cbContainer);
    cardElement.appendChild(item);
    cardElement.appendChild(clearBtn);

    document.querySelector(".todos").appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", main);
