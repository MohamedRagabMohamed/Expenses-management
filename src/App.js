import { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "294",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car Washing",
    amount: "27",
    date: new Date(2020, 7, 28),
  },
  {
    id: "e3",
    title: "TV News",
    amount: "70",
    date: new Date(2021, 1, 18),
  },
  {
    id: "e4",
    title: "Insurance",
    amount: "46",
    date: new Date(2019, 11, 2),
  },
  {
    id: "e5",
    title: "PES",
    amount: "29",
    date: new Date(2021, 10, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EPENSES);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {}
      );
      return await response.json();
    };
    console.log(getData());
  }, []);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
