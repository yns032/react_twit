import { Link } from "react-router-dom";

export default function Topic({ item }) {
    return (
        <Link to='/'
            className="py-3 px-4 hover:bg-white/[0.03] relative"
        >
            <div className="text-[13px] text-[#71767b] leading-4">
                {item.title}
            </div>
            <div className="text-[15px] leading-5">
                {item.topic.type == 'tag' && '#'}{item.topic.value}
            </div>
            {item?.postCount && (
                <div className="text-[13px] text-[#71767b] mt-1 leading-4">
                    {item.postCount} posts
                </div>
            )}
            <button className="absolute flex items-center justify-center rounded-full top-0 right-3 p-1 hover:text-[#1d9bf0]  hover:bg-[#71767b]">
                <svg viewBox="0 0 24 24" width={"18.75px"} height={"18.75px"} >
                    <path fill="currentColor"
                        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
            </button>
        </Link>
    )
}