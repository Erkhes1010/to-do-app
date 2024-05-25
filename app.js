const input = document.getElementsByTagName("input")[0];
const addBtn = document.getElementsByTagName("button")[0];
var olEl = document.getElementsByTagName("ol")[0];
addBtn.addEventListener("click", () => {
  //1. create li -> create Element('tag name)
  let li = document.createElement("li");
  // 2. check li
  console.log(li);
  // 3. li dotod inputiin text oruulna
  li.innerText = input.value;
  // 4. ol dotor li-iig oruulna
  olEl.append(li);
  // 5. input ee hooson bolgoh
  input.value = "";
  // 6. delete bolon check button nemeh
  let delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="bi bi-trash"></i>';
  li.appendChild(delBtn);
  // 7. check button nemeh
  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="bi bi-check"></i>';
  li.appendChild(checkBtn);
  // tagd class ner uguh -> className
  delBtn.className = "del";
  saveData();
});
// 8. delete button click event
olEl.addEventListener("click", (e) => {
  if (e.target.className === "bi bi-trash") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.className == "bi bi-check") {
    e.target.parentElement.parentElement.classList.toggle("checked");
  }
  saveData();
});
localStorage.setItem("name", "bold");

function saveData() {
  localStorage.setItem("data", olEl.innerHTML);
}
function getdata() {
  localStorage.getItem("data");
}
gatdata();
