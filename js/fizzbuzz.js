const display = (idx) => {
    let nbr = `${idx}`;
    let color = "black";
   
        if (idx % 3 == 0 && idx % 5 == 0) {
            nbr = `FizzBuzz`;
            color = "purple";
        }
        else if (idx % 3 == 0) {
            nbr = `Fizz`;
            color = "blue";
        } 
        else if (idx % 5 == 0) {
            nbr = `Buzz`;
            color = "red";
        }
        let span = `<span style='color:${color}'>${nbr} </span>`;
        document.getElementById("fizzbuzz").innerHTML += span;
        document.getElementById("fizzbuzz").style.color = color;

}

const fb = () => {
    for(let idx =1; idx <= 50; idx++) {
        display(idx);
    }
}