let button = document.getElementById("btn")
let body = document.body

let colors = ['black','white']

button.addEventListener('click',changebackground)

function changebackground() {
    let colorsIndex = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}

// let button = document.getElementById("btn");
// let body = document.body;

// let colors = ['black', 'blue', 'green', 'pink', 'red'];

// button.addEventListener('click', changeBackground);

// function changeBackground() {
//   let colorIndex = Math.floor(Math.random() * colors.length);
//   body.style.backgroundColor = colors[colorIndex];
// }
