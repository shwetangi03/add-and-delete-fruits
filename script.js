let form = document.querySelector("form");
let fruits = document.querySelector(".fruits");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let fruitToAdd = document.getElementById("fruit-to-add");

    let newLi = document.createElement("li");
    newLi.innerHTML = fruitToAdd.value + '<button class = "delete-btn">x</button><button class = "edit-btn">Edit</button>';

    fruits.appendChild(newLi);
})

fruits.addEventListener("click", function(event){
    if(event.target.classList.contains("delete-btn")){
        let fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete)
    }
})