"use script";

const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const autoIncrement = document.getElementById('autoIncrement');
const stopAutoIncrement = document.getElementById('stopAutoIncrement');
const changeCounter = document.getElementById('changeCounter');

const color = ["#00FDFF", "#FF41FF", "#0333FF", "#FF2600", "#FFD000", "#FFFB00", "#00FA00"];

let interval = null;

increment.addEventListener('click',() => {
    counter.innerText = parseInt(counter.innerText) + 1;
},);

autoIncrement.addEventListener('click', () =>{
    if(interval) return;

    interval = setInterval(() =>{
        counter.innerText = parseInt(counter.innerText) + 1;
    }, 1000)
});

stopAutoIncrement.addEventListener('click', () =>{
    clearInterval(interval);
    interval = null;
});

changeCounter.addEventListener('click', () => {
    const randomColor = () => Math.floor(Math.random() * color.length);
    let colorInterval = setInterval(() => {
        counter.style.backgroundColor = color[randomColor()];
    },800)
})

if(counter > '60'){
    clearInterval(interval);
    interval = null;
}