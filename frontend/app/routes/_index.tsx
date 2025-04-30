import type { Route } from "../+types/root";
import { TotalIncomeExpense } from "../features/totalIncomeExpense/components/totalIncomeExpense";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 40000 },
    { name: "Group B", value: 10000 },
    { name: "Group C", value: 5000 },
    { name: "Group D", value: 2500 },
    { name: "Group D", value: 10000 },
    { name: "Group D", value: 50000 },
];
const COLORS = [
    "#CCFF99",
    "#99FFFF",
    "#FFCC99",
    "#CC99FF",
    "#FFFF99",
    "#FF99CC",
];

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
                <ResponsiveContainer width="100%" height="70%">
                    <PieChart
                    // onMouseEnter={this.onPieEnter}
                    >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={100}
                            outerRadius={150}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"
                            startAngle={90} // 時計回りの上から開始 (0度が3時なので、90度が12時)
                            endAngle={-270}
                            label={{ fontSize: "15px", fill: "000000" }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
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
