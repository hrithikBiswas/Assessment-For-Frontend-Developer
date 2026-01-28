import Image from 'next/image';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { DASHBOARD_CARDS } from '@/constants';
import PageHeader from '@/components/layout/PageHeader';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TopRepairRequests from '@/components/dashboard/TopRepairRequests';

export default function Home() {
    return (
        <div className="page-container">
            <PageHeader title="Dashboard Overview" />
            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 gap-4 sm:gap-6">
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
                <div className="mt-4 sm:mt-6 bg-[#111B3C] rounded-2xl px-4 sm:px-6 py-6 sm:py-8 border border-[#2B7FFF33]">
                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <h1 className="text-xl mb-1">
                                Call Trends - This Week
                            </h1>
                            <span className="text-sm text-gray-400 leading-5">
                                Total: 472 calls
                            </span>
                        </div>
                        <div className="flex bg-[#1D293D] items-center justify-center gap-x-2 sm:gap-x-4 py-2 px-4 rounded-xl border border-[#2B7FFF33]">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <RecentActivity />
                    <TopRepairRequests />
                </div>
            </div>
        </div>
    );
}
