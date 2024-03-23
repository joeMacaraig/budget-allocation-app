"use client";
//budget

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudget = (event) => {
    setNewBudget(event.target.value);
  };

  return (
    <div className="flex items-center px-4 py-4 border bg-slate-200 rounded-md w-full">
      <span className="text-slate-600 w-[125px]">Budget: £{budget}</span>
      <input
        className="w-full pl-2"
        type="number"
        step="10"
        value={newBudget}
        onChange={() => handleBudget}
      />
    </div>
  );
};
