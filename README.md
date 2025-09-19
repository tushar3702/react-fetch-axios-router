# React API Fetch Project

This project demonstrates how to fetch API data using **fetch** and **axios**, display the results on separate pages with **React Router v6**, and style the UI with **Bootstrap 5**.

## 🚀 Features
- Fetch API data in **two ways**:
  - `fetch` → Posts API
  - `axios` → Todos API
- Two separate pages:
  - `/` → Todos Page
  - `/posts` → Posts Page
- Navigation with **React Router v6**
- Simple **Error Page** for invalid routes
- Responsive UI with **Bootstrap**

## 🛠️ Tech Stack
- React 18
- React Router v6
- Bootstrap 5
- Axios & Fetch API

## 📂 Project Structure

src/
├── api/
│ ├── fetch.js # Fetch API for Posts
│ └── axios.js # Axios API for Todos
├── components/
│ ├── Navbar.jsx
│ └── ErrorPage.jsx
├── ShowPosts.jsx # Posts Page
├── ShowTodos.jsx # Todos Page
└── App.jsx # Main App with Router

