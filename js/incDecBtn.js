let btnAdd = document.querySelector("#add");
let btnSubtract = document.querySelector("#subtract");
let input = document.querySelector("input");
let color = "black";

btnAdd.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
});

btnSubtract.addEventListener("click", () => {
    input.value = parseInt(input.value) - 1;
});

// if (input % 2 == 0) {
//     color = "red";
// }
// else if (idx % 3 == 0) {
//     style = italic;
// } 
// else if (idx % 7 == 0) {
//     style = bold
// }