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

export const ExpensePieChart: React.FC = () => {
    return (
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
    );
};
