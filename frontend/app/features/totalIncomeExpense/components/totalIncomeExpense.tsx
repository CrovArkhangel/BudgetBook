import { IncomeExpenseCard } from "./incomeExpenseCard";

export const TotalIncomeExpense: React.FC = () => {
    return (
        <div className="w-5/6">
            <IncomeExpenseCard incomeExpenseType="Income" amount={300000} />
            <IncomeExpenseCard incomeExpenseType="Expense" amount={200000} />
        </div>
    );
};
