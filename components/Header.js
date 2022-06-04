import { useRouter } from "next/router";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slice/basketSlice";

function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  console.log(session);
  console.log(items);
  return (
    <header>
      <div className="flex items-center p-1 bg-amazon_blue  flex-grow ">
        <div className="mt-2 flex items-center flex-grow md:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={130}
            height={35}
            objectFit="contain"
            alt="image"
            className="cursor-pointer "
            onClick={() => router.push("/")}
          />
        </div>

        {/* search Icon */}
        <div className="hidden sm:flex items-center h-8 rounded-md flex-grow bg-yellow-400 to-yellow-500  cursor-pointer">
          <input
            type="text"
            className="flex-grow p-2 h-full w-6 rounded-l-md flex-shrink  focus:outline-none "
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex text-xs space-x-5 px-2 items-center">
          <div className=" cursor-pointer link" onClick={() => signIn()}>
            <p className="text-[12px]">
              {session ? `Hello ${session.user?.name}` : "Sign In"}
            </p>
            <h4 className="font-extrabold">Account & Lists</h4>
          </div>
          <div className=" cursor-pointer link">
            <p className=" text-[11px]">Return</p>
            <h4 className="font-extrabold">& Order</h4>
          </div>
          <div
            className=" relative cursor-pointer  flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className=" absolute right-0 top-0 md:right-10 font-extrabold h-4 w-4 text-center bg-yellow-500 text-black rounded-full">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden font-extrabold md:inline md:text-sm -mb-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Header bottom */}
      <div className="flex items-center text-white space-x-3 p-1 pl-5 text-xs bg-amazon_blue-light">
        <p className="flex items-center space-x-3">
          <MenuIcon className="h-6 px-2" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronic</p>
        <p className="link  hidden lg:inline-flex">Food & Grocery</p>
        <p className="link  hidden lg:inline-flex">Prime</p>
        <p className="link  hidden lg:inline-flex">Buy again</p>
        <p className="link  hidden lg:inline-flex">Shopper & Toolkit</p>
        <p className="link  hidden lg:inline-flex">Health & Personal care</p>
        <p className="link" onClick={() => signOut()}>
          Logout
        </p>
      </div>
    </header>
  );
}

export default Header;
