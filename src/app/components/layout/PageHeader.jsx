import Image from 'next/image';

const PageHeader = ({ title }) => {
    return (
        <div className="flex items-center justify-between bg-[#111B3C] h-[96px]">
            <h1 className="text-white text-2xl sm:text-[32px] font-semibold ml-4 sm:ml-6">
                {title}
            </h1>
            <div className="flex items-center space-x-3 sm:space-x-10 mr-4 sm:mr-6">
                <Image
                    src="/notifications.png"
                    alt="Search"
                    width={32}
                    height={32}
                    className=""
                />
                <Image
                    src="/Avatar.png"
                    alt="Search"
                    width={80}
                    height={80}
                    className="rounded-full w-15 sm:w-20 h-15 sm:h-20"
                />
            </div>
        </div>
    );
};

export default PageHeader;
