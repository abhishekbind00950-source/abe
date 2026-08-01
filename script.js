let score = 0;
const scoreDisplay = document.getElementById('score');
const target = document.getElementById('target');

function moveTarget() {
  // Screen size ke andar random positions Calculate karna
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 120;

  const randomX = Math.floor(Math.random() * maxX) + 10;
  const randomY = Math.floor(Math.random() * maxY) + 60;

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

// Target tap karne par score badhane ka logic
target.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Touch delay hatane ke liye
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

// Click support (testing ke liye)
target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

// Shuruat mein target ko random jagah set karna
moveTarget();