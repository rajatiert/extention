"use client"
import React , {useState} from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({searchQuery  , setSearchQuery}) => {


 console.log("search query = ", searchQuery);
    return <>
        <div className="w-full flex justify-between border border-[#CFCFCF] p-4 rounded-t-lg ">

            <div className="w-1/3 flex self-end px-3 py-2.5 rounded-lg text-xl font-semibold">
                Github Users    
            </div>
              
            <div className="w-1/3 flex self-end px-3 py-2.5 rounded-lg border-[2px] border-gray-100">
                <CiSearch className="h-6 w-6" />
                <input type="text" value = {searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} placeholder="Search by user name" className="w-full rounded-lg focus:outline-none" />
            </div>
        </div>
    </>;
}

export default SearchBar;
