"use client"
import React, { useState, useEffect } from "react";
import { fetchUsers } from "@/apiCalls/apiCall";
import Image from "next/image";
import UsersTable from "./UsersTable";
import SearchBar from "./Searchbar";
import Sidebar from "./SideBar";
import Loader from "./Loader";
import DataNotFound from "./NotFound";

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {

        let timeout;

        const debouncedUpdateUsers = async () => {

            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                setIsLoading(true);
                const userData = await fetchUsers(searchQuery);
                if (userData) {
                    setUserList(userData);
                }
                setIsLoading(false);
            }, 300);
        };
        debouncedUpdateUsers();
        return () => clearTimeout(timeout);
    }, [searchQuery]);

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-4 pt-5">
            <div className='flex flex-col gap-4'>
                <div className='flex px-0  flex-row w-full justify-between'>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold  leading-6 text-[#f20212] " >Teleparty</h1>
                            <p className="text-zing-gray-500 font-light">A new way to watch TV together</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-[1px] border-[#CFCFCF]"></div>
            </div>
            <div className="flex flex-col  ">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                { isLoading ? <Loader/> : userList?.length > 0 ? <UsersTable userList={userList} /> : <DataNotFound/> }
               
            </div>
        </div>
    );
}

export default Users;
