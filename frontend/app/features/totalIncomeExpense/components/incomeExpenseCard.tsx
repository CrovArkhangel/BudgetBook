import { BiDetail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";

type Props = {
    //                   収入　 　　　支出
    incomeExpenseType: "Income" | "Expense";
    amount: number;
};

export const IncomeExpenseCard: React.FC<Props> = ({
    incomeExpenseType,
    amount,
}) => {
    return (
        <div className="m-5">
            <div className="flex items-center">
                <p className="text-lg text-nowrap">
                    {incomeExpenseType == "Income" ? (
                        <>収入合計</>
                    ) : (
                        <>支出合計</>
                    )}
                </p>
                <div className="flex justify-end w-full">
                    <FaPlus size={25} />
                </div>
            </div>
            <div className="flex justify-end w-full">
                <p className="text-4xl underline">
                    {amount}
                    <span className="text-xl">円</span>
                </p>
                <Link to={"/expense/detail"}>
                    <BiDetail size={40} />
                </Link>
            </div>
        </div>
    );
};
