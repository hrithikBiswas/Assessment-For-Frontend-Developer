import Image from 'next/image';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { DASHBOARD_CARDS } from '@/constants';
import PageHeader from '@/components/layout/PageHeader';
import CallList from '@/components/call-logs/CallList';
import CallDetails from '@/components/call-logs/CallDetails';

const CallLogPage = () => {
    return (
        <div className="page-container">
            <PageHeader title="Call Logs & History" />
            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                    <div className="">
                        <div className="relative bg-[#111B3C] rounded-xl border border-[#2B7FFF33] mb-4 sm:mb-6">
                            <Image
                                src="/search.png"
                                alt="search"
                                width={20}
                                height={20}
                                className="absolute left-4 sm:left-8 md:left-10 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search by phone number, issue type..."
                                className="bg-[#111B3C] rounded-2xl py-3 pl-12 sm:pl-16 md:pl-18 pr-4 outline-none w-full text-white placeholder-gray-500 placeholder-opacity-75"
                            />
                        </div>
                        <CallList />
                    </div>
                    <div className="">
                        <div className="flex justify-end flex-wrap gap-2 sm:gap-6 mb-4 sm:mb-6">
                            <div className="flex items-center justify-center gap-x-1 sm:gap-x-4 py-2 sm:py-3 px-2 sm:px-8 bg-[#111B3C] rounded-xl border border-[#2B7FFF33]">
                                <span>All Types</span>
                                <Image
                                    src="/dropdown.png"
                                    alt="dropdown"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div className="flex items-center justify-center gap-x-1 sm:gap-x-4 py-2 sm:py-3 px-2 sm:px-8 bg-[#111B3C] rounded-xl border border-[#2B7FFF33]">
                                <span>All Issues</span>
                                <Image
                                    src="/dropdown.png"
                                    alt="dropdown"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div className="flex items-center justify-center gap-x-1 sm:gap-x-4 py-2 sm:py-3 px-2 sm:px-8 bg-[#111B3C] rounded-xl border border-[#2B7FFF33]">
                                <span>Today</span>
                                <Image
                                    src="/dropdown.png"
                                    alt="dropdown"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                        <CallDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallLogPage;
