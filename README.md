# AuthFlow – Secure Authentication

A full-stack authentication application using JWT (JSON Web Tokens). Users can register, log in, access a protected products page, and log out securely. The React frontend talks to a RESTful Node.js/Express backend backed by MongoDB.

## 📑 Table of Contents

- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Project Structure](#-project-structure)
- [Installation and Setup](#️-installation-and-setup)
- [API Endpoints](#-api-endpoints)
- [Authentication and Authorization Flow](#-authentication-and-authorization-flow)
- [Middleware](#️-middleware)
- [Database](#️-database)
- [Notes](#-notes)

## 🚀 Features

### Frontend

- **User Registration:** Register a new account using email and password.
- **User Login:** Authenticate existing users with their credentials.
- **JWT Authentication:** Store the authentication token in local storage after successful login.
- **Protected Products Page:** Fetch and display products only for authenticated users.
- **Logout:** Clear the stored JWT token and redirect users to the login page.
- **Form Validation:** Handle missing inputs and authentication errors.
- **Responsive UI:** Styled using Tailwind CSS.

### Backend

- **User Registration:** Register users using email and password.
- **Password Hashing:** Securely hash passwords using bcrypt before storing them.
- **User Login:** Authenticate users by verifying their credentials.
- **JWT Authentication:** Generate JWT tokens after successful login.
- **Token Verification:** Middleware to verify JWT tokens and authorize protected routes.
- **Protected Routes:** Restrict access to resources based on valid authentication tokens.
- **Product API:** Provide static product data through an authenticated endpoint.
- **MongoDB Integration:** Store user information using MongoDB and Mongoose.
- **Error Handling:** Handle invalid credentials, duplicate accounts, missing fields, and invalid tokens.

## 🛠️ Technologies Used

| Frontend | Backend |
|---|---|
| React.js | Node.js |
| Vite | Express.js |
| Tailwind CSS | MongoDB |
| Axios | Mongoose |
| React Router DOM | JSON Web Token (jsonwebtoken) |
| Lucide React | bcrypt |
| | dotenv |
| | CORS |

## 📁 Project Structure

```text
abhay_task36/
│
├── frontend/
│   ├── public/
│   │   └── authflow.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── Logout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── signup.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Products.jsx
│   │   │
│   │   ├── services/
│   │   │   └── authService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   ├── config/
    │   │   └── db.js
    │   │
    │   ├── controllers/
    │   │   ├── authController.js
    │   │   └── productController.js
    │   │
    │   ├── data/
    │   │   └── products.js
    │   │
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   │
    │   ├── models/
    │   │   └── User.js
    │   │
    │   ├── routes/
    │   │   ├── authRoutes.js
    │   │   └── productRoutes.js
    │   │
    │   ├── utils/
    │   │   ├── authUtils.js
    │   │   └── jwtUtils.js
    │   │
    │   └── server.js
    │
    ├── .env
    ├── .gitignore
    └── package.json
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Set Up the Backend

Start the backend first, since the frontend depends on it for authentication and product requests.

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your actual MongoDB connection string and a strong JWT secret.

> **Note:** Never commit your `.env` file or expose your JWT secret.

Start the development server:

```bash
npm run dev
```

The backend API will be available at `http://localhost:3000`.

### 3. Set Up the Frontend

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🔗 API Endpoints

The frontend communicates with the Express.js backend using Axios.

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate an existing user |
| GET | `/protected` | Access a protected route |

### Product Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Retrieve protected product data |

Protected API requests must include the JWT in the following format:

```text
Authorization: Bearer <token>
```

## 🔐 Authentication and Authorization Flow

1. A user submits their email and password for registration.
2. The backend validates the provided credentials.
3. The password is hashed using bcrypt.
4. The user details are stored in MongoDB.
5. During login, the backend retrieves the user using their email.
6. bcrypt compares the submitted password with the stored password hash.
7. If the credentials are valid, a JWT is generated using the user's ID.
8. The frontend receives the JWT and stores it in local storage.
9. For protected requests (such as fetching products), the frontend sends the JWT through the `Authorization` header.
10. Authentication middleware verifies the token using the JWT secret.
11. If valid, the request proceeds to the protected controller; otherwise, access is denied.
12. On logout, the frontend removes the JWT from local storage and redirects the user to the login page.

## 🛡️ Middleware

The `verifyToken` middleware handles authentication for protected routes. It:

- Extracts the JWT from the `Authorization` header.
- Checks whether the token exists.
- Verifies the token using the JWT secret.
- Attaches decoded token information to the request object.
- Allows or denies access based on token validity.

## 🗄️ Database

MongoDB is used to store registered users. The `User` model includes:

| Field | Description |
|---|---|
| email | User's email address |
| password | Bcrypt-hashed password |
| timestamps | Automatically tracks creation and update times |

Product information is maintained as static data in the backend.

## 📌 Notes

- The backend server must be running for authentication and product requests to work.
- MongoDB is used by the backend to store user credentials.
- Passwords are hashed before being stored in the database.
- JWT verification is handled by backend authentication middleware.
- The frontend uses local storage to maintain the authentication token.

---

**AuthFlow – Secure Authentication**