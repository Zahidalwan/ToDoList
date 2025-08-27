export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const base =
    "py-2 px-4 rounded-lg text-white align-center text-center w-[100px] m-5";
  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black ${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
