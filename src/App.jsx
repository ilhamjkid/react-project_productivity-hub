import { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router";
import { AppDataContext, AuthContext } from "./context/Contexts.js";
import { tasksInit, tasksReducer } from "./reducers/tasksReducer.js";
import { habitsInit, habitsReducer } from "./reducers/habitsReducer.js";
import { notesInit, notesReducer } from "./reducers/notesReducer.js";
import { usersInit, usersReducer } from "./reducers/usersReducer.js";
import { currentUserReducer } from "./reducers/currentUserReducer.js";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import HabitsPage from "./pages/HabitsPage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Loading from "./components/common/Loading.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, tasksDispatch] = useReducer(tasksReducer, null, tasksInit);
  const [habits, habitsDispatch] = useReducer(habitsReducer, null, habitsInit);
  const [notes, notesDispatch] = useReducer(notesReducer, null, notesInit);
  const [users, usersDispatch] = useReducer(usersReducer, null, usersInit);
  const [currentUser, currentUserDispatch] = useReducer(
    currentUserReducer,
    null,
  );

  useEffect(() => {
    localStorage.setItem("prodhub_tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("prodhub_habits", JSON.stringify(habits));
  }, [habits]);
  useEffect(() => {
    localStorage.setItem("prodhub_notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("prodhub_users", JSON.stringify(users));
  }, [users]);
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("prodhub_current_user", JSON.stringify(currentUser));
    }
  }, [isLoading, currentUser]);
  useEffect(() => {
    let currentUserInitTimeout = setTimeout(() => {
      const currentUserJSON = localStorage.getItem("prodhub_current_user");
      const currentUserData = JSON.parse(currentUserJSON);
      if (currentUserData) {
        currentUserDispatch({
          type: "LOGIN_USER",
          payload: currentUserData,
        });
      }
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(currentUserInitTimeout);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <AuthContext
      value={{
        users,
        usersDispatch,
        currentUser,
        currentUserDispatch,
      }}
    >
      <AppDataContext
        value={{
          tasks,
          tasksDispatch,
          habits,
          habitsDispatch,
          notes,
          notesDispatch,
        }}
      >
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
      </AppDataContext>
    </AuthContext>
  );
}
