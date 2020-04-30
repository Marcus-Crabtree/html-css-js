let colors = ["red", "blue", "white"];
let students = [
    {name: "andrew", favNumber: 27 },
    {name: "Marcus", favNumber: 13 },
    {name: "Trevor", favNumber: 11 },
    {name: "Dennis", favNumber: 6 }
];

var numbers = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
    26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
];



const loaded = () => {
    let ulCtrl = document.getElementById("students");
    for (let student of students) {
        let liTag = `<li>${student.name} whose favorite number is ${student.favNumber}`;
        ulCtrl.innerHTML += liTag;
    }
    
    let divCtrl = document.getElementById("colors");
    for(let color of colors) {
        let para = "<p>" + color + "</p>";
        divCtrl.innerHTML += para;
        
    }
    
    
    let divCtrl1 = document.getElementById("numbers");
    for(let number of numbers) {
        let scan = "<scan>" +number+ ", "+"</scan>";
        divCtrl1.innerHTML += scan;
        
        // check div by 3 or 5 and print
        if(number % 3===0 || number %5 === 0) {
            numbers.push(number);
        }
        //add and dispaly avg of num div by 3||5    
   
    }
}