import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div className="grid grid-cols-3">
            <div>aaa</div>
            <div className="col-span-2">bbb</div>
        </div>
    );
}
