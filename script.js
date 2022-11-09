var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li")
var deleteBtn = document.getElementsByClassName("delete")






function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var deleteBtns = document.createElement("button")
	deleteBtns.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteBtns)
	deleteBtns.onclick = deleteListItem
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossOut (event) {
	event.target.classList.toggle("done")
}

for(var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].addEventListener("click", deleteListItem)
}

function deleteListItem(event) {
	event.target.parentElement.remove()
}



ul.addEventListener("click" , crossOut)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);