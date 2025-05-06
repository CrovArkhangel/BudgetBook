import { ExpensePieChart } from "~/features/totalIncomeExpense/components/expensePieChart";
import type { Route } from "../+types/root";
import { TotalIncomeExpense } from "../features/totalIncomeExpense/components/totalIncomeExpense";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Topページ" },
        { name: "description", content: "収支の概要を閲覧できます" },
    ];
}

export default function Home() {
    return (
        <div className="grid grid-cols-3 h-full">
            <div className="flex items-center justify-center">
                <TotalIncomeExpense />
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
