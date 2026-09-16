# Productivity Hub

A simple client-side productivity web application for managing tasks, tracking habits, and taking notes. Built with React and powered by LocalStorage for data persistence.

## 🔑 Key Features

- **Authentication System**: Sign up, sign in, and account deletion with state-based route guards.
- **Task Management**: Full CRUD operations (create, read, edit, delete, toggle status) for user tasks.
- **Habits & Notes Tracker**: Track daily habits and store notes per user session.
- **Global State Management**: Context API combined with `useReducer` for clean, scalable state flow.
- **Local Persistence**: Automatic synchronization with browser `localStorage`.

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome
- **Routing**: React Router
- **Runtime & Package Manager**: Bun

## 📦 Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ilhamjkid/react-project_productivity-hub.git
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Start the development server:**

   ```bash
   bun run dev
   ```

4. **Build for production:**

   ```bash
   bun run build
   ```
