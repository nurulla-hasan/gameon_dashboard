"use client"
import Image from "next/image";
import EarningGrowthChart from "@/components/dashboard/EarningGrowthChart";
import PlayerGrowthChart from "@/components/dashboard/PlayerGrowthChart";
import PageContainer from "@/components/container/PageContainer";
import { useState } from "react";
import { recentMatches } from "@/data/data";
import { FaEye, FaBan } from 'react-icons/fa';

export default function Home() {

  const [matches, setMatches] = useState(recentMatches)

  return (
    <PageContainer>
      {/* Top Info */}
      <div className="flex flex-col gap-4 5xl:hidden">
        <div className="text-black">
          <div className="flex justify-evenly gap-16">
            <div className="flex flex-col justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040] rounded-xl py-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-center ">
                <h3 className="text-xl font-medium">Total Player</h3>
                <div className="bg-[#5CA97E] rounded-full w-12 h-12 flex justify-center items-center">
                  <Image
                    src="/images/total-player.png"
                    width={30}
                    height={30}
                    alt="/"
                  />
                </div>
                <p className="text-xl font-medium">852,650</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040] rounded-xl py-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-center">
                <h3 className="text-xl font-medium">Total Earnings</h3>
                <div className="bg-[#5CA97E] rounded-full w-12 h-12 flex justify-center items-center">
                  <Image
                    src="/images/total-earning.png"
                    width={20}
                    height={20}
                    alt="/"
                  />
                </div>
                <p className="text-xl font-medium">$ 4,782</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-white shadow-[0px_4px_4px_0px_#00000040] rounded-xl py-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-center ">
                <h3 className="text-xl font-medium">Total Match</h3>
                <div className="bg-[#5CA97E] rounded-full w-12 h-12 flex justify-center items-center">
                  <Image
                    src="/images/total-match.png"
                    width={20}
                    height={20}
                    alt="/"
                  />
                </div>
                <p className="text-xl font-medium">100</p>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Info */}
        <div className="flex gap-5">
          <div className="flex-1/2">
            <EarningGrowthChart />
          </div>
          <div className="flex-1/2">
            <PlayerGrowthChart />
          </div>
        </div>

        {/* Bottom info  */}

        <div className="rounded-lg shadow-[0px_4px_4px_0px_#00000040] p-5 overflow-auto bg-white">
          <h2 className="text-lg font-semibold mb-4">Recent Matches</h2>
          <div className="rounded-md overflow-scroll h-[24vh] scrl-hide border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-100 bg-[#5CA97E] sticky top-0">
                <tr>
                  <th className="py-3 px-2">ID#</th>
                  <th className="py-3">Participants Name</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Bate Amount</th>
                  <th className="py-3">Win</th>
                  <th className="py-3">Match Format</th>
                </tr>
              </thead>
              <tbody>
                {recentMatches.map((match, i) => (
                  <tr key={i} className="odd:bg-gray-100">
                    <td className="py-3 px-2 font-medium">{match.id}</td>
                    <td className="py-3">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={match.avatar}
                          alt={match.participants}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-semibold">{match.participants}</span>
                        <span className="text-black">Vs</span>
                        <Image
                          src={match.avatar}
                          alt={match.participants}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-semibold">{match.participants}</span>
                      </div>
                    </td>
                    <td className="py-3">{match.date}</td>
                    <td className="py-3">{match.bateAmount}</td>
                    <td className="py-3">{match.win}</td>
                    <td className="py-3">{match.matchFormat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
