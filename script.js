const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 640;

// Load Bird Image
const birdImage = new Image();
birdImage.src = "bird.png"; // Path to your bird sprite

// Game Variables
let bird = { x: 50, y: canvas.height / 2, width: 40, height: 30, velocity: 0, gravity: 0.25, lift: -4 };
let pipes = [];
let frame = 0;
let score = 0;
let bestScore = localStorage.getItem("bestScore") || 0;
let gameOver = false;

// DOM Elements
const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const finalScore = document.getElementById("finalScore");
const bestScoreDisplay = document.getElementById("bestScore");
const restartButton = document.getElementById("restartButton");

// Event Listeners
document.addEventListener("keydown", handleInput);
canvas.addEventListener("click", handleInput);
restartButton.addEventListener("click", restartGame);

// Input Handler
function handleInput() {
  if (gameOver) return;
  if (startScreen.style.display !== "none") {
    startScreen.style.display = "none";
    gameLoop();
  }
  bird.velocity = bird.lift;
}

// Restart Game
function restartGame() {
  gameOverScreen.classList.add("hidden");
  bird.y = canvas.height / 2;
  bird.velocity = 0;
  pipes = [];
  score = 0;
  gameOver = false;
  gameLoop();
}

// Draw Bird
function drawBird() {
  // Draw bird image instead of a rectangle
  ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);
}

// Draw Pipes
function drawPipes() {
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, canvas.height - pipe.bottom, pipe.width, pipe.bottom);
  });
}

// Update Pipes
function updatePipes() {
  if (frame % 90 === 0) {
    let gap = 150;
    let top = Math.random() * (canvas.height - gap - 100) + 50;
    pipes.push({ x: canvas.width, width: 50, top: top, bottom: canvas.height - top - gap });
  }

  pipes.forEach(pipe => {
    pipe.x -= 1.5; // Adjusted speed to match original Flappy Bird

    // Check for collision
    if (
      bird.x < pipe.x + pipe.width &&
      bird.x + bird.width > pipe.x &&
      (bird.y < pipe.top || bird.y + bird.height > canvas.height - pipe.bottom)
    ) {
      gameOver = true;
    }

    // Increment score if pipe is passed
    if (pipe.x + pipe.width < bird.x && !pipe.passed) {
      score++;
      pipe.passed = true;
    }
  });

  // Remove off-screen pipes
  pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);
}

// Update Bird
function updateBird() {
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  // Check for boundaries (only bottom boundary)
  if (bird.y + bird.height > canvas.height) {
    gameOver = true;
  }
}

// Draw Score
function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);
}

// Game Over Screen
function showGameOver() {
  gameOverScreen.classList.remove("hidden");
  finalScore.textContent = score;
  bestScore = Math.max(score, bestScore);
  bestScoreDisplay.textContent = bestScore;
  localStorage.setItem("bestScore", bestScore);
}

// Game Loop
function gameLoop() {
  if (gameOver) {
    showGameOver();
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBird();
  drawPipes();
  drawScore();

  updateBird();
  updatePipes();

  frame++;
  requestAnimationFrame(gameLoop);
}