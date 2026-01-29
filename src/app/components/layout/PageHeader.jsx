'use client';
import Image from 'next/image';
import MobileMenu from '@/components/layout/MobileMenu';
import useCallService from '@/hooks/useCallService';

const PageHeader = ({ title }) => {
    const { user } = useCallService();
    return (
        <div className="flex items-center justify-between bg-[#111B3C] h-[96px]">
            <h1 className="text-white text-2xl sm:text-[32px] font-semibold ml-4 sm:ml-6">
                {title}
            </h1>
            <div className="flex items-center gap-x-3 sm:gap-x-6 md:gap-x-10 mr-4 sm:mr-6">
                <Image
                    src="/notifications.png"
                    alt="Search"
                    width={32}
                    height={32}
                    className="hidden sm:inline cursor-pointer"
                />
                <Image
                    src={user.image}
                    alt="Search"
                    width={80}
                    height={80}
                    className="hidden sm:inline cursor-pointer rounded-full w-15 sm:w-20 h-15 sm:h-20"
                />
                <MobileMenu />
            </div>
        </div>
    );
};

export default PageHeader;
