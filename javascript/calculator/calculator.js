var input = document.querySelector(".input");
var items = Array.from(document.querySelectorAll(".item"));
items.forEach(function(btn) {
  btn.addEventListener("click", function(){
  	if (input.innerHTML == "0") {
    	input.innerHTML = "";
    }
    if (btn.innerHTML == "AC") {
    	input.innerHTML = "0";
    }
    else if (btn.innerHTML == "DEL") {
    	inputText = Array.from(input.innerHTML);
    	inputText.splice(inputText.length-1,1);
    	if(inputText.length != 0) 
    	input.innerHTML = inputText.join("");
    	else input.innerHTML = "0";
    }
    else if(btn.innerHTML =="="){
    	input.innerHTML = eval(input.innerHTML);
    }
    else input.innerHTML += btn.innerHTML;
  });
});