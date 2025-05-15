# 🕒 Analog Clock

A simple and elegant analog clock built using **HTML**, **CSS**, and **JavaScript**. The clock displays real-time hour, minute, and second hands, along with numbers arranged around the clock face.

---

## 🌟 Features

- Real-time updating hour, minute, and second hands  
- Dynamically generated clock numbers (1–12)  
- Responsive layout using Flexbox  
- Clean and minimal CSS styling  
- No external libraries required  

---

## 📁 Project Structure

analog-clock/
├── index.html # Main HTML file
├── style.css # CSS styles for the clock
├── script.js # JavaScript for clock functionality
├── preview.png # Screenshot preview of the clock
└── README.md # Project documentation



---

## 🚀 How to Run

1. **Clone or download** the repository to your local machine.  
2. Open `index.html` in any modern web browser (e.g., Chrome, Firefox).  
3. You’ll see a functional analog clock displayed in the center of the screen.

> 💡 No servers or build tools are needed—just open the file in a browser.

---

## 🧠 How It Works

- The clock numbers (1–12) are generated dynamically using JavaScript and positioned in a circular layout using `transform: rotate() translate()`.
- The hour, minute, and second hands are updated in real-time using `setInterval()` every second.
- Time is converted into rotation angles, which are applied to each hand using CSS `transform`.

---

## 🛠 Technologies Used

- **HTML5** – page structure  
- **CSS3** – visual styling and positioning  
- **Vanilla JavaScript** – DOM manipulation and clock logic  

---

## 📸 Preview

![Analog Clock Preview](preview.png)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Created as a beginner-friendly project to demonstrate real-time DOM updates and CSS transformations in a visual and interactive way.
