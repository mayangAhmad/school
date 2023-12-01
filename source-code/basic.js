
//when user click and has inputted wrong format, it turns red
document.querySelector("form").addEventListener("input", function(event) {
    let input = event.target;
    input.setAttribute("changed", true);
  });

//to make an extra text field
const buttonOther = document.getElementById("amount-deduct-other");
const buttonrm1 = document.getElementById("amount-deduct-rm1");
let container = document.getElementById("other-amount-container");

buttonOther.addEventListener("click", function() {

  if (!container.hasChildNodes()) {
    const textField = document.createElement("input");
    const labelField = document.createElement("label");
    textField.type = "text";
    textField.required = true;
    textField.placeholder = "10.50"
    textField.id = "child1";
    textField.pattern = "[0-9]{2}.[0-9]{2}|[0-9]{1}.[0-9]{2}|[0-9]{3}.[0-9]{2}";
    labelField.id = "child2";
    labelField.textContent = "Please specify the amount"
    container.appendChild(labelField);
    container.appendChild(textField);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    textField.style.fontSize = "1rem";
    textField.style.height = "40px"
    
  }
});


buttonrm1.addEventListener("click", function() {
   if(container.hasChildNodes){
    var child1 = document.getElementById("child1");
    var child2 = document.getElementById("child2");
    container.removeChild(child1);
    container.removeChild(child2);
   }
  });


 




  