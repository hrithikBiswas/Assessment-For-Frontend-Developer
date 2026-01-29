'use client';
import useCallService from '@/hooks/useCallService';
import Image from 'next/image';

const User = () => {
    const { user, setIsEdit } = useCallService();
    return (
        <>
            <div className="mb-8">
                <h3 className="text-xl mb-2">Profile Image</h3>
                <div className="flex items-end gap-x-3">
                    <Image
                        src={user.image}
                        alt="profile photo"
                        className="w-[102px] h-[102px] rounded-full"
                        width={102}
                        height={102}
                    />
                    <button
                        onClick={() => setIsEdit(true)}
                        className="rounded-xl cursor-pointer shadow-[0px_10px_20px_5px_rgba(51,_99,_154,_0.7)]"
                    >
                        <span className="flex gap-x-2 items-center py-1 px-2 rounded-xl bg-[url(/backdrop.png)] bg-no-repeat bg-center bg-cover shadow-[inset_0px_0px_12px_1px_rgba(210,_234,_255,_1)] cursor-pointer">
                            Edit Profile
                        </span>
                    </button>
                </div>
            </div>

            <table className="max-w-150 ">
                <tbody>
                    <tr>
                        <td className="py-1 md:py-2 w-50  text-xl font-medium tracking-wide">
                            Full Name:
                        </td>
                        <td className="py-1 md:py-2 text-xl">
                            {user.fullName}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 md:py-2 w-50  text-xl font-medium tracking-wide">
                            Email:
                        </td>
                        <td className="py-1 md:py-2 text-xl">{user.email}</td>
                    </tr>
                    <tr>
                        <td className="py-1 md:py-2 w-50  text-xl font-medium tracking-wide">
                            Store Name:
                        </td>
                        <td className="py-1 md:py-2 text-xl">
                            {user.storeName}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-1 md:py-2 w-50  text-xl font-medium tracking-wide">
                            Store Address:
                        </td>
                        <td className="py-1 md:py-2 text-xl">
                            {user.storeAddress}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default User;
