// 1 этап:
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 2 этап
function addTask(text) {
  // Создаем элементы li, checkbox и button
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const button = document.createElement("button");

// 3 этап

  checkbox.type = "checkbox";

  // 4 этап

  button.textContent = "Удалить";
  button.addEventListener("click", () => {
    li.remove();
  });

  // 5 этап
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(text));
  li.appendChild(button);

  // 6 этап
  ul.appendChild(li);
}

// 7 этап
form.addEventListener("submit", (event) => {

  // 8 этап
  event.preventDefault();

// 9 этап
  const text = input.value.trim();

  // 10 этап
  if (!text) return;

// 11 этап
  addTask(text);

 // 12 этап
  input.value = "";
});

// 13 этап
ul.addEventListener("change", (event) => {

// 14 этап
  if (event.target.tagName !== "INPUT" || event.target.type !== "checkbox")
    return;

 // 15 этап
  const li = event.target.parentNode;

 // 16 этап

  if (event.target.checked) {
    li.style.textDecoration = "line-through";
    ul.appendChild(li);
  } else {
    
 // 17 этап
    li.style.textDecoration = "";
    ul.prepend(li);
  }
});
