import { Link } from "react-router-dom";
import { mainMenü } from "../../../../utils/consts";
import More from "./more";
import New from "./new";
import AltMore from "./altmore";
export default function Menü() {
  return (
    <nav className="flex flex-col gap-y-2 justify-between">
      <section className="flex flex-col gap-y-2 my-2">
        {mainMenü.map((menu, index) => (
          <Link key={index} to={menu.path} className="rounded-full hover:bg-white hover:text-black group ">
            <div className="flex flex-row gap-x-4 p-2 items-center rounded-full text-xl group-hover:bg-[#eff3f41a]">
              {menu.icon.active}
              {menu.title}
            </div>
          </Link>
        ))
        }
      </section>
      <More />
      <New />
      <AltMore />
    </nav>
  )
}