import { useState } from "react";
import AuthInputField from "./AuthInputField.jsx";

export default function AuthPasswordInput({ forId, label, value, onChange, validationMessage }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <AuthInputField forId={forId} label={label} validationMessage={validationMessage}>
      <div className="w-full flex flex-nowrap rounded-lg overflow-hidden focus-within:outline-2 focus-within:outline-solid focus-within:outline-blue-500">
        <input
          type={isHidden ? "password" : "text"}
          id={forId}
          value={value}
          onChange={onChange}
          className="w-full bg-slate-800 text-xl py-3 px-4 rounded-l-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setIsHidden(!isHidden)}
          className="min-w-20 bg-slate-900 text-center text-sm py-3 px-4 rounded-r-lg cursor-pointer hover:opacity-80 focus:opacity-80 focus:outline-none"
        >
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
    </AuthInputField>
  );
}
