function Input({
  text,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <main className="flex flex-col gap-1 items-center  p-4">
      <h3>{label}</h3>
      <input
        className="flex border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none items-center w-[800px]"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </main>
  );
}

export default Input;
