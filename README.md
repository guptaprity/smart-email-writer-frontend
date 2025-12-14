# Smart Email Writer – Frontend (React)

## 🚀 About The Project
The **Smart Email Writer Frontend** is a React application that provides a user-friendly interface for generating professional email content.  
It works by interacting with a backend API (Spring Boot) that processes your input and returns a formatted email response. :contentReference[oaicite:0]{index=0}

This repository contains only the **frontend part** of the full-stack Smart Email Writer project.

---

## 🧠 Features
✔ Take user input for email content  
✔ Choose a desired tone (e.g., friendly, professional)  
✔ Call backend API to generate polished email replies  
✔ Display formatted email results  
✔ Simple and responsive React UI

---

## 🛠 Tech Stack
- **React** (JavaScript)  
- **Axios** for API requests  
- **Vite** for fast development & build  
- **CSS / HTML** for styling

---

## 📥 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/guptaprity/smart-email-writer-frontend.git
```

### 2. Navigate into project
```   
cd smart-email-writer-frontend
```
## 4. Install dependencies
```
npm install
```
## 5. Start the app
```
npm start
```

✨ The app should open in the browser at:
```
http://localhost:3000
```
🔗 Backend API Requirement

This frontend app needs the Spring Boot backend running
to function properly.

API Endpoint:
```
POST http://localhost:8080/api/email/generate
```

If the backend is not running, the frontend will not be able to generate emails.

### 🧩 Project Structure
public/        → Static files  
src/           → React components & logic  
.gitignore     → Ignored files (node_modules, build, etc.)  
package.json   → Project settings & dependencies  

### 📌 Future Improvements

✔ Add tone dropdown (professional, casual, formal, etc.)
✔ Add error handling UI
✔ Input validation
✔ Deploy frontend (Netlify / Vercel)
✔ Connect to deployed backend API


## Prity Kumari
📍 Frontend Developer (React)
GitHub: https://github.com/guptaprity

