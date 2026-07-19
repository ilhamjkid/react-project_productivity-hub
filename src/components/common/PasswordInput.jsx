import { useState } from "react";
import TextInput from "./TextInput.jsx";

export default function PasswordInput({
  label,
  forId,
  name,
  value,
  defaultValue,
  placeholder,
  onChange,
  validationMessage,
  inputBgColor = "bg-slate-800",
  btnBgColor = "bg-slate-900",
  size = "md",
}) {
  const [isHidden, setIsHidden] = useState(true);

  const sizeVariants = {
    input: {
      sm: "rounded-l-sm py-2 px-4 text-sm",
      md: "rounded-l-md py-3 px-5 text-base",
      lg: "rounded-l-lg py-4 px-6 text-lg",
    },
    button: {
      sm: "min-w-18 rounded-r-sm py-2 px-4 text-xs",
      md: "min-w-20 rounded-r-md py-3 px-5 text-sm",
      lg: "min-w-22 rounded-r-lg py-4 px-6 text-base",
    },
  };

  return (
    <TextInput
      label={label}
      forId={forId}
      validationMessage={validationMessage}
      size={size}
    >
      <div className="flex w-full flex-nowrap">
        <input
          type={isHidden ? "password" : "text"}
          id={forId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          className={`relative z-10 w-full placeholder:text-slate-400 focus:z-20 focus:outline-2 focus:outline-blue-500 focus:outline-solid ${inputBgColor} ${sizeVariants.input[size]}`}
        />
        <button
          type="button"
          onClick={() => setIsHidden(!isHidden)}
          className={`relative z-10 cursor-pointer text-center focus:z-20 focus:outline-2 focus:outline-blue-500 focus:outline-solid ${btnBgColor} ${sizeVariants.button[size]}`}
        >
          {isHidden ? "Show" : "Hide"}
        </button>
      </div>
    </TextInput>
  );
}
