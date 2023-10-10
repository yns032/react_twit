import { Popover } from "@headlessui/react"
import { BsThreeDots } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'

export default function AltMore() {
    const account = useSelector(state => state?.auth?.currentAccount)
    const dispatch = useDispatch()

    return (
        <div className="bottom-0">
            <Popover className="p-2 w-full px-4 py-4 ">
                <Popover.Button className="mb-2 py-2 px-4 rounded-full  hover:bg-[#eff3f41a]">
                    <div className="flex gap-8 flex-row items-center justify-center">
                        <img className="w-8 h-8 rounded-full object-cover" src={account?.avatar} />
                        <div className="text-left text-sm">
                            <div >
                                {account?.username}
                            </div>
                            <div>
                                {account?.fullName}
                            </div>
                        </div>
                        <div>
                            <BsThreeDots />
                        </div>
                    </div>

                </Popover.Button>
                <Popover.Panel className=" flex flex-col border-neutral-950 absolute   bottom-32 rounded-xl w-[300px] h-[150px] bg-black ">

                    <button className="pr-24 pt-2 my-4 rounded text-lg py-3  hover:bg-[#eff3f41a]">
                        <div className="flex gap-8 flex-row items-center justify-center">
                            <img className="w-8 h-8 rounded-full object-cover" src={account?.avatar} />
                            <div className="text-left text-sm">
                                <div >
                                    {account?.username}
                                </div>
                                <div>
                                    {account?.fullName}
                                </div>
                            </div>
                            <div className="text-right">
                                <BsThreeDots />
                            </div>
                        </div>
                    </button>
                    <button className="pr-36 pt-2  rounded w-full text-lg py-1  hover:bg-[#eff3f41a]">
                        <nav>
                            Oturumu Kapat
                        </nav>
                        <nav>
                            @esgituran34
                        </nav>
                    </button>
                </Popover.Panel>
            </Popover>
        </div>
    )
}