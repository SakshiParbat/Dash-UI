import { useState } from "react";
import { getInsights } from "../../utils/calculateInsights";

const InsightsSummary = ({ transactions }) => {
  const [open, setOpen] = useState(false);

  const {
    totalIncome,
    totalExpense,
    highestCategory,
    currentMonthTotal,
    lastMonthTotal,
  } = getInsights(transactions);

  return (
    <div className="mt-6">
      
      {/* 🔥 MAIN CARD (Transaction जैसा) */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-gray-800 p-4 rounded-xl cursor-pointer"
      >
        <div className="flex justify-between text-white">
          <span>Insights</span>
          <span>{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* 🔥 EXPAND CONTENT */}
      {open && (
        <div className="bg-gray-900 mt-2 p-4 rounded-xl text-white space-y-2">
          
          <div className="flex justify-between">
            <span>Total Income</span>
            <span className="text-green-400">₹{totalIncome}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Expense</span>
            <span className="text-red-400">₹{totalExpense}</span>
          </div>

          <div className="flex justify-between">
            <span>Top Category</span>
            <span>{highestCategory}</span>
          </div>

          <div className="border-t border-gray-700 pt-2 mt-2">
            <p className="text-sm text-gray-400">Monthly Comparison</p>
            <p>This Month: ₹{currentMonthTotal}</p>
            <p>Last Month: ₹{lastMonthTotal}</p>
          </div>

        </div>
      )}
    </div>
  );
};

export default InsightsSummary;