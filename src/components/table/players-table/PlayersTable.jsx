import { LuEye } from "react-icons/lu";
import { MdBlockFlipped } from "react-icons/md";

const PlayersTable = ({ paged, handleBlock, handleView }) => {
    return (
        <>
            <table className="min-w-full text-sm">
                <thead className="bg-[#5CA97E] text-white sticky top-0">
                    <tr>
                        <th className="px-4 py-3 ">#SL no.</th>
                        <th className="px-4 py-3 text-left">User Name</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3">Golf Handicap</th>
                        <th className="px-4 py-3 ">Matches Played</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((u) => (
                        <tr
                            key={u.id}
                            className={`odd:bg-gray-100 even:bg-white font-semibold`}>
                            <td className="px-4 py-3 text-center">{u.id}</td>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <img src={u.avatar} alt="" className="w-9 h-9 rounded-full" />
                                {u.name}
                            </td>
                            <td className="px-4 py-3">{u.email}</td>
                            <td className="px-4 py-3 text-center">{u.golfHandicap}</td>
                            <td className="px-4 py-3 text-center">{u.matchPlayed}</td>
                            <td className="px-4 py-3 flex justify-center gap-4">
                                <button
                                    onClick={()=>handleView(u)}
                                    className="w-8 h-8 flex items-center justify-center rounded cursor-pointer bg-[#5CA97E]"
                                >
                                    <LuEye size={22} color="#fff" />
                                </button>
                                <button
                                    onClick={() => handleBlock(u.id)}
                                    className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${u.blocked
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "bg-green-600 hover:bg-green-700"
                                        } text-white`}
                                >
                                    <MdBlockFlipped size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default PlayersTable;