import Topics from "../../../components/topics";
import Footer from "./footer";
import PremiumSub from "./premiumsub";
import Search from "./search";
import WhoUser from "./whouser";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr2.5">
            <Search />
            <PremiumSub />
            <Topics />
            <WhoUser />
            <Footer />
        </aside>
    )
}