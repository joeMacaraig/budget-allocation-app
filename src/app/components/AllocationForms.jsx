"use client";

//allocation form

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const AllocationForm = (props) => {
  const { dispatch, remaining } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds  £" + remaining);
      setCost("");
      return;
    }
    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
      alert(`reduced ${name} by ${cost}`);
      setCost("");
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
      alert(`added ${cost} to ${name}`);
      setCost("");
    }
  };
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center">
        <label className="border text-slate-600 bg-slate-200 px-4 py-2 rounded-l-lg">
          Department
        </label>
        <select
          className="border-2 px-4 py-2"
          onChange={(event) => setName(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          <option value="Marketing" name="marketing">
            {" "}
            Marketing
          </option>
          <option value="Sales" name="sales">
            Sales
          </option>
          <option value="Finance" name="finance">
            Finance
          </option>
          <option value="HR" name="hr">
            HR
          </option>
          <option value="IT" name="it">
            IT
          </option>
          <option value="Admin" name="admin">
            Admin
          </option>
        </select>
      </div>
      <div className="flex items-center">
        <label className="border text-slate-600 bg-slate-200 px-4 py-2 rounded-l-lg">
          Allocation
        </label>
        <select
          className="border-2 px-4 py-2"
          onChange={(event) => setAction(event.target.value)}
        >
          <option value="Add" name="Add">
            Add
          </option>
          <option value="Reduce" name="Reduce">
            Reduce
          </option>
        </select>
      </div>
      <div>
        <input
          required="required"
          type="number"
          id="cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
          className="border border-black px-4 py-2"
        />
      </div>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
          onClick={submitEvent}
        >
          Save
        </button>
      </div>
    </div>
  );
};
