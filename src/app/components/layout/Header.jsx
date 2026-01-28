'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants';

const Header = () => {
    const pathname = usePathname();
    const activeLink = {
        li: 'shadow-[0px_10px_20px_5px_rgba(51,_99,_154,_0.7)]',
        link: 'bg-[url(/backdrop.png)] shadow-[inset_0px_0px_12px_1px_rgba(255,_255,_255,_1)]',
    };

    return (
        <div className="hidden md:block fixed top-0 left-0 bottom-0 w-[241px] bg-[#111B3C] border-r border-r-[#2B7FFF33]">
            <div className="flex items-center justify-center py-10">
                <Image src="/logo.png" alt="Logo" width={56} height={56} />
            </div>
            <ul className="px-2">
                {NAV_LINKS.map((link) => (
                    <li
                        key={link.href}
                        className={`mb-4 rounded-2xl hover:shadow-[0px_10px_20px_5px_rgba(51,_99,_154,_0.7)] transition-all duration-100 ${link.href === pathname && activeLink.li}`}
                    >
                        <Link
                            href={link.href}
                            className={`flex font-base items-center px-3 py-2 rounded-2xl hover:bg-[url(/backdrop.png)] bg-no-repeat bg-center bg-cover hover:shadow-[inset_0px_0px_12px_1px_rgba(255,_255,_255,_1)] transition-all duration-100 ${link.href === pathname && activeLink.link}`}
                        >
                            <Image
                                src={link.image}
                                alt={link.name}
                                width={32}
                                height={32}
                                className="mr-3"
                            />
                            <span className="text-white">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
