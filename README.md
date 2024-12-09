# Quiz App

Quizzacal is a web application that allows users to start, and see results of quizzes. It provides a platform for users to test their knowledge on various topics and share quizzes with others.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSX
- HTML/CSS
- JavaScript

## Features

- User authentication (signup, login, logout)
- Manage quizzes
- Take quizzes and view results

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later) installed
- MongoDB installed and running
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository (or download the ZIP file):

git clone [https://github.com/WattHello/QuizAppFinal.git](https://github.com/WattHello/QuizAppFinal.git)

2. Navigate to the backend and frontend directories:

cd QuizAppFinal
cd backend/frontend

3. Install the required dependencies:

1a. npm install axios bcrypt cors dotenv express jsonwebtoken mongoose uuid (backend)

1b. npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/react-toastify axios browserify-zlib react react-dom react-router-dom react-scripts react-toastify web-vitals (frontend)

## Configuration

1. Create a `.env` file in the backend directory of the project.

2. Add the following environment variables to the `.env` file:

MONGODB_URL=mongodb://localhost:27017/QUIZ-APP

## Running the Application

1. Make sure MongoDB is running on your system.

2. Start the server:

node server.js (backend)

npm start (frontend)

3. Open your web browser and navigate to `http://localhost:3000`.
