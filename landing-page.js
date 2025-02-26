const heading = document.getElementById("animated-text");

let colorIndex = 0;

const colors = ["blue", "green", "orange"];



function animateText() {

  heading.style.color = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;

}



setInterval(animateText, 1000); // Change color every second
