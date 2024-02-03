import { useState } from 'react';
import Image from 'next/image';

const UsersTable = ({ userList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = userList.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='flex flex-col gap-0'>
            <table className="w-full border-[1px] border-t-0 border-[#CFCFCF]">
                <thead className="w-full">
                    <tr>
                        <th className="border-b border-[#CFCFCF] px-2 py-3">Avatar</th>
                        <th className="border-b border-[#CFCFCF] px-2 py-3">User Name</th>
                        <th className="border-b border-[#CFCFCF] px-2 py-3">Repo</th>
                        <th className="border-b border-[#CFCFCF] px-2 py-3">Followers</th>
                    </tr>
                </thead>
                <tbody className="w-full ">
                    {currentRows.map((user, index) => (
                        <tr key={index} className="border-b border-[#CFCFCF]">
                            <td className="flex justify-center px-2 py-2"><Image src={user?.avatarUrl} width="40" height="40" className="rounded-full" /></td>
                            <td className="text-center px-2 py-2">{user?.username}</td>
                            <td className="text-center px-2 py-2">{user?.totalRepos}</td>
                            <td className="text-center px-2 py-2">{user?.followers}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex w-full border border-[#CFCFCF] border-t-0 rounded-b-lg justify-end ">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mr-2 px-3 py-2  "
                >
                    Prev
                </button>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastRow >= userList.length}
                    className="px-3 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UsersTable;
