const texts = [
    "A Web Framework",
    "Use Python as Backend",
    "Advanced Security",
    "Fast Development",
    "Open Source",
    "High Performance"
];

let index = 0;
const changingText = document.getElementById("changing-text");

function updateText() {
    changingText.classList.add("fade-out");
    setTimeout(() => {
        changingText.textContent = texts[index];
        index = (index + 1) % texts.length; 
        changingText.classList.remove("fade-out");
        changingText.classList.add("fade-in");
    }, 500); 
    setTimeout(() => {
        changingText.classList.remove("fade-in");
    }, 1000);
}

setInterval(updateText, 3500);  
