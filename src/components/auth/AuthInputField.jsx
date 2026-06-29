export default function AuthInputField({
  forId,
  label,
  value,
  onChange,
  children,
  validationMessage,
}) {
  return (
    <div className="w-full flex flex-col gap-y-1">
      <label htmlFor={forId} className="text-xl ml-2">
        {label}
      </label>
      {children || (
        <input
          type="text"
          id={forId}
          value={value}
          onChange={onChange}
          className="w-full bg-slate-800 text-xl py-3 px-4 rounded-lg focus:outline-2 focus:outline-solid focus:outline-blue-500"
        />
      )}
      {validationMessage && <p className="text-red-500 text-sm italic">{validationMessage}</p>}
    </div>
  );
}
