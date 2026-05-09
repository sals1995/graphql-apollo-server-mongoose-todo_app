# GraphQL Apollo Server Mongoose Todo App

A simple Todo API built using **Node.js**, **GraphQL**, **Apollo Server**, and **MongoDB/Mongoose**.

This project demonstrates how to build a backend API using GraphQL with Apollo Server and MongoDB integration through Mongoose.

---

## Features

- GraphQL API with Apollo Server
- MongoDB integration using Mongoose
- CRUD operations for Todos and Users
- GraphQL Queries & Mutations
- Environment variables support using `.env`
- Clean and scalable folder structure
- Easy to extend and customize

---

## Tech Stack

- Node.js
- Express.js
- GraphQL
- Apollo Server
- MongoDB
- Mongoose
- dotenv
- nodemon

---

## Project Structure

```bash
.
├── graphql/
│   ├── resolvers/
│   |   ├── user/
│   |   │   ├── Query.js
│   |   │   └── Mutation.js
│   |   ├── todo/
│   |   │   ├── Query.js
│   |   │   └── Mutation.js
│   |   └── rootResolvers.js
│   └── schema.js
├── models/
│   ├── todo.js
│   └── user.js
├── db.connection.js
├── .env
├── auth.js
├── index.js
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sals1995/graphql-apollo-server-mongoose-todo_app.git
```

### 2. Navigate to the Project Folder

```bash
cd graphql-apollo-server-mongoose-todo_app
```

### 3. Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
DB_NAME=your_db_name
SECRET=your_token_secret
```

---

## Running the Project

### Development Mode

```bash
npm start
```

---

## Server URL

After starting the server:

```bash
http://localhost:3300/graphql
```

or:

```bash
http://localhost:3300/
```

(depending on your Apollo Server configuration)

---

# GraphQL API

## Todo Schema Example

```graphql
type Todo {
  id: ID!
  title: String!
  completed: Boolean!
}
```

---

## Queries

### Get All Todos

```graphql
query {
  todos {
    id
    title
    completed
  }
}
```

### Get Single Todo

```graphql
query {
  todo(id: "TODO_ID") {
    id
    title
    completed
  }
}
```

---

## Mutations

### Create Todo

```graphql
mutation {
  addTodo({todo:{title: "Learn GraphQL"}}) {
    id
    title
    completed
    user{
        id
        name
    }
  }
}
```

## Example Response

```json
{
  "data": {
    "todos": [
      {
        "id": "681b8d1e2b4f2d00123abcd1",
        "title": "Learn GraphQL",
        "completed": false
      }
    ]
  }
}
```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run with nodemon |

---

## Learning Objectives

This project helps in learning:

- GraphQL fundamentals
- Apollo Server setup
- Creating GraphQL schemas
- Writing resolvers
- MongoDB integration with Mongoose
- Backend API architecture
- CRUD operations using GraphQL

---


## License

This project is licensed under the MIT License.

---
