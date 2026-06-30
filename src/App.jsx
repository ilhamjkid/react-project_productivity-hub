import { Routes, Route } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import HabitsPage from "./pages/HabitsPage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<TasksPage />} />
        <Route path="habits" element={<HabitsPage />} />
        <Route path="notes" element={<NotesPage />} />
      </Route>
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
