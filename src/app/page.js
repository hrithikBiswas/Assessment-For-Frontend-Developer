import DashboardCard from '@/components/dashboard/DashboardCard';
import { DASHBOARD_CARDS } from '@/constants';
import PageHeader from '@/components/layout/PageHeader';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TopRepairRequests from '@/components/dashboard/TopRepairRequests';
import WeeklyReport from '@/components/dashboard/WeeklyReport';

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
                <WeeklyReport />
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <RecentActivity />
                    <TopRepairRequests />
                </div>
            </div>
        </div>
    );
}
