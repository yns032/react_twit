import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Topic({ item }) {
    return (
        <Link to='/'
            className="py-2 px-4 hover:bg-white/[0.03] relative"
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
            <Popover>
                <Popover.Button>
                    <button className="absolute flex items-center justify-center rounded-full top-0 right-3 p-1 hover:text-[#1d9bf0]  hover:bg-[#71767b]">
                        <svg viewBox="0 0 24 24" width={"18.75px"} height={"18.75px"} >
                            <path fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                        </svg>
                    </button>
                </Popover.Button>
                <Popover.Panel className="absolute bg-black w-[294px] h-[87px] right-4 rounded-xl top-1">
                    <div>
                        <button className="flex items-center py-2 hover:bg-[#20272e] w-full rounded-xl">
                            <svg viewBox="0 0 24 24" width={"30px"} height={"20px"} >
                                <path fill="#fff"
                                    d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
                            </svg>
                            Bununla ilgilenmiyorum
                        </button>
                        <button className="flex items-center mt-2 py-2 hover:bg-[#20272e] w-full  rounded-xl">
                            <svg viewBox="0 0 24 24" width={"30px"} height={"20px"}>
                                <path fill="#fff"
                                    d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
                            </svg>
                            Bu trend zararlı veya spam içerikli
                        </button>
                    </div>
                </Popover.Panel>
            </Popover>
        </Link>
    )
}