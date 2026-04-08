import { getInsights } from "../../utils/calculateInsights";

const MonthlyComparison = ({ transactions }) => {
  const { currentMonthTotal, lastMonthTotal, difference } =
    getInsights(transactions);

  return (
    <div className="bg-gray-900 p-4 rounded-xl mt-4 text-white">
      <h2 className="text-lg font-semibold mb-2">Monthly Comparison</h2>

      <div className="flex justify-between text-sm text-gray-400">
        <span>This Month</span>
        <span>₹{currentMonthTotal}</span>
      </div>

      <div className="flex justify-between text-sm text-gray-400">
        <span>Last Month</span>
        <span>₹{lastMonthTotal}</span>
      </div>

      <p
        className={`mt-2 font-semibold ${
          difference >= 0 ? "text-red-400" : "text-green-400"
        }`}
      >
        {difference >= 0
          ? `You spent ₹${difference} more`
          : `You saved ₹${Math.abs(difference)} more`}
      </p>
    </div>
  );
};

export default MonthlyComparison;