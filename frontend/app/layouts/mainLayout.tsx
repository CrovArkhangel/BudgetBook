import { type ReactNode } from "react";
import { Header } from "~/features/layout/components/header";

type Props = {
    children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-rows-9 h-screen">
            <Header />
            <div className="row-span-5">{children}</div>
        </div>
    );
};
