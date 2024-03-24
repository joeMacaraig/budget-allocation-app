"use client";

//remaining expense

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType =
    totalExpenses > budget
      ? "border-red-500 bg-red-300 text-red-600"
      : "border-green-500 bg-green-300 text-green-600";
  return (
    <div className={`${alertType} flex items-center px-4 py-4 border rounded-md w-full`}>
      <span>Remaining: {currency} {budget - totalExpenses}</span>
    </div>
  );
};