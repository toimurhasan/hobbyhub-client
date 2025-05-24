# 🎨 HobbyHub - A Hobby Group Management Platform

**HobbyHub** is a full-stack web application designed for hobby enthusiasts to create, manage, and join hobby groups. Whether you love painting, cooking, gaming, or reading, HobbyHub makes it easy to connect with like-minded individuals.

---

## 🚀 Live Demo

🔗 [HobbyHub](https://hobbyhub-tamim.web.app/)

---

## ✨ Features

### ✅ General Layout

- **Navbar**: Logo, Home, All Groups, Create Group (Private), My Groups (Private), Login/Register
  - If logged in: user photo + display name (on hover) + Logout
- **Main Section**: Controlled by routing
- **Footer**: Eye-catching design with all relevant info

### 🏠 Home Page

- Banner/Slider with 3+ meaningful slides
- Featured Groups (6 max ongoing)
- 2 additional static sections
- Dark/Light Theme Toggle

### 🔐 Authentication

- Email & Password based login/register
- Google or GitHub OAuth (choose one)
- Password Rules:
  - Must have uppercase, lowercase, and minimum 6 characters
- Toast or SweetAlert for feedback
- Redirect on successful login/registration

### ✍️ Create Group (Protected Route)

- Fields:
  - Group Name
  - Hobby Category (dropdown)
  - Description
  - Meeting Location
  - Max Members
  - Start Date
  - Image URL
  - Read-only User Name & Email
- Data is saved to DB and shows a toast on success

### 📋 All Groups

- All groups in card or table layout
- Each has a "See More" button → Group Details

### 🔍 Group Details (Protected Route)

- Displays full group info from DB
- "Join Group" button if the start date is valid
- Shows "Inactive Group" message if expired

### 📂 My Groups (Protected Route)

- Lists groups created by the logged-in user
- Table format with "Update" & "Delete" buttons
- Delete includes a confirmation prompt

### ✏️ Update Group (Protected Route)

- Name & Email are read-only
- Success toast shown on update

### 🧰 Extra Features

- 404 Not Found Page
- Global Loading Spinner
- Animation libraries:
  - ✅ React Tooltip
  - ✅ React Simple Typewriter

---

## 🛠️ Tech Stack

**Frontend:**

- React
- React Router
- Firebase Authentication
- Tailwind CSS + DaisyUI
- Fetch API
- React Tooltip
- React Simple Typewriter

**Backend:**

- Node.js
- Express
- MongoDB
- CORS
- Dotenv
