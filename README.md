# 🔐 Login System

A straightforward login system built with **Node.js**, **EJS**, and **JavaScript** as part of my MERN stack learning journey. This system provides secure user authentication with personalized dashboards and session management.

🔗 **GitHub Repository**: [https://github.com/Nashid-k/Login-System](https://github.com/Nashid-k/Login-System)  
📦 **Stack**: Node.js | EJS | JavaScript | Express

---

## 🎯 Project Overview

This login system serves as a foundational component for user authentication and authorization within web applications. It demonstrates the integration of backend (Node.js) and frontend (EJS and JavaScript) technologies to create a seamless user experience.

Throughout my journey of learning the MERN stack, this project helped me gain valuable experience in handling user authentication and session management in web development. It's a foundational step towards building more complex and secure applications.

---

## ✨ Key Features

1. **🔒 User Authentication**
   - Secure login using user credentials
   - Session-based authentication
   - Input validation and error handling

2. **👤 Personalized Dashboard**
   - Customized content based on user data
   - Dynamic rendering with EJS templates
   - User-specific welcome messages

3. **🚪 Logout Mechanism**
   - Secure logout functionality
   - Session termination
   - Privacy and security protection

---

## 🗂️ Project Structure

```
login-system/
├── views/           # EJS templates
├── public/          # Static assets (CSS, JS, images)
├── routes/          # Route handlers
├── router.js        # Main routing logic
├── package.json     # Project dependencies
├── server.js        # Main server file
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nashid-k/Login-System.git
   cd Login-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure credentials**
   - Open `router.js`
   - Modify the default email and password to your preferences
   ```javascript
   // Example configuration in router.js
   const defaultCredentials = {
     email: "your-email@example.com",
     password: "your-password"
   };
   ```

4. **Run the application**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, JavaScript
- **Session Management**: Express-session

---

## 📱 Usage

1. **Login**: Navigate to the login page and enter your configured credentials
2. **Dashboard**: After successful authentication, you'll be redirected to your personalized dashboard
3. **Logout**: Click the logout button to securely end your session

---

## 🔧 Configuration

The system uses hardcoded credentials for demonstration purposes. In `router.js`, you can modify:

```javascript
// Update these values according to your preferences
const USER_EMAIL = "admin@example.com";
const USER_PASSWORD = "password123";
```

> **Note**: For production applications, consider using environment variables and proper database integration for user management.

---

## 🎓 Learning Outcomes

Through this project, I gained experience in:

- **Authentication Flow**: Understanding login/logout mechanisms
- **Session Management**: Handling user sessions securely
- **Template Rendering**: Using EJS for dynamic content
- **Route Protection**: Implementing middleware for secured routes
- **Error Handling**: Managing authentication errors gracefully

---

## 🚀 Future Enhancements

- [ ] Database integration for user storage
- [ ] Password hashing and encryption
- [ ] Registration functionality
- [ ] Remember me feature
- [ ] Password reset mechanism
- [ ] Input validation improvements

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Nashid K** - [nashidk1999@gmail.com](mailto:nashidk1999@gmail.com)

Project Link: [https://github.com/Nashid-k/Login-System](https://github.com/Nashid-k/Login-System)

---

## 🙏 Acknowledgments

- Node.js and Express.js communities for excellent documentation
- EJS templating engine for simplifying dynamic content rendering
- The MERN stack learning community for inspiration and guidance
