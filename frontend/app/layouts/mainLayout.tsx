import { type ReactNode } from "react";
import { Header } from "~/features/layout/components/header";
import { Circle } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";

type Props = {
    children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-rows-9 h-screen">
            <Header />
            <div className="row-span-8 grid grid-cols-6">
                <div className="border-r">
                    <Accordion type="multiple" className="w-full p-3">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>2025年</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-none pl-6 text-lg space-y-2">
                                    <li>
                                        <div className="flex items-center space-x-2">
                                            <Circle className="h-4 w-4 fill-current text-gray-500" />
                                            <span>5月</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center space-x-2">
                                            <Circle className="h-4 w-4 fill-current text-blue-500" />
                                            <span>4月</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center space-x-2">
                                            <Circle className="h-4 w-4 fill-current text-green-500" />
                                            <span>3月</span>
                                        </div>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>2024年</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-none pl-6 text-lg space-y-2">
                                    <li>
                                        <div className="flex items-center space-x-2">
                                            <Circle className="h-4 w-4 fill-current text-gray-500" />
                                            <span>12月</span>
                                        </div>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>2023年</AccordionTrigger>
                            <AccordionContent>なし</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="col-span-5">{children}</div>
            </div>
        </div>
    );
};
