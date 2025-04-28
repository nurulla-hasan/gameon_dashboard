import Image from "next/image";
import EarningGrowthChart from "@/components/dashboard/EarningGrowthChart";
import PlayerGrowthChart from "@/components/dashboard/PlayerGrowthChart";
import PageContainer from "@/components/container/PageContainer";

export default function Home() {
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
            <PlayerGrowthChart/>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
