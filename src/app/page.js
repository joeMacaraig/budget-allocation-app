import { AllocationForm } from "./components/AllocationForms";
import { Budget } from "./components/Budget";
import { Currency } from "./components/Currency";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { Remaining } from "./components/Remaining";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-medium mb-4">Company's Budget Allocation</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
        <Budget />
        <Remaining />
        <ExpenseTotal />
        <Currency />
      </div>
      <div className="py-8">
        <h1 className="text-2xl font-medium">Allocation</h1>
        <ExpenseList />
      </div>
      <div className="">
        <h1 className="text-2xl font-medium pb-4">Change Allocation</h1>
        <AllocationForm />
      </div>
    </main>
  );
}
