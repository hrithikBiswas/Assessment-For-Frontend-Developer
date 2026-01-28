import Image from 'next/image';

const PageHeader = ({ title }) => {
    return (
        <div className="flex items-center justify-between bg-[#111B3C] h-[96px]">
            <h1 className="text-white text-[32px] font-semibold ml-6">
                {title}
            </h1>
            <div className="flex items-center space-x-10 mr-6">
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
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default PageHeader;
