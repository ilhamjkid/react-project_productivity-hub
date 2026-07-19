export default function TextInput({
  type = "text",
  label,
  forId,
  name,
  value,
  defaultValue,
  placeholder,
  cols,
  rows,
  onChange,
  validationMessage,
  bgColor = "bg-slate-800",
  size = "md",
  children,
}) {
  const Element = type === "textarea" ? "textarea" : "input";
  const elementType = type === "textarea" ? undefined : type;
  const sizeVariants = {
    input: {
      sm: "rounded-sm py-2 px-4 text-sm",
      md: "rounded-md py-3 px-5 text-base",
      lg: "rounded-lg py-4 px-6 text-lg",
    },
    label: {
      sm: "px-4 text-base",
      md: "px-5 text-lg",
      lg: "px-6 text-xl",
    },
    validation: {
      sm: "px-4 text-xs",
      md: "px-5 text-sm",
      lg: "px-6 text-base",
    },
  };

  return (
    <div className="flex w-full flex-col gap-1 text-slate-200">
      {label && (
        <label htmlFor={forId} className={sizeVariants.label[size]}>
          {label}
        </label>
      )}
      {children ?? (
        <Element
          type={elementType}
          id={forId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          cols={cols}
          rows={rows}
          onChange={onChange}
          className={`w-full placeholder:text-slate-400 focus:outline-2 focus:outline-blue-500 focus:outline-solid ${bgColor} ${sizeVariants.input[size]}`}
        />
      )}
      {validationMessage && (
        <p className={`text-red-500 italic ${sizeVariants.validation[size]}`}>
          {validationMessage}
        </p>
      )}
    </div>
  );
}
