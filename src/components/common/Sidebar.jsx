import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
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
          <div className="flex w-full flex-col gap-5 p-5 lg:gap-4">
            <h2 className="text-center text-2xl font-semibold text-slate-200 lg:text-xl">
              Hi, Ilham Jaya Kusuma!
            </h2>
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-red-500 py-4 text-center text-xl font-semibold text-slate-200 hover:opacity-80 focus:opacity-80 focus:outline-2 focus:outline-slate-200 focus:outline-solid lg:py-3 lg:text-lg"
            >
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
