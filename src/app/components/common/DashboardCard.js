import Image from 'next/image';
import React from 'react';

const DashboardCard = ({ name, value, percentage, status, image }) => {
    return (
        <div className="flex justify-between bg-[#111B3C] rounded-2xl p-6 border border-[#2B7FFF33]">
            <div className="flex flex-col gap-y-4">
                <span className="text-sm text-gray-400 leading-5">{name}</span>
                <span className="text-[30px] leading-9">{value}</span>
                <span
                    className={`${status === 'positive' ? 'text-green-500' : 'text-red-500'}`}
                >{`${status === 'positive' ? `+${percentage}` : `-${percentage}`}`}</span>
            </div>
            <div>
                <Image
                    src={image}
                    alt="Dashboard Card"
                    width={48}
                    height={48}
                />
            </div>
        </div>
    );
};

export default DashboardCard;
