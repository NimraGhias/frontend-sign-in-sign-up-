# 🔐 Modern Login & Signup Page

A modern, responsive Login and Signup UI built using **HTML, CSS, and JavaScript**. This project features a glassmorphism design, animated background, interactive form transitions, password validation, and custom success/error messages.

## ✨ Features

- 🎨 Modern glassmorphism UI with gradient backgrounds
- 🔄 Animated transition between Login and Signup forms
- 🫧 Floating animated background bubbles
- ✍️ Interactive input focus animations
- 🌊 Ripple effect on buttons
- 🔑 Signup password validation:
  - At least 8 characters
  - At least one uppercase letter (A–Z)
  - At least one lowercase letter (a–z)
  - At least one number (0–9)
  - At least one special character (e.g., @, #, !)
- ✅ Custom success and validation messages
- 📱 Responsive layout for smaller screens

## 🛠️ Technologies Used

- **HTML5** — Page structure and forms
- **CSS3** — Styling, gradients, animations, transitions, and glassmorphism
- **JavaScript** — Form interactions, password validation, and button effects

## 📂 Project Structure

```text
login-signup-page/
├── index.html
├── style.css
└── script.js
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NimraGhias/frontend-sign-in-sign-up-.git
```

### 2. Open the project folder

```bash
cd login-signup-page
```

### 3. Run the project

Open `index.html` in your browser, or use the **Live Server** extension in Visual Studio Code.

## 🧪 Password Validation Examples

| Password | Result |
|---|---|
| `Nimra193!` | Passes the password rules |
| `nimra124!` | Missing uppercase letter |
| `NIMRA122!` | Missing lowercase letter |
| `Nimraaaaa` | Missing number and special character |
| `Ni1!` | Too short and missing required character types |

*Use these examples for testing only, not as real account passwords.*

## 🔒 Security Note

This project demonstrates **frontend UI and client-side password validation**. It does not currently implement real user registration, credential verification, database storage, or secure authentication.

For production use, implement server-side validation, secure password hashing, HTTPS, and appropriate session management. Client-side validation alone is not a security boundary.

## 🎯 Learning Objectives

This project helped me practise:

- Writing semantic HTML forms
- Styling responsive interfaces with CSS
- Using JavaScript event listeners and DOM manipulation
- Implementing password validation with regular expressions
- Creating CSS animations and interactive UI effects
- Debugging and improving a frontend project

