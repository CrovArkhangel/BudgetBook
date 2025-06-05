import { ExpensePieChart } from "~/features/totalIncomeExpense/components/expensePieChart";
import type { Route } from "../+types/root";
import { TotalIncomeExpense } from "../features/totalIncomeExpense/components/totalIncomeExpense";
import { useEffect, useState } from "react";
import { graphqlClient } from "../lib/graphql-client";
import { GET_USERS } from "../graphql/queries";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Topページ" },
        { name: "description", content: "収支の概要を閲覧できます" },
    ];
}

type User = {
    id: string;
    name: string;
};

export type IncomeExpense = {
    date: Date;
    //      収入　 　　　支出
    type: "Income" | "Expense";
    category?: String;
    amount: number;
    memo: String;
};

export type IncomeExpenseSummary = {
    //      収入　 　　　支出
    type: "Income" | "Expense";
    totalamount: number;
};

export default function Home() {
    const incomeExpenseSummary: IncomeExpenseSummary[] = [
        {
            type: "Income",
            totalamount: 300000,
        },
        {
            type: "Expense",
            totalamount: 200000,
        },
    ];
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        graphqlClient
            .request<{ users: User[] }>(GET_USERS)
            .then((data) => setUsers(data.users))
            .catch((err) => setError(err.message));
    }, []);
    return (
        <div className="grid grid-cols-3 h-full">
            <p>{error}</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <div className="flex items-center justify-center">
                <TotalIncomeExpense
                    incomeExpenseSummary={incomeExpenseSummary}
                />
            </div>
            <div className="col-span-2">
                <ExpensePieChart />
                <div className="grid grid-cols-4 space-x-4 space-y-8">
                    <div className="flex space-x-2 items-center">
                        <div className="w-14 h-10 rounded bg-lime-300" />
                        <p className="text-2xl">家賃</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-14 h-10 rounded bg-cyan-300" />
                        <p className="text-2xl">食費</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-14 h-10 rounded bg-orange-300" />
                        <p className="text-2xl">電気代</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-14 h-10 rounded bg-purple-300" />
                        <p className="text-2xl">ガス代</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-14 h-10 rounded bg-yellow-300" />
                        <p className="text-2xl">水道代</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-14 h-10 rounded bg-pink-300" />
                        <p className="text-2xl">その他</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
