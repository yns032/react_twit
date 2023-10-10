import Logo from "./logo";
import Menü from "./menü";

export default function Sidebar(){
    return(
        <aside className="w-[275px] min-h-screen">
           <Logo/>
           <Menü/>
        </aside>
    )
}