import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import type { Route } from "../+types/root";
import { TotalIncomeExpense } from "../features/totalIncomeExpense/components/totalIncomeExpense";
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from "recharts";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

const invoices = [
    {
        invoice: "家賃",
        paymentStatus: "家賃",
        totalAmount: "100000円",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "ガス代",
        paymentStatus: "ガス",
        totalAmount: "4500円",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "水道代",
        paymentStatus: "水道",
        totalAmount: "2500円",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "電気代",
        paymentStatus: "電気",
        totalAmount: "450円",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "食費",
        paymentStatus: "コンビニ弁当",
        totalAmount: "500円",
        paymentMethod: "PayPal",
    },
    {
        invoice: "趣味",
        paymentStatus: "ミニマセット買い",
        totalAmount: "6000円",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "食費",
        paymentStatus: "のり弁",
        totalAmount: "356円",
        paymentMethod: "Credit Card",
    },
];

export function meta({}: Route.MetaArgs) {
    return [
        { title: "支出の詳細" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function ExpenseDetail() {
    return (
        <div className="my-5 mx-8">
            <div className="flex w-full items-center mb-5">
                <p className="text-xl text-nowrap pl-2">支出合計</p>
                <div className="flex w-full justify-end">
                    <p className="text-4xl underline">
                        250000
                        <span className="text-xl ">円</span>
                    </p>
                </div>
            </div>
            <div className="flex w-full items-center mb-2 mx-2">
                <p className="text-nowrap">支出内訳</p>
                <div className="flex w-full justify-end">
                    <Button variant={"outline"}>フィルター</Button>
                </div>
            </div>
            <Table>
                <TableHeader className="border-b-2">
                    <TableRow className="grid grid-cols-12">
                        <TableHead className="col-span-1 mr-2 flex items-center">
                            カテゴリ
                        </TableHead>
                        <TableHead className="col-span-3 flex items-center">
                            使い道
                        </TableHead>
                        <TableHead className="col-span-3 flex items-center">
                            日時
                        </TableHead>
                        <TableHead className="col-span-2 flex items-center justify-center">
                            金額
                        </TableHead>
                        <TableHead className="col-span-2 flex items-center">
                            決済方法
                        </TableHead>
                        <TableHead className="flex items-center"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border-b">
                    {invoices.map((invoice) => (
                        <TableRow
                            key={invoice.invoice}
                            className="grid grid-cols-12 text-lg"
                        >
                            <TableCell className="col-span-1 font-medium">
                                {invoice.invoice}
                            </TableCell>
                            <TableCell className="col-span-3">
                                {invoice.paymentStatus}
                            </TableCell>
                            <TableCell className="col-span-3">
                                2024年4月30日
                            </TableCell>
                            <TableCell className="col-span-2 text-right pr-10">
                                {invoice.totalAmount}
                            </TableCell>
                            <TableCell className="col-span-2">
                                {invoice.paymentMethod}
                            </TableCell>
                            <TableCell className="text-sm flex items-center justify-center">
                                詳細
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link to={"/"}>
                <Button variant={"ghost"}>戻る</Button>
            </Link>
        </div>
    );
}
