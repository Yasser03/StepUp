# 🎯 StepUp: Premium Adaptive Learning Platform

**Master Math & Reading with AI-Powered Precision**

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Groq](https://img.shields.io/badge/Groq-Llama_3.3-orange?style=for-the-badge)](https://groq.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**StepUp** is a production-ready, adaptive learning platform designed for KS2 students. It transforms the traditional "drill and kill" approach into an engaging, mastery-based experience using the **Groq LLM (Llama 3.3 70B)** to generate unique, level-appropriate exercises in real-time.

---

## 🌟 Why StepUp?

Most learning apps provide static question banks that students eventually memorize. **StepUp** is different:

- 🧠 **Infinite Variety**: Every problem is generated on-the-fly, ensuring students never see the same question twice.
- 📈 **Mastery-First**: We don't just track completion; we track *internalized knowledge* through streak-based progression.
- ✨ **Premium Experience**: A high-end "Glassmorphism" UI designed to reduce cognitive load and keep kids focused.
- ⚡ **Instant Intelligence**: Powered by Groq for sub-second generation of complex reading passages and math problems.

---

## 📱 UI Walkthrough

### 📊 The Dashboard
The top section of the app provides a real-time snapshot of the student's current session:
- **Accuracy**: A live percentage of correct vs. total answers. Aim for 80%+!
- **Solved**: Total count of problems tackled in the current subject.
- **Streak**: Your most important metric! Shows how many correct answers you've given in a row.

### 🧩 Subject Selection
Easily toggle between **Mathematics** and **Reading** using the large, interactive glass cards. 
> [!NOTE]
> Progress (Level and Step) is tracked independently for each subject.

### 📝 The Worksheet
This is where the magic happens. A minimalist, focused area that presents the AI-generated challenge:
- **Level & Step**: Clearly displayed at the top.
- **Problem Area**: Large, readable text using the child-friendly *Comfortaa* font.
- **Interactive Feedback**: Green/Red sliding overlays provide immediate reinforcement with detailed explanations.
- **Smart Hints**: Stuck? Click the "Need a hint?" button for a gentle nudge from the AI without giving away the answer.

---

## 🧠 The Mastery Engine

StepUp follows a rigorous pedagogical structure inspired by the Kumon method, enhanced by AI.

### 1. Progressive Levels (A → F)
| Level         | Mastery Focus                                  |
| :------------ | :--------------------------------------------- |
| **Level A**   | Foundational Concepts & Rapid Recall           |
| **Level B-D** | Intermediate Application & Pattern Recognition |
| **Level E-F** | Advanced Problem Solving & Critical Thinking   |

### 2. The 10-Step Ladder
Each level consists of **10 Steps**. To progress from Step 1 to Step 2, a student must demonstrate mastery.

### 3. The Mastery Barrier 🚧
Unlike apps that let you pass with 50% luck, StepUp requires a **Streak of 4** correct answers to advance a Step. This ensures the student isn't just guessing but has truly understood the core concept.

---

## 🚀 Quick Start

### Installation
```bash
# Clone the repository
git clone https://github.com/Yasser03/StepUp.git

# Install dependencies
npm install
```

### Configuration
Create a `.env` file in the root directory:
```env
VITE_GROQ_API_KEY=your_gsk_key_here
```

### Development
```bash
npm run dev
```

---

## 🛠️ Tech Stack
- **Frontend**: Vite + React 19 + TypeScript
- **State Management**: Zustand (Atomic, high-performance state)
- **AI Brain**: Groq SDK (Llama 3.3 70B)
- **Visuals**: Lucide React Icons + Custom Glassmorphism CSS System

---

## 👨‍💻 Author

**Dr. Yasser Mustafa**

*AI & Data Science Specialist | Theoretical Physics PhD*

- 🎓 PhD in Theoretical Nuclear Physics
- 💼 10+ years in production AI/ML systems
- 🔬 48+ research publications
- 🏢 Experience: Government (Abu Dhabi), Media (Track24), Recruitment (Reed), Energy (ADNOC)
- 📍 Based in Newcastle Upon Tyne, UK
- 🔗 [LinkedIn](https://www.linkedin.com/in/yasser-mustafa-ai) | [GitHub](https://github.com/yasser03)

---

**StepUp** — *Level up your learning, one step at a time.* 🎯
