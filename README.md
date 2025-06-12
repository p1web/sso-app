# 🛡️ SSO Login App (Node.js + Google OAuth2 + JWT)

A secure Single Sign-On (SSO) login application using **Node.js**, **Express.js**, and **Google OAuth2**, with **JWT token authentication** and **MySQL** integration. This app demonstrates modern backend practices including token-based security, user session management, data validation, and encryption.

---

## 🚀 Features

- 🔐 **Google SSO Login** using OAuth2
- 🔑 **JWT Token Issuance** for authenticated API access
- 🧾 **Protected API Routes** using middleware
- 🧪 **Input Validation** with `express-validator`
- 🔒 **Data Encryption** (name using AES) and Password Hashing (`bcrypt`)
- 🗃️ **MySQL Database Integration**
- 🎯 Follows **RESTful principles** and uses appropriate **HTTP status codes**
- 🌐 Basic frontend using **HTML + JavaScript** (no framework)


---

## 🛠️ Tech Stack

- **Node.js + Express.js**
- **MySQL** for data storage
- **Passport.js** for Google OAuth
- **JWT** (`jsonwebtoken`) for secure stateless authentication
- **Bcrypt** for password hashing
- **Crypto** module for symmetric data encryption
- **Express-validator** for request validation

---

## 📦 Setup Instructions

```bash
### 1. Clone the Repo
git clone https://github.com/your-username/sso_app.git
cd sso_app


### 2. Install Dependencies
npm install

### 3. Configure Environment Variables
Create a .env file in the root:
PORT=5000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-jwt-secret
SESSION_SECRET=session-secret
ENCRYPT_SECRET=your-encryption-secret

### 4. MySQL Setup
Create a database named sso_demo and run:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  iv VARCHAR(32),
  password VARCHAR(255)
);

### 5. Run the App
node app.js

Visit:
http://localhost:5000/index.html
