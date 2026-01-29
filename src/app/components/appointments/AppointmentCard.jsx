import Image from 'next/image';
import SmGrayText from '@/components/common/SmGrayText';

const AppointmentCard = ({ name, icon, number, result, status }) => {
    return (
        <div className="flex justify-between bg-[#111B3C] rounded-2xl p-4 sm:p-6 border border-[#2B7FFF33]">
            <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-3">
                    <Image
                        src={icon}
                        alt="calendar icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                    />
                    <SmGrayText text={name} />
                </div>
                <span className="text-[24px] leading-9">{number}</span>
                <span
                    className={`${status === 'success' ? 'text-green-500' : 'text-gray-400'} text-sm`}
                >
                    {result}
                </span>
            </div>
        </div>
    );
};

export default AppointmentCard;
