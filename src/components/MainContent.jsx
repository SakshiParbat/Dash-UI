import { Accessibility, Bell, Droplet, Film, ForkKnife, Goal, Landmark, Search, ShoppingBag, ShoppingBasket, TrendingDown } from 'lucide-react'
import ExpenseSummaryCard from './UI/ExpenseSummaryCard'
import ListItemCard from './UI/ListItemCard'
import AccountCard from './UI/AccountCard'
import Payments from './UI/Payments'



const MainContent = () => {
  return (
    <div className="flex-1 space-y-8">
        {/* Greeting */}

        <div className="p-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl tracking-tight font-bold text-zinc-900 mb-1">
              Welcome back, Sakshi
            </h2>

            <p className="text-sm text-zinc-600">
              Track your spending, manage your budgets, and control your cash flow.
            </p>

          </div>

          <div className="flex items-center space-x-4">

            <button className="p-2 cursor-pointer rounded-full bg-zinc-100 hover:bg-zinc-200 trancition-colors">
              <Search size={18} className="text-zinc-600"/>
            </button>

            <button className="p-2 cursor-pointer rounded-full bg-zinc-100 hover:bg-zinc-200 trancition-colord">
              <Bell size={18} className="text-zinc-600"/>
            </button>

          </div>

        </div>

        {/* Expenses Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6">
          <ExpenseSummaryCard label="Spent This Month" amount="₹1,71,500" icon={TrendingDown} colorClass="bg-pink-200" iconColor="text-red-500"/>

          <ExpenseSummaryCard label="Budget Remaining" amount="₹41,700" icon={Goal} colorClass="bg-blue-200" iconColor="text-emerald-500"/>

          <ExpenseSummaryCard label="Highest Category" amount="Groceries" icon={Landmark} colorClass="bg-emerald-200" iconColor="text-orange-500"/>

        </div>

        {/* Recent Transactions & Budgets */}

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-6">
            <h3 className="text-lg tracking-tight font-bold text-zinc-900 mb-4">
              Recent Spending
            </h3>

            <div className="space-y-3">
              <ListItemCard 
                title="SuperMarket Run" 
                subtitle="Groceries" 
                value="-₹7,900.90" 
                valueColor="text-red-600"
                src="/user-2.png" 
              />

              <ListItemCard 
                title="Online Subscription" 
                subtitle="Software" 
                value="-₹1,850.87" 
                valueColor="text-red-600" 
                src="/user-3.png"
              />

              <ListItemCard 
                title="ATM Withdrawal" 
                subtitle="Cash" 
                value="-₹9,300.99" 
                valueColor="text-red-600"
                src="/user-4.png" 
              />
              
              <ListItemCard 
                title="Paycheck Deposit" 
                subtitle="Income" 
                value="+₹3,24,589.82" 
                valueColor="text-green-600" 
                src="/user-5.png"
              />

            </div>
          </div>

          {/* Budgets Overview */}

          <div className="p-6">

            <h3 className="text-lg tracking-tight font-bold text-zinc-900 md-4 flex   justify-between items-center">
             My Budgets

              <button className="text-sm font-normal cursor-pointer text-blue-600 hover:underline">
              Manage All
              </button>
            </h3>

            <div className="space-y-3">
              <AccountCard 
                name="Groceries" 
                description="Spending: ₹41,700 / ₹55,600" 
                actionLabel="75% Used" 
                actionColor="bg-red-100 text-red-700" 
                Icon={ShoppingBasket} 
                bgColor="bg-emerald-700"
              />

              <AccountCard 
                name="Resturants" 
                description="Spending: ₹11,000 / ₹27,700" 
                actionLabel="40% Used" 
                actionColor="bg-green-100 text-green-700" 
                Icon={ForkKnife} 
                bgColor="bg-amber-100"
                iconColor="text-amber-700"
              />

              <AccountCard 
                name="Utilities" 
                description="Spending: ₹18,500 / ₹18,500" 
                actionLabel="100% Used" 
                actionColor="bg-red-500 text-white" 
                Icon={Droplet} 
                bgColor="bg-blue-100"
                iconColor="text-blue-700"
              />

              <AccountCard 
                name="Entertainment" 
                description="Spending: ₹4,600 / ₹13,800" 
                actionLabel="33% Used" 
                actionColor="bg-blue-100 text-blue-700" 
                Icon={Film} 
                bgColor="bg-pink-100"
                iconColor="text-pink-700"
              />

            </div>

          </div>
        </div>

        {/* Schedule Payments */}

        <Payments />

    </div>
  )
}

export default MainContent
