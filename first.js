document.addEventListener("DOMContentLoaded", function() {
   

    let newItemForm = document.getElementById("newItemForm");
    let groceryList = document.getElementById("groceryList");
  
    newItemForm.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log('test');
      let removeButton = document.createElement("button");
      removeButton.innerText = "X";

      
  
      let item = document.createElement("li");
      item.innerText = document.getElementById("Cart").value;
  

      
      item.appendChild(removeButton);
      groceryList.appendChild(item);
   
  
     newItemForm.reset();
    });
  
    groceryList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });






