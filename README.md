 # Node.js Express API - Structured RESTful API Project

A demonstration of structured Node.js Express application with organized routing and controllers. This project showcases best practices for organizing Express.js applications by separating routes and controllers into different modules.

## 🚀 Features

- **Structured Architecture**: Organized code structure with separate routes and controllers
- **RESTful API**: Complete CRUD operations for array management
- **Environment Configuration**: Uses dotenv for environment variables
- **Modular Design**: Clean separation of concerns with dedicated modules

## 📁 Project Structure

```
4-Structuring/
├── app.js                 # Main application entry point
├── controller/            # Business logic controllers
│   ├── array-controller.js
│   └── home-controller.js
├── routes/               # Route definitions
│   ├── array-routes.js
│   └── home-routes.js
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

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   app_port=3000
   ```

4. **Start the server**
   ```bash
   node app.js
   ```

The server will start on port 3000 (or the port specified in your `.env` file).

## 📡 API Endpoints

### Home Routes
- `GET /` - Returns the array data

### Array Management API
Base URL: `/api/array`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/array` | Get all array items | - |
| GET | `/api/array/:id` | Get array item by ID | - |
| POST | `/api/array` | Create new array item | `{"name": "string"}` |
| PUT | `/api/array/:id` | Update array item by ID | `{"name": "string"}` |
| DELETE | `/api/array/:id` | Delete array item by ID | - |

### Request/Response Examples

#### Get All Items
```bash
GET /api/array
```
**Response:**
```json
[
  {"id": 1, "name": "sajjad"},
  {"id": 2, "name": "nazari"}
]
```

#### Create New Item
```bash
POST /api/array
Content-Type: application/json

{
  "name": "new item"
}
```
**Response:**
```json
[
  {"id": 1, "name": "sajjad"},
  {"id": 2, "name": "nazari"},
  {"id": 3, "name": "new item"}
]
```

#### Update Item
```bash
PUT /api/array/1
Content-Type: application/json

{
  "name": "updated name"
}
```
**Response:**
```json
{"id": 1, "name": "updated name"}
```

## 🏗️ Architecture Overview

### Controllers
Controllers handle the business logic and data manipulation:

- **`home-controller.js`**: Handles home page logic
- **`array-controller.js`**: Manages array CRUD operations

### Routes
Routes define the API endpoints and connect them to controllers:

- **`home-routes.js`**: Defines home page routes
- **`array-routes.js`**: Defines array management routes

### Main Application
`app.js` serves as the entry point, setting up middleware and connecting routes.

## 🔧 Dependencies

- **express**: Web framework for Node.js
- **dotenv**: Environment variable management

## 🎯 Learning Objectives

This project demonstrates:

1. **Code Organization**: How to structure Express.js applications
2. **Separation of Concerns**: Routes vs Controllers
3. **Modular Design**: Reusable components
4. **RESTful API Design**: Standard HTTP methods and status codes
5. **Environment Configuration**: Using environment variables

## 🚨 Error Handling

The API includes basic error handling:
- 404 errors for not found items
- 400 errors for invalid input (name less than 3 characters)
- Proper HTTP status codes

## 📝 Development Notes

- The array data is stored in memory (resets on server restart)
- Input validation requires names to be at least 3 characters long
- IDs are auto-generated based on array length

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes and demonstrates Node.js Express best practices.

---

**Note**: This is a learning project demonstrating structured Express.js application development. For production use, consider adding database integration, authentication, and more robust error handling.
