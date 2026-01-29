import Image from 'next/image';

const WeeklyReport = () => {
    return (
        <div className="mt-4 sm:mt-6 bg-[#111B3C] rounded-2xl px-4 sm:px-6 py-6 sm:py-8 border border-[#2B7FFF33]">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-xl mb-1">Call Trends - This Week</h1>
                    <span className="text-sm text-gray-400 leading-5">
                        Total: 472 calls
                    </span>
                </div>
                <div className="flex cursor-pointer bg-[#1D293D] items-center justify-center gap-x-2 sm:gap-x-4 py-2 px-4 rounded-xl border border-[#2B7FFF33]">
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
    );
};

export default WeeklyReport;
