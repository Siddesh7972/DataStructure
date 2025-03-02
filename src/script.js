// script.js

const startBtn = document.getElementById("startBtn");
const stackContainer = document.querySelector(".stack");

// String to reverse
const str = "Hello, World!";
let index = 0;
let stack = [];

// Function to push characters onto the stack
function pushCharacter(char) {
    const charDiv = document.createElement("div");
    charDiv.classList.add("character");
    charDiv.innerText = char;
    stackContainer.appendChild(charDiv);
    setTimeout(() => {
        charDiv.style.opacity = 1;
        charDiv.style.transform = "translateY(0)";
    }, 100);
    stack.push(char);
}

// Function to pop characters from the stack
function popCharacter() {
    if (stack.length === 0) return;
    const charDiv = stackContainer.lastElementChild;
    charDiv.classList.add("pop-animation");
    setTimeout(() => {
        stackContainer.removeChild(charDiv);
        stack.pop();
    }, 500);
}

// Function to animate the whole process
function animateStack() {
    // Push characters one by one
    const pushInterval = setInterval(() => {
        if (index < str.length) {
            pushCharacter(str[index]);
            index++;
        } else {
            clearInterval(pushInterval);
            // Once all characters are pushed, start popping them out
            setTimeout(() => {
                const popInterval = setInterval(() => {
                    if (stack.length > 0) {
                        popCharacter();
                    } else {
                        clearInterval(popInterval);
                    }
                }, 500);
            }, 1000); // Wait a bit before starting to pop
        }
    }, 500); // Push a character every 500ms
}

// Event listener for the button to start the animation
startBtn.addEventListener("click", () => {
    index = 0; // Reset the index
    stackContainer.innerHTML = ""; // Clear the stack container
    animateStack(); // Start the animation
});
