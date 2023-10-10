import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { Popover } from "@headlessui/react"
export default function More() {
  return (
    <Popover>
      <Popover.Button >
        <div>
          <button>
            <div className="flex py-2 pl-2 mt-2 mr-16 gap-5  rounded-full hover:bg-[#eff3f41a]  ">
              <div className="relative ">
                <svg viewBox="0 0 24 24" width={"26px"} height={"26px"}>
                  <path fill="#fff"
                    d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                </svg>

              </div>
              <div className="pr-4 text-xl">
                Daha fazla
              </div>
            </div>
          </button>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[318px] h-[270px] absolute bottom-0  bg-black border-2 border-gray-500 rounded-xl left-0 shadow-lg">
        <button>
          <div className="flex py-2 pl-2 mt-2 gap-5 w-full  hover:bg-[#eff3f41a] ">
            <div className="relative ">
              <svg viewBox="0 0 24 24" width={"26px"} height={"26px"}>
                <path fill="#fff"
                  d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
              </svg>
            </div>
            <div className="pr-4 text-xl">
              Yer imleri
            </div>
          </div>
        </button>
        <button>
          <div className="flex py-2 w-full pl-2 mt-1 mr-10 gap-5  hover:bg-[#eff3f41a]   ">
            <div className="relative ">
              <svg viewBox="0 0 24 24" width={"26px"} height={"26px"}>
                <path fill="#fff"
                  d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z" />
              </svg>

            </div>
            <div className="pr-4 text-xl">
              Baglan
            </div>
          </div>

        </button>
        <button>
          <div className="flex py-2 w-full pl-2 mt-1 mr-10 gap-5  hover:bg-[#eff3f41a]  ">
            <div className="relative ">
              <svg viewBox="0 0 24 24" width={"26px"} height={"26px"}>
                <path fill="#fff"
                  d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" />
              </svg>

            </div>
            <div className="pr-4 text-xl">
              Para Kazanma
            </div>
          </div>

        </button>

        <div className='h-px bg-[#2f3336] w-[89%] mx-auto my-1' />

        <div className="w-full  ">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-black p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex py-2 w-full pl-2 mt-1 mr-10 gap-5  hover:bg-[#eff3f41a]">
                    <span className='pr-28'>İçerik Stüdyosu</span>
                    <BiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-white `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex py-2 w-full pl-2 mt-1 mr-10 gap-5  hover:bg-[#eff3f41a]">
                    <svg viewBox="0 0 24 24" width={"18px"} height={"18px"} >
                      <path fill='#fff'
                        d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                    </svg>
                    Analitik
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex py-2 w-full pl-2 mt-1 mr-10 gap-5  hover:bg-[#eff3f41a]">
                    <span className='pr-[80px]'>Profesyonel araçlar</span>
                    <BiChevronDown
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex py-2 w-full pl-2 mt-1 mr-10 gap-5  hover:bg-[#eff3f41a]">
                    <svg viewBox="0 0 24 24" width={"18px"} height={"18px"}>
                      <path fill='#fff'
                        d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z" />
                    </svg>
                    <div className='text-[15px] '>
                      Reklamlar
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  )
}