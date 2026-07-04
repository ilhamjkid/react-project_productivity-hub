import { Outlet } from "react-router";
import Sidebar from "../components/common/Sidebar.jsx";

export default function DashboardLayout() {
  return (
    <div className="flex flex-nowrap bg-slate-900">
      <Sidebar />
      <main className="h-screen w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
