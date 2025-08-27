import Button from "./button";

function Card({ title, desc, status, onEdit, onDelete }) {
  const statusColors = {
    "To do": "text-red-500",
    "In Progress": "text-yellow-500",
    Done: "text-green-500",
  };

  return (
    <div className="flex flex-col bg-white shadow rounded-lg p-4 text-center space-y-2 max-w-[400px] items-center border border-gray-200">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <p
        className={`text-xs mt-2 font-medium ${
          statusColors[status] || "text-blue-600"
        }`}
      >
        {status}
      </p>

      <div className="flex gap-2 mt-2">
        <Button variant="warning" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Hapus
        </Button>
      </div>
    </div>
  );
}

export default Card;
