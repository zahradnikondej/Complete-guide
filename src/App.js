import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car insrance",
    amount: 295.95,
    date: new Date(2021, 4, 8),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 800.13,
    date: new Date(2020, 5, 11),
  },
  {
    id: "e4",
    title: "New Phone",
    amount: 452.14,
    date: new Date(2021, 3, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Hello World!"),

  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
