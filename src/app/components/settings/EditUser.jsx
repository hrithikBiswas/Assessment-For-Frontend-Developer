'use client';
import { useEffect, useRef, useState } from 'react';
import useCallService from '@/hooks/useCallService';
import Image from 'next/image';

const EditUser = () => {
    const imageFileRef = useRef(null);
    const { user, setUser, setIsEdit } = useCallService();
    const [draftUser, setDraftUser] = useState(user);

    useEffect(() => {
        setDraftUser(user);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser(draftUser);
        setIsEdit(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const ImageUrl = URL.createObjectURL(file);

        setDraftUser((prev) => ({
            ...prev,
            image: ImageUrl,
        }));
    };

    return (
        <div>
            <div className="mb-8">
                <h3 className="text-xl mb-2">Profile Image</h3>
                <label
                    htmlFor="image"
                    className="relative flex flex-col items-center justify-center w-[102px] h-[102px] rounded-full cursor-pointer"
                >
                    <Image
                        src={draftUser.image}
                        alt="Preview"
                        width={102}
                        height={102}
                        className="object-cover rounded-full"
                    />
                    <Image
                        src="/edit.png"
                        alt="edit photo"
                        className="w-10 h-10 absolute -bottom-1 -right-1"
                        width={40}
                        height={40}
                    />
                    <input
                        ref={imageFileRef}
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </label>
            </div>
            <form onSubmit={handleSubmit} className="max-w-6xl ">
                <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-x-12 gap-y-4 sm:gap-y-6">
                    <div className="flex flex-col gap-y-1 sm:gap-y-2">
                        <label className="text-xl" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={draftUser.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="rounded-[14px] py-3 px-5 outline-none placeholder-gray-500 bg-[#0A0A0F80] border border-[#00FF8833]"
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 sm:gap-y-2">
                        <label className="text-xl" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={draftUser.email}
                            onChange={handleChange}
                            placeholder="john@gmail.com"
                            className="rounded-[14px] py-3 px-5 outline-none placeholder-gray-500 bg-[#0A0A0F80] border border-[#00FF8833]"
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 sm:gap-y-2">
                        <label className="text-xl" htmlFor="storeName">
                            Store Name
                        </label>
                        <input
                            type="text"
                            name="storeName"
                            id="storeName"
                            value={draftUser.storeName}
                            onChange={handleChange}
                            placeholder="Betopia Group"
                            className="rounded-[14px] py-3 px-5 outline-none placeholder-gray-500 bg-[#0A0A0F80] border border-[#00FF8833]"
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 sm:gap-y-2">
                        <label className="text-xl" htmlFor="storeAddress">
                            Store Address
                        </label>
                        <input
                            type="text"
                            name="storeAddress"
                            id="storeAddress"
                            onChange={handleChange}
                            value={draftUser.storeAddress}
                            placeholder="Kaderia Tower, Mohakhali, Dhaka"
                            className="rounded-[14px] py-3 px-5 outline-none placeholder-gray-500 bg-[#0A0A0F80] border border-[#00FF8833]"
                        />
                    </div>
                </div>
                <div className="w-full text-start sm:text-center mt-6 sm:mt-18">
                    <button
                        type="submit"
                        className="w-[150px] sm:w-[372px] rounded-2xl cursor-pointer bg-[#00C950] py-2 text-2xl hover:bg-[#00b046]"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
