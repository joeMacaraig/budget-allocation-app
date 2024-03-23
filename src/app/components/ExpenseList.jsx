"use client";

// expense list

import React, { useContext } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

export const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <table className="table-auto w-full">
      <thead className="">
        <tr className="grid grid-cols-4 gap-4 place-items-start p-2">
          <th>Department</th>
          <th>Allocated Budget</th>
          <th>Increase by 10</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};
