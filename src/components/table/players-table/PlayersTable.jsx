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
                    {paged.map((user) => (
                        <tr
                            key={user.id}
                            className={`odd:bg-gray-100 even:bg-white font-semibold`}>
                            <td className="px-4 py-3 text-center">{user.id}</td>
                            <td className="flex items-center gap-2 px-4 py-3">
                                <img src={user.avatar} alt="" className="rounded-full w-9 h-9" />
                                {user.name}
                            </td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3 text-center">{user.golfHandicap}</td>
                            <td className="px-4 py-3 text-center">{user.matchPlayed}</td>
                            <td className="flex justify-center gap-4 px-4 py-3">
                                <button
                                    onClick={()=>handleView(user)}
                                    className="w-8 h-8 flex items-center justify-center rounded cursor-pointer bg-[#5CA97E]"
                                >
                                    <LuEye size={22} color="#fff" />
                                </button>
                                <button
                                    onClick={() => handleBlock(user.id)}
                                    className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${user.blocked
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