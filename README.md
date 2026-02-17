⏱️ **React Stopwatch Timer**

A clean and interactive Stopwatch application built using React. This project demonstrates proper interval handling using modern React Hooks.


🚀 **Live Demo:**
(https://saumya-react-stopwatch.netlify.app/)

---

📌 **Features:**

- ▶ Start the timer
- ⏹ Stop the timer
- 🔄 Reset the timer
- ⏱ Real-time updates
- 🎨 Simple and centered UI

---

🛠 **Tech Stack:**

- React
- JavaScript (ES6)
- CSS
- Vite

---

🧠 **React Concepts Used:**

- Functional Components
- `useState` for managing time state
- `useRef` for storing interval ID
- `useEffect` for cleanup on component unmount
- `setInterval()` and `clearInterval()`
- Event Handling
- Preventing multiple interval creation using conditional checks

---

🔍 **Interval Handling & Optimization:**

To ensure the stopwatch runs accurately and prevents unintended behavior, proper interval management has been implemented.

✅ **Preventing Multiple Intervals:**

When the Start button is clicked multiple times, multiple `setInterval()` instances can be created, causing the timer to run faster than real time.

To prevent this, the interval ID is stored using `useRef`, and a check is added before creating a new interval:

    if (timerRef.current !== null) return;

This ensures that only one interval runs at a time.

---

✅ **Proper Cleanup (Memory Leak Prevention):**

To avoid memory leaks and unwanted background execution:

- The interval is cleared when Stop is clicked.

- The interval is also cleared when the component unmounts.

      useEffect(() => {
      return () => clearInterval(timerRef.current);
      }, []);

---

🎯 **Why This Matters:**

- Prevents accelerated state updates

- Avoids unnecessary re-renders

- Improves performance

- Demonstrates proper side-effect management in React

---

📂 **Project Structure:**

    Stopwatch-Timer
    │
    ├── src
    │ ├── App.jsx
    │ ├── App.css
    │ └── main.jsx
    │
    ├── package.json
    └── vite.config.js


---

 ⚙ **Installation & Setup:**

1. *Clone the repository:*

       git clone https://github.com/saumya-30-verma/Stopwatch-Timer.git


2. *Go to the project folder:*

       cd Stopwatch-Timer


3. *Install dependencies:*
 
       npm install


4. *Run the development server:*

       npm run dev
