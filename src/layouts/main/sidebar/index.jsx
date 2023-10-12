import Logo from "./logo";
import Menü from "./menü";

export default function Sidebar() {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen flex flex-col sticky top-0">
            <Logo />
            <Menü />
        </aside>
    )
}