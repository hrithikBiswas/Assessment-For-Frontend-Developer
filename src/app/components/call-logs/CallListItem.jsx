import Image from 'next/image';
import React from 'react';

const CallListItem = ({ call }) => {
    const {
        image,
        number,
        date,
        time,
        statusText,
        status,
        durationIcon,
        duration,
        title,
        titleStatusIcon,
        category,
    } = call;

    const statusStyles = `${
        status === 'success'
            ? 'border-[#00C9504D] bg-[#00BC7D33] text-[#05DF72]'
            : status === 'warning'
              ? 'border-[#FF69004D] bg-[#FF690033] text-[#FF8904]'
              : status === 'alert'
                ? 'border-[#FF69004D] bg-[#FF150033] text-[#FF0404]'
                : 'border-[#2B7FFF4D] bg-[#2B7FFF33] text-[#51A2FF]'
    }`;

    return (
        <div className="flex flex-col gap-y-4 px-4 sm:px-6 py-4 border-t border-t-[#2B7FFF33]">
            <div className="flex justify-between items-start">
                <div className="flex items-start gap-x-3">
                    <Image src={image} alt="Call Icon" width={40} height={40} />
                    <div className="">
                        <h2 className="text-base font-medium">{number}</h2>
                        <div>
                            <span className="flex gap-x-2 items-center text-xs text-gray-400 leading-5">
                                {date}{' '}
                                <span className="h-1 w-1 rounded-full bg-gray-400"></span>{' '}
                                {time}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={`border ${statusStyles} rounded-md sm:rounded-[10px] py-0.5 sm:py-1.5 px-1 sm:px-3.5 text-xs`}
                >
                    {statusText}
                </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400 leading-5">
                <div className="flex items-center gap-1">
                    <Image
                        src={durationIcon}
                        alt="Duration Icon"
                        width={16}
                        height={16}
                    />
                    <span>{duration}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src={titleStatusIcon}
                        alt="detail Icon"
                        width={16}
                        height={16}
                    />
                    <span>{title}</span>
                </div>
                <div className="rounded text-[#51A2FF] bg-[#2B7FFF33] py-0.5 px-3">
                    {category}
                </div>
            </div>
        </div>
    );
};

export default CallListItem;
