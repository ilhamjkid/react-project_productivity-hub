import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AppDataContext, AuthContext } from "../../context/Contexts.js";
import Button from "./Button.jsx";

export default function Sidebar() {
  const authContext = useContext(AuthContext);
  const appDataContext = useContext(AppDataContext);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    function resetHiddenState(e) {
      if (e.target.innerWidth >= 1024) {
        setIsHidden(true);
      }
    }
    window.addEventListener("resize", resetHiddenState);
    return () => window.removeEventListener("resize", resetHiddenState);
  }, []);

  function handleClickBtnSignOut() {
    authContext.currentUserDispatch({ type: "LOGOUT_USER" });
  }

  function handleClickBtnDeleteAcc() {
    appDataContext.tasksDispatch({
      type: "DELETE_TASKS_BY_USER",
      payload: { userId: authContext.currentUser.id },
    });
    appDataContext.habitsDispatch({
      type: "DELETE_HABITS_BY_USER",
      payload: { userId: authContext.currentUser.id },
    });
    appDataContext.notesDispatch({
      type: "DELETE_NOTES_BY_USER",
      payload: { userId: authContext.currentUser.id },
    });
    authContext.usersDispatch({
      type: "DELETE_USER",
      payload: { id: authContext.currentUser.id },
    });
    authContext.currentUserDispatch({ type: "LOGOUT_USER" });
  }

  return (
    <aside className="fixed top-0 right-0 left-0 w-full lg:static lg:max-w-80">
      <div className="relative w-full">
        <div className="relative z-20 flex w-full flex-nowrap items-center justify-between border-b border-slate-900 bg-slate-950 p-5 lg:justify-center">
          <h2 className="text-2xl font-semibold text-slate-200 lg:text-center lg:text-xl">
            Productivity Hub
          </h2>
          <button
            type="button"
            className="flex cursor-pointer flex-col gap-1.5 focus:outline-none lg:hidden"
            onClick={() => setIsHidden((prev) => !prev)}
          >
            <span
              className={`h-1 w-8 rounded-sm bg-slate-200 duration-200 ease-in-out ${!isHidden ? "translate-y-2.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`h-1 w-8 rounded-sm bg-slate-200 duration-200 ease-in-out ${!isHidden ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-1 w-8 rounded-sm bg-slate-200 duration-200 ease-in-out ${!isHidden ? "-translate-y-2.5 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>
        <div
          className={`absolute inset-0 z-10 flex min-h-screen w-full flex-col justify-between bg-slate-950 pt-18 lg:translate-x-0 lg:pt-16 lg:transition-none ${isHidden ? "-translate-x-full" : "duration-400 ease-in-out"}`}
        >
          <div className="flex w-full flex-col gap-5 p-5 lg:gap-4">
            <NavLink
              to="/"
              onClick={() => setIsHidden(true)}
              className={({ isActive }) =>
                `rounded-lg py-4 text-center text-xl text-slate-200 hover:opacity-80 focus:opacity-80 focus:outline-2 focus:outline-blue-500 focus:outline-solid lg:py-3 lg:text-lg ${isActive ? "bg-blue-500" : "bg-slate-800"}`
              }
            >
              Tasks
            </NavLink>
            <NavLink
              to="/habits"
              onClick={() => setIsHidden(true)}
              className={({ isActive }) =>
                `rounded-lg py-4 text-center text-xl text-slate-200 hover:opacity-80 focus:opacity-80 focus:outline-2 focus:outline-blue-500 focus:outline-solid lg:py-3 lg:text-lg ${isActive ? "bg-blue-500" : "bg-slate-800"}`
              }
            >
              Habits
            </NavLink>
            <NavLink
              to="/notes"
              onClick={() => setIsHidden(true)}
              className={({ isActive }) =>
                `rounded-lg py-4 text-center text-xl text-slate-200 hover:opacity-80 focus:opacity-80 focus:outline-2 focus:outline-blue-500 focus:outline-solid lg:py-3 lg:text-lg ${isActive ? "bg-blue-500" : "bg-slate-800"}`
              }
            >
              Notes
            </NavLink>
          </div>
          <div className="flex w-full flex-col gap-4 p-5">
            <h2 className="text-center text-2xl font-semibold text-slate-200 lg:text-xl">
              Hi, {authContext.currentUser.firstName}{" "}
              {authContext.currentUser.lastName}!
            </h2>
            <div className="grid w-full grid-cols-2 gap-2">
              <Button onClick={handleClickBtnSignOut} bgColor="bg-red-500">
                SIGN OUT
              </Button>
              <Button onClick={handleClickBtnDeleteAcc} bgColor="bg-red-500">
                DELETE ACC
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
