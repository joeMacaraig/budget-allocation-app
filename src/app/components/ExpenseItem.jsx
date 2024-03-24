"use client";

//expense item

import React, { useContext } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

export const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

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

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr className="grid grid-cols-5 place-items-start gap-4 p-2">
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td className="">
        <button
          onClick={(event) => increaseAllocation(props.name)}
        >
          <FaPlusCircle className="text-green-600" size="2em" />
        </button>
      </td>
      <td className="">
        <button
          onClick={(event) => decreaseAllocation(props.name)}
        >
          <FaMinusCircle className="text-red-700" size="2em" />
        </button>
      </td>
      <td>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          className=" cursor-pointer"
        ></TiDelete>
      </td>
    </tr>
  );
};
