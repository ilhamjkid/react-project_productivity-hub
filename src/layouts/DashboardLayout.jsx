import { Outlet } from "react-router";
import Sidebar from "../components/common/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex flex-nowrap bg-slate-900">
      <Sidebar />
      <main className="h-screen w-full overflow-y-auto pt-18 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
}
