const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-gray-900 p-4 text-white rounded-xl mt-6">
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex justify-between border-b border-gray-700 py-2"
        >
          <span>{t.title}</span>
          <span className={t.type === "expense" ? "text-red-400" : "text-green-400"}>
            ₹{t.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;