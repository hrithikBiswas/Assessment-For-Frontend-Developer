const TopRepairRequests = () => {
    return (
        <div className=" bg-[#111B3C] rounded-2xl px-4 sm:px-6 py-6 sm:py-8 border border-[#2B7FFF33]">
            <h1 className="text-xl mb-4">Top Repair Requests</h1>
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between">
                        <span className="text-sm">Screen Repair</span>
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
                        <span className="text-sm">Battery Replacement</span>
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
                        <span className="text-sm">Back Glass Repair</span>
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
                        <span className="text-sm">Software Issues</span>
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
    );
};

export default TopRepairRequests;
