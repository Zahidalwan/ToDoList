export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col items-center m-6">
      {label && <p className="mb-1 font-medium text-gray-700">{label}</p>}
      <div className="flex gap-4 items-center">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              className="h-4 w-4 text-blue-500"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
