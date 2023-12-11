var value = document.getElementById("value")
var maisbtn = document.getElementById("plus");
var mensbtn = document.getElementById("minus")
var reset = document.getElementById("reset")


const updateValue = () =>{
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

maisbtn.addEventListener('mousedown',() =>{
    intervalId = setInterval(() => {
     count += 1; 
     updateValue()  
},100)
});

mensbtn.addEventListener('mousedown',() =>{
    intervalId = setInterval(() => {
     count -= 1; 
     updateValue()  
},100)
});

reset.addEventListener('click',() =>{
    count = 0;
    updateValue()
});

document.addEventListener('mouseup', () => clearInterval(intervalId))