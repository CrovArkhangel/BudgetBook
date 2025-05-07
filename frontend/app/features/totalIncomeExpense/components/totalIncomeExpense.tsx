import type { IncomeExpenseSummary } from "~/routes/_index";
import { IncomeExpenseCard } from "./incomeExpenseCard";

type Props = {
    incomeExpenseSummary: IncomeExpenseSummary[];
};

export const TotalIncomeExpense: React.FC<Props> = ({
    incomeExpenseSummary,
}) => {
    return (
        <div className="w-5/6">
            {incomeExpenseSummary.map((summary) => (
                <IncomeExpenseCard summary={summary} />
            ))}
        </div>
    );
};
