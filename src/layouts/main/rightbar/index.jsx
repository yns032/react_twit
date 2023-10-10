import Topics from "../../../components/topics";
import PremiumSub from "./premiumsub";
import Search from "./search";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr2.5">
            <Search />
            <PremiumSub />
            <Topics />
        </aside>
    )
}