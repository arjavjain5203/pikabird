# **PikaBird**

A simple **Flappy Bird-inspired** 2D game built using **HTML, CSS, and JavaScript** with the **Canvas API**. Control a bird (or Pikachu!), navigate through pipes, and try to achieve the highest score!

**Play the game here:** [https://arjavjain5203.github.io/pikabird/](https://arjavjain5203.github.io/pikabird/)

---

## **Features**
- **Game Mechanics**:
  - Control a bird (or Pikachu) that falls due to gravity.
  - Press the **spacebar** or **tap the screen** to make the bird flap and move upwards.
  - Navigate through gaps between pipes without colliding.
  - The game speeds up gradually to increase difficulty.
  - Game ends if the bird hits a pipe or falls below the screen.

- **Visual Design**:
  - Custom bird sprite (replaceable with your own image).
  - Green pipes with random heights.
  - Scrolling ground and sky background.

- **Scoring System**:
  - Earn **1 point** for every pipe successfully passed.
  - Live score counter displayed in the top-left corner.
  - High score saved using `localStorage`.

- **UI Elements**:
  - **Start Screen**: "Tap to Start" overlay.
  - **Game Over Screen**: Displays final score and best score with a restart button.

- **Responsive Design**:
  - Works on both **desktop and mobile browsers**.
  - Touch controls for mobile users.

---

## **How to Play**
1. Open the game in your browser: [https://arjavjain5203.github.io/pikabird/](https://arjavjain5203.github.io/pikabird/).
2. Press the **spacebar** or **tap the screen** to start the game.
3. Keep the bird flying by tapping or pressing the spacebar to flap.
4. Navigate through the gaps between the pipes.
5. Avoid colliding with pipes or falling to the ground.
6. Try to achieve the highest score!

---

## **Setup Instructions**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/arjavjain5203/pikabird.git
   cd pikabird
   ```

2. **Open the Game**:
   - Open the `index.html` file in your browser.

3. **Customize**:
   - Replace the `bird.png` file with your own sprite to change the bird character.
   - Modify the `style.css` file to customize the game's appearance.

---

## **File Structure**
```
pikabird/
│
├── index.html          # Main HTML file
├── style.css           # CSS for styling the game
├── script.js           # JavaScript for game logic
├── bird.png            # Bird sprite image
└── README.md           # Project documentation
```

---

## **Technologies Used**
- **HTML5**: Structure of the game.
- **CSS3**: Styling and layout.
- **JavaScript (Canvas API)**: Game logic and rendering.
- **localStorage**: Saving and retrieving high scores.

---

## **Future Enhancements**
- Add **animations** for the bird flapping and pipe movement.
- Include **sound effects** for flapping, collisions, and scoring.
- Add **difficulty levels** (e.g., increasing speed over time).
- Implement a **leaderboard** using Firebase or a simple backend.
- Add **night mode** or different background themes.

---

## **Credits**
- Developed by **Arjav Jain**.
- Inspired by the original **Flappy Bird** game.

---

## **License**
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as you see fit.

---


Enjoy the game! Let me know if you have any questions or suggestions. 🚀
