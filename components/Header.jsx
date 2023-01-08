import Image from "next/image";
import { faker } from "@faker-js/faker";
import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  HeartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useSession, signIn } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";

function Header() {
  const { data: session } = useSession();

  const [open, setOpen] = useRecoilState(modalState ); 
  console.log(open)
  return (
    <div className="mt-2 shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between mx-5 xl:mx-auto max-w-6xl">
        {/* Left */}
        <div>
          <div className="relative hidden  lg:inline-grid w-24 h-12 cursor-pointer">
            <Image
              alt="instagram logo"
              width={1000}
              height={1000}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeQQX8O9ot7nRcZl_OSH-sCSWuQxMFbx1IQ&usqp=CAU"
            />
          </div>
          <div className="relative  w-10 h-10 cursor-pointer lg:hidden flex-shrink-0">
            <Image
              alt="instagram logo"
              width={1000}
              height={1000}
              src="data:image/png;base64,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"
            />
          </div>
        </div>
        {/* Middle-search */}
        <div className="max-w-x5">
          <div className="relative mt-1  rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className=" h-5 w-5 text-gray-500" />
            </div>
            <div>
              <input
                className="bg-gray-50 block w-full pl-10 
                        p-3 sm:text-sm border-gray-300 rounded-md
                      focus:ring-black focus:border-black"
                type="text"
                placeholder="search..."
              />
            </div>
          </div>
        </div>
        {/* right -  icons */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="w-6 h-6 md:hidden cursor-pointer " />
              <div className="navBtn relative">
                <PaperAirplaneIcon className="btn -rotate-45" />
                <div
                  className="absolute -top-1 -right-1
                            text-xs w-4 h-4 bg-red-500 rounded-full 
                            flex items-center justify-center animate-pulse text-white "
                >
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg'
                alt="profile icon"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
        </div>
      </div>
    </div>
  );
}

export default Header;
