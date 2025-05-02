"use client";
import PageContainer from "@/components/container/PageContainer";
import UserViewModal from "@/components/modal/user-view-modal/UserViewModal";
import Pagination from "@/components/pagination/Pagination";
import PlayersTable from "@/components/table/players-table/PlayersTable";
import { users } from "@/data/data";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";



export default function Players() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(users);
  const [viewModal, setViewModal] = useState(false)

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const handleView = (player) => {
    setSelectedPlayer(player);
    setViewModal(true)
  }

/* block / unblock toggle */
const handleBlock = (id) => {
  
  const updated = data.map((user) =>
    user.id === id ? { ...user, blocked: !user.blocked } : user
  );
  
  const updatedUser = updated.find((user) => user.id === id);
  
  if(updatedUser.blocked){
    toast.success(`${updatedUser.name} has been Blocked`)
  }else{
    toast.success(`${updatedUser.name} has been Unblocked`)
  }
  setData(updated);
};



  /* filter + paginate */
  const filtered = data.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
  const pageCount = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (

    <PageContainer>
      {/* header + search */}
      <div className="flex justify-between ">
        <h1 className="text-xl font-medium">All Player</h1>
        <div className="relative w-72">
          <FiSearch className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" size={18} />
          <input
            placeholder="Search here..."
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-[#5CA97E] focus:outline-none"
          />
        </div>
      </div>

      {/* table */}
      <div className="overflow-auto h-[74vh] scrl-hide rounded-md border border-gray-200">
        <PlayersTable paged={paged} handleBlock={handleBlock} handleView={handleView} />
      </div>

      {/* pagination (unchanged) */}
      <div className="flex items-center text-sm justify-evenly">
        <span className="text-[#5CA97E]">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}
        </span>

        <div className="flex items-center gap-2">
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />
        </div>

      </div>

      {
        viewModal && (
          <UserViewModal setViewModal={setViewModal} data={selectedPlayer} />
        )
      }

    </PageContainer>
  );
}