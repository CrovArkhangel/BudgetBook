import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

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

export const DetailTable: React.FC = () => {
    return (
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
    );
};
