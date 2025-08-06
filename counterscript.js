let count = 0;
const counter = document.getElementById('counter');
const body = document.body;

// Functions to update count
function increase() {
  count++;
  updateCounter();
}

function decrease() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}

function updateCounter() {
  counter.textContent = count;
}

// Function to change background color every 2s
setInterval(() => {
  const color = getRandomColor();
  body.style.backgroundColor = color;
}, 2000);

// Generate random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
