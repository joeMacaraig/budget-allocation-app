"use client";
//budget

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FaCaretDown } from "react-icons/fa";

export const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);
  const [symbol, setSymbol] = useState("£ Pound");
  const [visible, setVisible] = useState(false);
  const curr = [
    { name: "$ Dollar", sym: "$" },
    { name: "£ Pound", sym: "£" },
    { name: "€ Euro", sym: "€" },
    { name: "₹ Ruppee", sym: "₹" },
  ];

  const handleCurrencyClick = (item) => {
    setSymbol(item.name);
    setNewCurrency(item.sym);
    setVisible(!visible);
  };

  useEffect(() => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency,
    });
    console.log(newCurrency);
  }, [newCurrency, dispatch]);

  return (
    <div className="flex flex-col relative">
      <div
        className="flex items-center px-4 py-4 border text-white bg-green-300 rounded-md w-full hover:cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <div className="mr-1">Currency ({symbol})</div>
        <FaCaretDown />
      </div>
      {visible && (
        <div className="border-green-600 bg-green-300 text-green-600 flex flex-col border rounded-md w-full absolute z-10 top-16 overflow-hidden">
          {curr.map((item) => (
            <div
              className="text-black w-full px-4 py-1.5 hover:bg-white hover:cursor-pointer"
              onClick={() => handleCurrencyClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
