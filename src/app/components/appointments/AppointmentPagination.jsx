import Image from 'next/image';
import React from 'react';

const AppointmentPagination = () => {
    return (
        <div>
            <ul className="flex items-center justify-center flex-wrap">
                <li className="flex items-center gap-x-1 pl-2 pr-4 py-1.5 cursor-pointer">
                    <Image
                        src="/chevron-left.png"
                        alt="Left Arrow"
                        width={24}
                        height={24}
                    />
                    <span className="text-gray-400">Previous</span>
                </li>
                <li className=" text-[#0F62FE] px-4 py-1.5 cursor-pointer">
                    1
                </li>
                <li className=" text-[#0F62FE] bg-[#A6C8FF] px-4 py-1.5 cursor-pointer">
                    2
                </li>
                <li className=" text-[#0F62FE] px-4 py-1.5 cursor-pointer">
                    3
                </li>
                <li className=" text-[#0F62FE] px-4 py-1.5 cursor-pointer">
                    4
                </li>
                <li className=" text-[#0F62FE] px-4 py-1.5 cursor-pointer">
                    5
                </li>
                <li className=" text-[#0F62FE] px-4 py-1.5 cursor-pointer">
                    ...
                </li>
                <li className=" text-[#0F62FE] px-4 py-1.5 cursor-pointer">
                    11
                </li>
                <li className="flex items-center gap-x-1 text-[#0F62FE]  pr-2 pl-4 py-1.5 cursor-pointer">
                    <span className="text-[#0F62FE]">Next</span>
                    <Image
                        src="/chevron-right.png"
                        alt="right Arrow"
                        width={24}
                        height={24}
                    />
                </li>
            </ul>
        </div>
    );
};

export default AppointmentPagination;
