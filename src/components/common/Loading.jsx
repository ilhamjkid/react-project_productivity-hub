export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-3 bg-slate-950">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-r-transparent"></div>
      <h3 className="text-center text-3xl font-medium text-slate-200">
        Loading...
      </h3>
    </div>
  );
}
