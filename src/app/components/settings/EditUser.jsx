'use client';
import Image from 'next/image';
import React from 'react';

const EditUser = ({ user, setUser, setIsEdit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('update data:', user);
        setIsEdit(false);
    };
    const handleChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <div className="mb-8">
                <h3 className="text-xl mb-2">Profile Image</h3>
                <div className="relative w-[102px] h-[102px]">
                    <Image
                        src="/Avatar.png"
                        alt="profile photo"
                        className="w-[102px] h-[102px]"
                        width={102}
                        height={102}
                    />
                    <Image
                        src="/edit.png"
                        alt="edit photo"
                        className="w-10 h-10 absolute -bottom-1 -right-1"
                        width={40}
                        height={40}
                    />
                </div>
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
                            value={user.fullName}
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
                            value={user.email}
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
                            value={user.storeName}
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
                            value={user.storeAddress}
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
