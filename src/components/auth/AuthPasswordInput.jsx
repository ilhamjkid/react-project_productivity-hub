import { useState } from "react";
import AuthInputField from "./AuthInputField.jsx";

export default function AuthPasswordInput({
  forId,
  label,
  value,
  onChange,
  validationMessage,
}) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <AuthInputField
      forId={forId}
      label={label}
      validationMessage={validationMessage}
    >
      <div className="flex w-full flex-nowrap overflow-hidden rounded-lg focus-within:outline-2 focus-within:outline-blue-500 focus-within:outline-solid">
        <input
          type={isHidden ? "password" : "text"}
          id={forId}
          value={value}
          onChange={onChange}
          className="w-full rounded-l-lg bg-slate-800 px-4 py-3 text-xl focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setIsHidden(!isHidden)}
          className="min-w-20 cursor-pointer rounded-r-lg bg-slate-900 px-4 py-3 text-center text-sm hover:opacity-80 focus:opacity-80 focus:outline-none"
        >
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
    </AuthInputField>
  );
}
