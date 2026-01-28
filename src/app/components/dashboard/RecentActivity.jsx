import Image from 'next/image';
import React from 'react';

const RecentActivity = () => {
    return (
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
                            AI booked appointment for iPhone 13 screen repair
                        </p>
                        <span className="text-xs text-gray-400">2 min ago</span>
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
                            Warm transfer to technician - Software issue
                        </p>
                        <span className="text-xs text-gray-400">5 min ago</span>
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
                            Quote provided for iPad battery replacement
                        </p>
                        <span className="text-xs text-gray-400">8 min ago</span>
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
    );
};

export default RecentActivity;
