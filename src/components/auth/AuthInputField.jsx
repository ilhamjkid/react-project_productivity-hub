export default function AuthInputField({
  forId,
  label,
  value,
  onChange,
  children,
  validationMessage,
}) {
  return (
    <div className="flex w-full flex-col gap-y-1">
      <label htmlFor={forId} className="ml-2 text-xl">
        {label}
      </label>
      {children || (
        <input
          type="text"
          id={forId}
          value={value}
          onChange={onChange}
          className="w-full rounded-lg bg-slate-800 px-4 py-3 text-xl focus:outline-2 focus:outline-blue-500 focus:outline-solid"
        />
      )}
      {validationMessage && (
        <p className="text-sm text-red-500 italic">{validationMessage}</p>
      )}
    </div>
  );
}
