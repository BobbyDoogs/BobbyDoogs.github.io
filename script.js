var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
  
  // add delete button
  var deleteBtn = document.createElement("button");
  var t = document.createTextNode("Delete");
  deleteBtn.appendChild(t);
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteList);
  
  //add event listener for strikethrough
  li.addEventListener("click",checked);
  
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var listLength = document.getElementsByTagName("li").length;

var shoppingList = document.querySelectorAll("li");

function checked(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

for (var i=0; i < listLength; i++) { 
  shoppingList[i].addEventListener("click",checked);
}


for (var i=0; i < listLength; i++) { 
      var deleteBtn = document.createElement("button");
      var t = document.createTextNode("Delete");
      deleteBtn.appendChild(t);
      shoppingList[i].appendChild(deleteBtn);  
      deleteBtn.addEventListener("click", deleteList);
  }

//Functional delete button

function deleteList() {
  this.parentNode.remove();
}



