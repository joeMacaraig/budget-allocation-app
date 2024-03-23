"use client";

//expense item

import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

export const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr className="grid grid-cols-4 place-items-start gap-4 p-2">
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td className="">
        <button className="px-3 py-1 border border-black" onClick={(event) => increaseAllocation(props.name)}>+</button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} className=" cursor-pointer"></TiDelete>
      </td>
    </tr>
  );
};