# MERN Stack User Authentication App

This is a MERN stack application that provides user authentication functionalities including signup, signin, and a simple home page.

## Features

- **User Signup:** Register new users with email and password.
- **User Signin:** Authenticate users with registered credentials.
- **Home Page:** Display a simple welcome page after successful signin.
- **Token-based Authentication:** Use JSON Web Tokens (JWT) for secure authentication.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB (with Mongoose)
- **Frontend:** React.js (with React Router)
- **Authentication:** JSON Web Tokens (JWT)
- **Other Libraries:** bcrypt for password hashing, etc.

## File Structure
```
mern-auth/
│
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Signup.js
│ │ │ ├── Signin.js
│ │ │ ├── Home.js
│ │ │ 
│ │ ├── App.js
│ │ ├── index.js
│ │ 
│ ├── package.json
│ 
│
├── config/
│ ├── keys.js
│ 
├── controllers/
│ ├── authController.js
│ 
│
├── models/
│ ├── User.js
│ 
│
├── routes/
│ ├── authRoutes.js
│ 
│
├── app.js
├── package.json
└── 
```
bash


## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Athulraj10/ReactSignupLogin.git
   cd ReactSignupLogin

    Install dependencies:

    bash

npm install
cd client
npm install

Set up environment variables:

Create a .env file in the root directory with:

env

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Run the application:

bash

npm run dev

Access the application in your browser at: http://localhost:3000
