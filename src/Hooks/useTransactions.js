import { useState } from "react";
import data from "../data/transactions";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState(data);

  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
  });

  // 🔥 ADD NEW TRANSACTION
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { ...newTransaction, id: Date.now() },
    ]);
  };

  return {
    transactions,
    setTransactions,
    filters,
    setFilters,
    addTransaction,
  };
};