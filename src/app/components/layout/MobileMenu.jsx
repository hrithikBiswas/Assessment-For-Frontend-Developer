'use client';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Image,
} from '@heroui/react';
import BarIcon from '@/components/SVG/BarIcon';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathname = usePathname();
    const activeLink = {
        li: 'shadow-[0px_10px_20px_5px_rgba(51,_99,_154,_0.7)]',
        link: 'bg-[url(/backdrop.png)] shadow-[inset_0px_0px_12px_1px_rgba(210,_234,_255,_1)]',
    };

    return (
        <div className="md:hidden">
            <button onClick={onOpen}>
                <BarIcon />
            </button>
            <Drawer
                isOpen={isOpen}
                size="xs"
                backdrop="opaque"
                hideCloseButton={true}
                motionProps={{
                    variants: {
                        enter: {
                            opacity: 1,
                            x: 0,
                            duration: 0.3,
                        },
                        exit: {
                            x: 100,
                            opacity: 0,
                            duration: 0.3,
                        },
                    },
                }}
                onOpenChange={onOpenChange}
                classNames={{
                    // wrapper: 'bg-red-500',
                    base: 'bg-[#111B3C] border-l border-l-[#2B7FFF33]',
                }}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex justify-between items-center border-b border-b-[#2B7FFF33]">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={44}
                                    height={44}
                                    className=""
                                />
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        src="/notifications.png"
                                        alt="Search"
                                        width={30}
                                        height={30}
                                        className=""
                                    />
                                    <Image
                                        src="/Avatar.png"
                                        alt="Search"
                                        width={44}
                                        height={44}
                                        className="rounded-full w-15 sm:w-20 h-15 sm:h-20"
                                    />
                                </div>
                            </DrawerHeader>
                            <DrawerBody>
                                <ul className="">
                                    {NAV_LINKS.map((link) => (
                                        <li
                                            key={link.href}
                                            className={`mb-4 rounded-2xl hover:shadow-[0px_10px_20px_5px_rgba(51,_99,_154,_0.7)] transition-all duration-100 ${link.href === pathname && activeLink.li}`}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`flex gap-x-3 font-base items-center px-3 py-3 rounded-2xl hover:bg-[url(/backdrop.png)] bg-no-repeat bg-center bg-cover hover:shadow-[inset_0px_0px_12px_1px_rgba(210,_234,_255,_1)] transition-all duration-100 ${link.href === pathname && activeLink.link}`}
                                            >
                                                <Image
                                                    src={link.image}
                                                    alt={link.name}
                                                    width={24}
                                                    height={24}
                                                    className="mr-3"
                                                />
                                                <span className="text-white">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    <div className="flex gap-x-2 cursor-pointer">
                                        <Image
                                            src="/logout.png"
                                            alt="logout"
                                            width={28}
                                            height={28}
                                        />
                                        <button className="text-base text-[#FF1100] cursor-pointer">
                                            Logout
                                        </button>
                                    </div>
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default MobileMenu;
