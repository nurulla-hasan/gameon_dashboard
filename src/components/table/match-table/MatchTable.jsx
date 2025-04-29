import { LuEye } from "react-icons/lu";

const MatchTable = ({ paged, handleView }) => {
    return (
        <>
            <table className="min-w-full text-sm ">
                <thead className="bg-[#5CA97E] text-white sticky top-0">
                    <tr>
                        <th className="px-4 py-3 text-center">#SL no.</th>
                        <th className="px-4 py-3 text-left">Match Name</th>
                        <th className="px-4 py-3 text-left">date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-center">Bet Amount</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((u) => (
                        <tr
                            key={u.id}
                            className={`odd:bg-gray-50`}>
                            <td className="px-4 py-3 text-center">{u.id}</td>
                            <td className="px-4 py-3 text-">{u.matchName}</td>
                            <td className="px-4 py-3 text-">{u.date}</td>
                            <td className="px-4 py-3 text-">{u.status}</td>
                            <td className="px-4 py-3 text-center">{u.betAmount}</td>
                            {/* <td className={`px-4 py-3`}>{u.blocked
                                ? <span className="bg-red-500 text-white text-sm font-medium py-1 px-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Blocked</span>
                                : <span className="bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Unblocked</span>}
                            </td> */}
                            <td className="px-4 py-3 flex justify-center gap-2">
                                <button
                                    onClick={()=>handleView(u)}
                                    className="w-8 h-8 flex items-center justify-center rounded cursor-pointer bg-[#5CA97E]"
                                >
                                    <LuEye size={22} color="#fff" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default MatchTable;