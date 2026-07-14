# TaskFlow API

## Project Description

TaskFlow API is a RESTful Backend API developed using Node.js and Express.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

---

## Features

- Get all tasks
- Get task by ID
- Add new task
- Update task
- Delete task
- Input validation
- JSON-based data storage

---

## Technologies Used

- Node.js
- Express.js
- REST API
- JSON
- Postman

---

## Folder Structure

TaskFlow-API/

controllers/

routes/

middleware/

data/

app.js

package.json

README.md

---

## Installation

Clone the repository

```
git clone <repository-url>
```

Install dependencies

```
npm install
```

Start server

```
npm start
```

For development

```
npm run dev
```

---

## API Endpoints

### GET

```
GET /tasks
```

Returns all tasks.

### GET

```
GET /tasks/:id
```

Returns a single task.

### POST

```
POST /tasks
```

Creates a new task.

### PUT

```
PUT /tasks/:id
```

Updates an existing task.

### DELETE

```
DELETE /tasks/:id
```

Deletes a task.

---

## Sample JSON

```json
{
    "name":"Complete Internship",
    "description":"Finish Backend API"
}
```

---

## Author

Kajal Patil

DecodeLabs Internship Project