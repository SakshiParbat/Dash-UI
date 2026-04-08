import React, { useState } from 'react'
import MainContent from './MainContent'
import AccountsExample from './AccountsExample'
import Sidebar from './Sidebar'
import RightPanel from './RightPanel'

// ✅ COMPONENTS
import TransactionList from "./Transactions/TransactionList";
import TransactionFilters from "./Transactions/TransactionFilters";
import InsightsSummary from "./Insights/InsightsSummary";
import AddTransaction from "./Transactions/AddTransaction";

const DashboardLayout = ({ onLogout }) => {

  const [activeTab, setActiveTab] = useState("Dashboard");

  // 🔥 MAIN STATE (GLOBAL)
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: 2000,
      type: "expense",
      category: "Food",
    },
    {
      id: 2,
      title: "Netflix",
      amount: 500,
      type: "expense",
      category: "Entertainment",
    }
  ]);

  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
  });

  // 🔥 ADD TRANSACTION FUNCTION
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      {
        ...newTransaction,
        id: Date.now(),
      },
      ...prev, // 🔥 new item top पर आएगा
    ]);
  };

  // 🔥 FILTER LOGIC
  const filteredTransactions = transactions.filter((t) => {
    return (
      (filters.type === "all" || t.type === filters.type) &&
      (filters.category === "all" || t.category === filters.category)
    );
  });

  return (
    <div className='flex min-h-screen'>

      {/* Sidebar */}
      <div className='w-64 bg-zinc-50 p-6 shadow-md hidden lg:block'>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onLogout={onLogout} 
        />
      </div>

      {/* Main Content */}
      <div className='flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto'>

        {activeTab === "Dashboard" && <MainContent />}
        {activeTab === "Accounts" && <AccountsExample />}

        {/* 🔥 TRANSACTIONS TAB */}
        {activeTab === "Transactions" && (
          <div>
            <h1 className="text-xl font-bold mb-4">Transactions</h1>

            {/* Filters */}
            <TransactionFilters filters={filters} setFilters={setFilters} />

            {/* Add Transaction */}
            <AddTransaction addTransaction={addTransaction} />

            {/* Transaction List */}
            <TransactionList transactions={filteredTransactions} />

            {/* Insights */}
            <InsightsSummary transactions={transactions} />
          </div>
        )}

      </div>

      {/* Right Panel */}
      <div className='w-80 bg-zinc-100 p-4 shadow-md hidden xl:block'>
        <RightPanel />
      </div>

    </div>
  )
}

export default DashboardLayout;