const input = document.getElementById("input");
const add = document.getElementById("button");
const listContainer = document.querySelector(".list-container");

add.addEventListener("click", () => {
  if (input.value === "") {
    alert("Add Your Text");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showData();
