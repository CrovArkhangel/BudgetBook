import type { Route } from "../+types/root";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { FilterDialog } from "~/features/expenseDetail/components/filterDialog";
import { DetailTable } from "~/features/expenseDetail/components/detailTable";

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
                        200000
                        <span className="text-xl ">円</span>
                    </p>
                </div>
            </div>
            <div className="flex w-full items-center mb-2 mx-2">
                <p className="text-nowrap">支出内訳</p>
                <div className="flex w-full justify-end">
                    <FilterDialog />
                </div>
            </div>
            <DetailTable />
            <Link to={"/"}>
                <Button variant={"ghost"} className="mt-5">
                    戻る
                </Button>
            </Link>
        </div>
    );
}
