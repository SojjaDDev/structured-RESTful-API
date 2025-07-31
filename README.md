# Advanced RESTful API with MySQL & JWT Authentication

A comprehensive Node.js Express API with MySQL database integration, JWT authentication, and structured architecture. Perfect for backend development portfolios.

**Note:** Currently running with in-memory storage for immediate testing. MySQL integration is ready but temporarily disabled.

## 🚀 Features

* **JWT Authentication**: Secure user registration and login
* **RESTful API**: Complete CRUD operations for items management
* **Structured Architecture**: Organized code with controllers and routes
* **Error Handling**: Comprehensive error management
* **CORS Support**: Cross-origin resource sharing enabled
* **MySQL Database**: Ready for persistent data storage (currently in-memory)

## 📁 Project Structure

```
4-Structuring/
├── app.js                 # Main application entry point
├── config/
│   └── database.js        # MySQL database configuration
├── controller/            # Business logic controllers
│   ├── array-controller.js
│   ├── auth-controller.js
│   └── home-controller.js
├── middleware/
│   └── auth.js           # JWT authentication middleware
├── routes/               # Route definitions
│   ├── array-routes.js
│   ├── auth-routes.js
│   └── home-routes.js
├── database/
│   └── schema.sql        # MySQL database schema
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 4-Structuring
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server (in-memory mode)**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

4. **Optional: Set up MySQL database**
   - Install MySQL on your system
   - Create a database and run the schema:
   ```bash
   mysql -u root -p < database/schema.sql
   ```
   - Uncomment database connections in `app.js` and controllers

5. **Optional: Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   app_port=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=restful_api_db
   DB_PORT=3306
   JWT_SECRET=your-super-secret-jwt-key
   ```

## 📡 API Endpoints

### Authentication API

Base URL: `/api/auth`

| Method | Endpoint       | Description             | Request Body       |
| ------ | -------------- | ----------------------- | ------------------ |
| POST   | /api/auth/register | Register new user   | {"username": "string", "email": "string", "password": "string"} |
| POST   | /api/auth/login | Login user        | {"email": "string", "password": "string"} |

### Items Management API

Base URL: `/api/array`

| Method | Endpoint       | Description             | Request Body       |
| ------ | -------------- | ----------------------- | ------------------ |
| GET    | /api/array     | Get all items          | -                 |
| GET    | /api/array/:id | Get item by ID         | -                 |
| POST   | /api/array     | Create new item        | {"name": "string", "description": "string"} |
| PUT    | /api/array/:id | Update item by ID      | {"name": "string", "description": "string"} |
| DELETE | /api/array/:id | Delete item by ID      | -                 |

### Request/Response Examples

#### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Create Item (with authentication)
```bash
POST /api/array
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "name": "New Item",
  "description": "Item description"
}
```

## 🏗️ Architecture Overview

### Database Schema
- **Users Table**: User authentication and profile data
- **Items Table**: Main data with foreign key to users

### Controllers
- **`auth-controller.js`**: User registration and login
- **`array-controller.js`**: Items CRUD operations
- **`home-controller.js`**: Home page logic

### Middleware
- **`auth.js`**: JWT token verification

## 🔧 Dependencies

* **express**: Web framework for Node.js
* **mysql2**: MySQL database driver
* **bcryptjs**: Password hashing
* **jsonwebtoken**: JWT authentication
* **cors**: Cross-origin resource sharing
* **dotenv**: Environment variable management

## 🎯 Learning Objectives

This project demonstrates:

1. **Authentication**: JWT-based user authentication
2. **API Security**: Password hashing and token validation
3. **Error Handling**: Comprehensive error management
4. **Code Organization**: Modular architecture
5. **RESTful Design**: Standard HTTP methods and status codes
6. **Database Integration**: Ready for MySQL (currently in-memory)

## 🚨 Error Handling

The API includes comprehensive error handling:

* 400 errors for invalid input
* 401 errors for authentication failures
* 404 errors for not found resources
* 500 errors for server issues

## 📝 Development Notes

* Currently using in-memory storage for immediate testing
* Passwords are hashed using bcrypt
* JWT tokens expire after 24 hours
* Input validation for all endpoints
* CORS enabled for frontend integration
* MySQL integration ready but disabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes and demonstrates Node.js Express best practices.

---

**Note**: This is a learning project demonstrating advanced Express.js application development with JWT authentication. Perfect for backend development portfolios!
