/* eslint-disable no-unused-vars */
const TransactionFilters = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 mt-4">
      
      {/* Type Filter */}
      <select
        className="bg-gray-800 text-white p-2 rounded-lg"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, type: e.target.value }))
        }
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category Filter */}
      <select
        className="bg-gray-800 text-white p-2 rounded-lg "
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, category: e.target.value }))
        }
      >
        <option value="all">All Categories</option>
        <option value="Food">Food</option>
        <option value="Salary">Salary</option>
        <option value="Entertainment">Entertainment</option>
      </select>

    </div>
  );
};

export default TransactionFilters;