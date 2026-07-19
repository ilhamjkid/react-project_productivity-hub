export default function Button({
  type = "button",
  onClick,
  bgColor = "bg-blue-500",
  size = "md",
  children,
}) {
  const sizeVariants = {
    sm: "rounded-sm py-2 px-4 text-sm",
    md: "rounded-md py-3 px-5 text-base",
    lg: "rounded-lg py-4 px-6 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer font-semibold text-slate-200 hover:opacity-80 focus:opacity-80 focus:outline-2 focus:outline-slate-200 focus:outline-solid ${bgColor} ${sizeVariants[size]}`}
    >
      {children}
    </button>
  );
}
