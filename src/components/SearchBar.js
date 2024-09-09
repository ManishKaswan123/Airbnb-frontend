import React from 'react';
import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="flex justify-center px-[8%]">
        <div className="flex items-center border rounded-full shadow-md  bg-white w-3/4">
            <div className="flex flex-col flex-grow border-r hover:rounded-3xl hover:bg-gray-100 p-4 pl-6 hover:cursor-pointer">
                <span className="text-xs font-semibold">Where</span>
                <span className="text-sm text-gray-500">Search destinations</span>
            </div>
            <div className="flex flex-col flex-grow border-r hover:rounded-3xl hover:bg-gray-100 p-4 pl-6 hover:cursor-pointer">
                <span className="text-xs font-semibold">Check in</span>
                <span className="text-sm text-gray-500">Add dates</span>
            </div>
            <div className="flex flex-col flex-grow border-r hover:rounded-3xl hover:bg-gray-100 p-4 pl-6 hover:cursor-pointer">
                <span className="text-xs font-semibold">Check out</span>
                <span className="text-sm text-gray-500">Add dates</span>
            </div>
            <div className="flex flex-row flex-grow  hover:rounded-3xl hover:bg-gray-100 pl-6 hover:cursor-pointer ">
                <div className='flex flex-col flex-grow p-4'>
                    <span className="text-xs font-semibold">Who</span>
                    <span className="text-sm text-gray-500">Add guests</span>
                </div>
                <div className='flex items-center mr-3'>
                    <button className="bg-customPink text-white rounded-full p-4 flex items-center justify-center">
                        <MdSearch className="text-white" size={22} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  
  );
}

export default SearchBar;