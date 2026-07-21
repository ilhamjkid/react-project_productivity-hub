import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/Contexts.js";
import Sidebar from "../components/common/Sidebar.jsx";

export default function DashboardLayout() {
  const authContext = useContext(AuthContext);

  if (authContext.currentUser === null) {
    return <Navigate replace to="/signin" />;
  }

  return (
    <div className="flex flex-nowrap bg-slate-900">
      <Sidebar />
      <main className="h-screen w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
