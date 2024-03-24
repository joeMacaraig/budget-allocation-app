import { AllocationForm } from "./components/AllocationForms";
import { Budget } from "./components/Budget";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { Remaining } from "./components/Remaining";

export default function Home() {
  return (
    <main className="p-4">
      <h1>Company's Budget Allocation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-2">
        <Budget />
        <Remaining />
        <ExpenseTotal />
      </div>
      <div className="py-4">
        <h1 className="text-2xl">Allocation</h1>
        <ExpenseList />
      </div>
      <div className="py-4">
        <h1 className="text-2xl">Change Allocation</h1>
        <AllocationForm />
      </div>
    </main>
  );
}
