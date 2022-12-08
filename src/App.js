import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
      amount: 452.15,
      date: new Date(2021, 3, 9),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
export default App;
