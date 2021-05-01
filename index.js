document.title = "Item Lister";

let itemList = document.getElementsByClassName("list-group-item");

for (const item of itemList) {
  item.style.backgroundColor = "yellow";
}

let allLi = document.getElementsByTagName("li");

console.log(allLi);
