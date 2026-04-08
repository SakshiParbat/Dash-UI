import { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "Food",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount) return;

    addTransaction({
      ...form,
      amount: Number(form.amount),
      date: new Date().toISOString(),
    });

    // reset form
    setForm({
      title: "",
      amount: "",
      type: "expense",
      category: "Food",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-4 rounded-xl mt-4 flex flex-wrap gap-3 items-center"
    >
      {/* Title */}
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, title: e.target.value }))
        }
        className="p-2 rounded bg-zinc-700 text-white w-40"
      />

      {/* Amount */}
      <input
        placeholder="Amount"
        type="number"
        value={form.amount}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, amount: e.target.value }))
        }
        className="p-2 rounded bg-zinc-700 text-white w-32"
      />

      {/* Type */}
      <select
        value={form.type}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, type: e.target.value }))
        }
        className="p-2 rounded bg-zinc-700 text-white"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {/* Category */}
      <select
        value={form.category}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, category: e.target.value }))
        }
        className="p-2 rounded bg-zinc-700 text-white"
      >
        <option value="Food">Food</option>
        <option value="Salary">Salary</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {/* Button */}
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddTransaction;