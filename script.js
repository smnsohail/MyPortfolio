// Typing Effect
let typingText = "Sohil M Nadaf";
let index = 0;
let typingSpeed = 150;

function type() {
    if (index < typingText.length) {
        document.getElementById("typing-text").innerHTML += typingText.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

window.onload = type;

// Menu Toggle for Responsive Navigation
document.getElementById("menu-icon").addEventListener("click", function() {
    const navList = document.getElementById("nav-right-list");
    navList.classList.toggle("active");
});
