"use client";
//budget

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleNewBudget = (event) => {
    setNewBudget(event.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
    console.log(newBudget);
  }, [newBudget, dispatch]);

  return (
    <div className="flex items-center px-4 py-4 border bg-slate-200 rounded-md w-full">
      <span className="text-slate-600 w-[125px]">
        Budget: {currency}
      </span>
      <input
        className="w-full pl-2"
        type="number"
        step={10}
        value={newBudget}
        onChange={handleNewBudget}
      />
    </div>
  );
};
