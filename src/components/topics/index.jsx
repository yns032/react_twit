import { topics } from "../../utils/consts";
import Topic from "./topic";

export default function Topics() {
    return (
        <div className="w-[348px] mt-3 rounded-2xl border-[#16181c] bg-[#16181c] mb-4" >

            <h3 className="h-12 text-[20px] py-3 px-4 pr-44 flex items-center"> Sizin için trendler</h3>
            <div className="grid">
                {topics.map((topic, index) => (<Topic item={topic} key={index} />))}
            </div>
        </div>
    )
}