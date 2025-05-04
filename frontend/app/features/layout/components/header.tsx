import { Link } from "react-router";

export const Header: React.FC = () => {
    return (
        <div className="border-b-2 border-slate-300">
            <Link to={"/"}>
                <div className="flex h-full items-center pl-3 text-3xl font-bold">
                    BUDGET BOOK
                </div>
            </Link>
        </div>
    );
};
