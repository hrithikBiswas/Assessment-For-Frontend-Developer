import Image from 'next/image';
import DashboardCard from './components/common/DashboardCard';
import { DASHBOARD_CARDS } from './constants';

export default function Home() {
    return (
        <div className="page-container">
            <div className="flex items-center justify-between bg-[#111B3C] h-[96px]">
                <h1 className="text-white text-[32px] font-semibold ml-6">
                    Call Logs & History
                </h1>
                <div className="flex items-center space-x-10 mr-6">
                    <Image
                        src="/notifications.png"
                        alt="Search"
                        width={32}
                        height={32}
                        className=""
                    />
                    <Image
                        src="/Avatar.png"
                        alt="Search"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 gap-6">
                    {DASHBOARD_CARDS.map((card) => (
                        <DashboardCard
                            key={card.name}
                            name={card.name}
                            value={card.value}
                            percentage={card.percentage}
                            status={card.status}
                            image={card.image}
                        />
                    ))}
                </div>
                <div className="mt-6 bg-[#111B3C] rounded-2xl px-6 py-8 border border-[#2B7FFF33]">
                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <h1 className="text-xl mb-1">
                                Call Trends - This Week
                            </h1>
                            <span className="text-sm text-gray-400 leading-5">
                                Total: 472 calls
                            </span>
                        </div>
                        <div className="flex bg-[#1D293D] items-center justify-center gap-x-4 py-2 px-4 rounded-xl border border-[#2B7FFF33]">
                            <span>This Week</span>
                            <Image
                                src="/dropdown.png"
                                alt="dropdown"
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/graph.png"
                            alt="Chart"
                            width={400}
                            height={200}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-6 mt-6">
                    <div className="bg-[#111B3C] rounded-2xl px-6 py-8 border border-[#2B7FFF33]">
                        <h1 className="text-xl mb-4">Recently Activity</h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-x-2.5 bg-[#1D293D80] rounded-xl p-4">
                                <Image
                                    src="/green-dot.png"
                                    alt="dot"
                                    width={8}
                                    height={8}
                                    className="pt-1"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm mb-1.5">
                                        AI booked appointment for iPhone 13
                                        screen repair
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        2 min ago
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2.5 bg-[#1D293D80] rounded-xl p-4">
                                <Image
                                    src="/yellow-dot.png"
                                    alt="dot"
                                    width={8}
                                    height={8}
                                    className="pt-1"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm mb-1.5">
                                        Warm transfer to technician - Software
                                        issue
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        5 min ago
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2.5 bg-[#1D293D80] rounded-xl p-4">
                                <Image
                                    src="/green-dot.png"
                                    alt="dot"
                                    width={8}
                                    height={8}
                                    className="pt-1"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm mb-1.5">
                                        Quote provided for iPad battery
                                        replacement
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        8 min ago
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-2.5 bg-[#1D293D80] rounded-xl p-4">
                                <Image
                                    src="/red-dot.png"
                                    alt="dot"
                                    width={8}
                                    height={8}
                                    className="pt-1"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm mb-1.5">
                                        Call dropped after 12 seconds
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        15 min ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-[#111B3C] rounded-2xl px-6 py-8 border border-[#2B7FFF33]">
                        <h1 className="text-xl mb-4">Top Repair Requests</h1>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm">
                                        Screen Repair
                                    </span>
                                    <span className="text-sm text-gray-300">
                                        156 request
                                    </span>
                                </div>
                                <div className="relative h-2 rounded-full bg-[#1D293D]">
                                    <span className="absolute h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 w-3/5"></span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm">
                                        Battery Replacement
                                    </span>
                                    <span className="text-sm text-gray-300">
                                        89 request
                                    </span>
                                </div>
                                <div className="relative h-2 rounded-full bg-[#1D293D]">
                                    <span className="absolute h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 w-[35%]"></span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm">
                                        Back Glass Repair
                                    </span>
                                    <span className="text-sm text-gray-300">
                                        67 request
                                    </span>
                                </div>
                                <div className="relative h-2 rounded-full bg-[#1D293D]">
                                    <span className="absolute h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 w-1/4"></span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm">
                                        Software Issues
                                    </span>
                                    <span className="text-sm text-gray-300">
                                        45 request
                                    </span>
                                </div>
                                <div className="relative h-2 rounded-full bg-[#1D293D]">
                                    <span className="absolute h-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 w-1/5"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
