import { BiDetail } from "react-icons/bi";
import { Link } from "react-router";
import { Card } from "../../../components/ui/card";
import { AddDialog } from "./addDialog";
import type { IncomeExpenseSummary } from "~/routes/_index";

type Props = {
    summary: IncomeExpenseSummary;
};

export const IncomeExpenseCard: React.FC<Props> = ({ summary }) => {
    return (
        <Card className="mb-5 p-5">
            <div className="flex items-center mb-5">
                <p className="text-lg text-nowrap">
                    {summary.type === "Income" ? (
                        <p>収入合計</p>
                    ) : (
                        <p>支出合計</p>
                    )}
                </p>
                <div className="flex justify-end w-full">
                    <AddDialog />
                </div>
            </div>
            <div className="flex justify-end items-center gap-2 w-full">
                <p className="text-4xl underline">
                    {summary.totalamount}
                    <span className="text-xl">円</span>
                </p>
                <Link to={"/expense/detail"}>
                    <BiDetail size={30} />
                </Link>
            </div>
        </Card>
    );
};
