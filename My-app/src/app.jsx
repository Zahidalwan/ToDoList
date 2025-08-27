// App.jsx
import { useState, useEffect } from "react";
import Closing from "./component/closing";
import Input from "./component/input";
import RadioGroup from "./component/radiogrup";
import Button from "./component/button";
import Card from "./component/card";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const handleEdit = (index) => {
    setForm(todos[index]); // isi form dengan data lama
    setTodos(todos.filter((_, i) => i !== index)); // hapus sementara
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const [form, setForm] = useState({
    title: "",
    desc: "",
    status: "To do",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return; // cegah submit kosong
    setTodos([...todos, form]);
    setForm({ title: "", desc: "", status: "To do" });
  };

  return (
    <main className="min-h-screen max-w-[1000px] w-full mx-auto flex flex-col items-center justify-center bg-gray-100 p-6 gap-6">
      <Closing text="To do List" />

      {/* Form Input */}
      <Input
        label="Judul"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Masukkan judul..."
      />
      <Input
        label="Deskripsi"
        name="desc"
        type="textarea"
        value={form.desc}
        onChange={handleChange}
        placeholder="Masukkan deskripsi..."
      />

      <RadioGroup
        label="Status"
        name="status"
        options={["To do", "In Progress", "Done"]}
        value={form.status}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit}>Tambah</Button>

      {/* Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {todos.map((todo, i) => (
          <Card
            key={i}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
            onEdit={() => handleEdit(i)}
            onDelete={() => handleDelete(i)}
          />
        ))}
      </div>

      <Closing text="Copyright 2025" />
    </main>
  );
}

export default App;
