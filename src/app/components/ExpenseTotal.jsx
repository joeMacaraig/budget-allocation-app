"use client";

//display total expense

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="border-blue-800 bg-blue-300 text-blue-600 flex items-center px-4 py-4 border rounded-md w-full">
      <span>Spent: £{totalExpenses}</span>
    </div>
  );
};
