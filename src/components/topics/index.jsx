import { Link } from "react-router-dom";
import { topics } from "../../utils/consts";
import Topic from "./topic";

export default function Topics() {
    return (
        <div className="w-[348px] mt-3 rounded-2xl border-[#16181c] bg-[#16181c] mb-4" >

            <h3 className="h-12 text-[20px] py-3 px-4 pr-44 flex items-center"> Sizin için trendler</h3>
            <div className="grid">
                {topics.map((topic, index) => (<Topic item={topic} key={index} />))}
            </div>
            <Link to="/trends" className="w-[347px] h-[51px] flex text-[#1d9bf0] items-center pl-3 py-3 hover:bg-[#383b3f] rounded-xl">
                Daha Fazla Göster
            </Link>
        </div>
    )
}