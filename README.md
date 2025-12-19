🏋️ FitTrack – Gym Management MERN Application

A full-stack Gym Management System built using the MERN stack (MongoDB, Express, React, Node.js) that helps manage workouts, bootcamps, trainers, and user interactions with a modern, responsive UI.

🚀 Features
✅ Workout Sessions

View featured workout sessions

Categorized training programs

Clean and responsive UI

✅ Bootcamp Management

Featured bootcamps display

Strength, Cardio, HIIT, Yoga, and more

Structured content sections

✅ Contact & Email System

Contact form for user inquiries

Email notifications using Nodemailer

Secure email handling

✅ Frontend (React)

Modern UI built with React & Vite

Responsive gym landing page

Axios-based API calls

✅ Backend (Node & Express)

RESTful APIs

Clean route and controller structure

Secure environment configuration

🛠️ Tech Stack
Frontend

React

Vite

Axios

CSS / Tailwind (if used)

Backend

Node.js

Express.js

Nodemailer

Database

MongoDB (Local / Atlas) (optional if extended)

📁 Project Structure
fittrack-gym-app/
│── backend/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   │   └── sendEmail.js
│   ├── app.js
│   └── config.env
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── package.json
│   └── vite.config.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/kaneshak79/fittrack-gym-app.git
cd fittrack-gym-app

🔧 Backend Setup
cd backend
npm install


Create config.env file:

PORT=4000
FRONTEND_URL=http://localhost:5173
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password


Run backend:

npm start


Backend runs at:

http://localhost:4000

💻 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔥 API Endpoints
Contact / Email

POST /send/mail → Send contact email

🏁 Project Status

✔️ UI Design Complete
✔️ Backend API Working
✔️ Email Integration Done
✔️ Frontend Connected
✔️ Fully Functional MERN App

👩‍💻 Author

Kanesha K
MERN Stack Developer | Full-Stack Developer
