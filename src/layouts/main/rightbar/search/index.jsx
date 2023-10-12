import { useState } from "react"

export default function Search() {

    const [quary, setQuary] = useState('')
    const [focus, setFocus] = useState(false)


    return (
        <label
            className="text-gray-500  group mt-2 sticky top-0">
            <div className="absolute  mt-4 ml-2   rounded-full">
                <svg viewBox="0 0 24 24" width={"43px"} height={"20px"}>
                    <path fill="#bfc8ca1a"
                        className=" focus:to-blue-500"
                        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
                </svg>
            </div>
            <input type="text"
                value={quary}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={e => setQuary(e.target.value)}
                className="bg-[#eff3f41a]  w-[347px] h-[42px]  mt-1 focus:outline-none  focus:ring focus:ring-offset-blue-600 rounded-full" />
            <div className="-mt-8 pl-12 ">
                Ara
            </div>
            {(quary && focus) && (
                <button className="absolute -mt-6 ml-36 p-1 text-white bg-blue-800 rounded-full">
                    <svg viewBox="0 0 15 15" width={"12px"} height={"12px"} >
                        <path fill="currentColor"
                            d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z" />
                    </svg>
                </button>
            )}
            {focus && (
                <div className="w-[350px] h-[100px] absolute mt-2 rounded-lg border-solid border-2 border-stone-50 bg-black shadow-box px-4 ">
                    Kişileri, listeleri veya anahtar kelimeleri aramayı deneyin
                </div>
            )}
        </label>
    )
}