import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-950">
      <h1 className="mb-6 text-2xl text-slate-200">Page Not Found</h1>
      <Link
        to="/"
        className="text-blue-500 underline hover:opacity-80 focus:opacity-80 focus:outline-none"
      >
        Back to Dashboard
      </Link>
    </section>
  );
}
