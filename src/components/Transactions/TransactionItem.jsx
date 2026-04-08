const TransactionItem = ({ transaction }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-3 rounded-xl mb-2">
      <div>
        <p className="text-white">{transaction.title}</p>
        <p className="text-gray-400 text-sm">{transaction.category}</p>
      </div>

      <div
        className={
          transaction.type === "expense"
            ? "text-red-400"
            : "text-green-400"
        }
      >
        ₹{transaction.amount}
      </div>
    </div>
  );
};

export default TransactionItem;