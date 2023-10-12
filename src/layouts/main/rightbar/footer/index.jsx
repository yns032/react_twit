import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="mt-3 w-[350px] h-[59px] text-[#71767b] flex flex-wrap">
            <Link to='/' className="flex items-center h-[16px] p-1 text-[13px] underline decoration-1">Kulllanım Şartları</Link>
            <Link to='/' className="flex items-center h-[16px] p-1 text-[13px] underline decoration-1">Gizlilik Politikası</Link>
            <Link to='/' className="flex items-center h-[16px] p-1 text-[13px] underline decoration-1">Çerez politikası</Link>
            <Link to='/' className="flex items-center h-[16px] p-1 text-[13px] underline decoration-1">Baskı</Link>
            <Link to='/' className="flex items-center h-[16px] p-1 text-[13px] underline decoration-1">Ulaşılabilirlik</Link>
            <Link to='/' className="flex items-center h-[16px] p-1 text-[13px] underline decoration-1">Reklam bilgileri</Link>
            <Link>
                <Popover className="relative">
                    <Popover.Button className='flex'>
                        <div className="text-[13px] h-[16px]  flex items-center p-1  underline decoration-1">
                            Daha
                        </div>
                        <svg viewBox="0 0 24 24" width={"16px"} height={"12px"} className="mt-1" >
                            <path fill="#71767b"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                        </svg>
                    </Popover.Button>
                    <Popover.Panel className="flex  text-[15px]   flex-col  absolute w-[191px] h-[219px] rounded-xl bottom-1 right-4 bg-black">
                        <Link className="py-2 pl-2 text-white hover:bg-[#21272e]">Hakkında</Link>
                        <Link className="py-3 pl-2 text-white hover:bg-[#21272e]">X uygulamasını indir</Link>
                        <Link className="py-3 pl-2 text-white hover:bg-[#21272e]">Durum</Link>
                        <Link className="py-3 pl-2 text-white hover:bg-[#21272e]">İş için X</Link>
                        <Link className="py-3 pl-2 text-white hover:bg-[#21272e]">Geliştiriciler</Link>
                    </Popover.Panel>

                </Popover>
            </Link>
            <p className="text-[13px] flex">
                © 2023 X Corp.Yunus
            </p>
        </div>
    )
}