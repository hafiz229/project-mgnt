# Project Management System

A full-stack web application built using **React**, **Node.js**, **Express**, **MongoDB**, and **GraphQL with Apollo Client**. It allows users to manage clients and projects seamlessly with a modern and interactive interface.

---

## ✨ Features

- 📋 **Client List** – View all registered clients.
- 📁 **Project List** – View all projects with detailed information.
- ➕ **Add Client / Add Project** – Easily create new clients or projects.
- ✏️ **Edit Project** – Update the project's status, name, or associated client.
- ❌ **Delete Client** – Removes a client and **all associated projects** (cascading delete).
- ❌ **Delete Project** – Remove individual projects as needed.
- 🔗 **GraphQL API** – Efficient data queries and mutations using Apollo Client.
- 💻 **Responsive UI** – Works well on desktop and mobile.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Apollo Client
- GraphQL
- HTML5, CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- GraphQL

---

## 📁 Folder Structure

```bash
project-mgnt/
├── client/           # React frontend using Apollo Client
│   └── src/
│       ├── components/
│       ├── mutations/  # GraphQL mutations
│       ├── queries/    # GraphQL queries
│       └── ...
├── server/           # Express + GraphQL backend
│   ├── models/       # Mongoose schemas
│   ├── schema/       # GraphQL schema & resolvers
│   └── ...
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/hafiz229/project-mgnt.git
cd project-mgnt
```

### 2. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Configure environment variables

Create a `.env` file in the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the development servers

```bash
# In server directory
npm run dev

# In client directory (in a new terminal)
npm start
```

- Server: `http://localhost:5000/graphql`
- Client: `http://localhost:3000`

---

## 🔄 Cascading Deletion

If a **client is deleted**, all projects associated with that client are automatically deleted on the backend. This is handled in the GraphQL resolvers for data consistency.

---

## ✅ Todo & Enhancements (Optional)

- Add authentication & user roles
- Implement filtering or search
- Add pagination for large lists

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
