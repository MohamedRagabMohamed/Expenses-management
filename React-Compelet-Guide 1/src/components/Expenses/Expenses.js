import { useState } from "react";
import Card from "../UI/Card";
import ExpesnsesFiltred from "./ExpensesFiltred";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredyear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpesnsesFiltred
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}
export default Expenses;
