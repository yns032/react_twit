import { usersection } from "../../../../components/usersection";

export default function WhoUser() {
    return (
        <div className="w-[350px] h-[280px] rounded-2xl bg-[#16181c]">
            <h2 className="text-[20px] px-4 py-4 text-[#e7e9ea]">Kimi takip etmeli</h2>
            {usersection.map((user, index) => (
                <button className="flex py-3 hover:bg-[#21272e]  w-full">
                    <img src={user.avatar} className="rounded-full ml-2" />
                    <div className="flex-col text-left ml-3 flex items-start">
                        <div className=" w-[148px] h-[21px]">
                            {user.fullname}
                        </div>
                        <div className="">
                            {user.username}
                        </div>
                    </div>
                    <button className="rounded-full ml-10 py-1 px-3 bg-white text-black">
                        Takip Et
                    </button>
                </button>
            ))}
        </div>
    )
}