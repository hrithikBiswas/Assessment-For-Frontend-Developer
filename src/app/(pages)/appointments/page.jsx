import AppointmentCard from '@/components/appointments/AppointmentCard';
import AppointmentPagination from '@/components/appointments/AppointmentPagination';
import AppointmentTable from '@/components/appointments/AppointmentTable';
import PageHeader from '@/components/layout/PageHeader';
import { APPOINTMENT_CARDS } from '@/constants';
import Image from 'next/image';

const AppointmentsPage = () => {
    return (
        <div className="page-container">
            <PageHeader title="Appointments" />
            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 gap-4 sm:gap-6 lg:gap-10 mb-4 sm:mb-6">
                    {APPOINTMENT_CARDS.map((card, index) => (
                        <AppointmentCard
                            key={index}
                            name={card.name}
                            icon={card.icon}
                            number={card.number}
                            result={card.result}
                            status={card.status}
                        />
                    ))}
                </div>
                <div className="rounded-2xl p-4 sm:p-6 bg-gradient-to-tr from-[#16213E] to-[#1A1A2E] mb-6 sm:mb-8">
                    <h2 className="mb-3">Booking Link</h2>
                    <div className="flex items-center gap-x-3 sm:gap-x-4">
                        <input
                            type="search"
                            name="search"
                            defaultValue="https://techstore.com/book?id=store123"
                            className="rounded-[14px] py-3 px-4 outline-none flex-1 bg-[#0A0A0F80] border border-[#00FF8833]"
                        />
                        <button className="flex gap-x-2 items-center py-2 px-3 rounded-xl bg-[url(/backdrop.png)] bg-no-repeat bg-center bg-cover shadow-[inset_0px_0px_12px_1px_rgba(210,_234,_255,_1)] cursor-pointer">
                            <Image
                                src="/copy.png"
                                alt="Copy Icon"
                                width={32}
                                height={32}
                                className="w-6 sm:w-8 h-6 sm:h-8"
                            />
                            <span className="hidden sm:inline">Copy Link</span>
                        </button>
                    </div>
                </div>
                <AppointmentTable />
                <AppointmentPagination />
            </div>
        </div>
    );
};

export default AppointmentsPage;
