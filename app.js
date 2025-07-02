let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

btn.addEventListener("click", function(){
    console.log(getRandomColor());
    console.log(this);
    
    let randomColor = getRandomColor();
    h3.innerText = `Color is ${randomColor}`;

    div.style.backgroundColor = randomColor;
    console.log("color updated");
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255); // range from 0 to 255
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;  //random color
}