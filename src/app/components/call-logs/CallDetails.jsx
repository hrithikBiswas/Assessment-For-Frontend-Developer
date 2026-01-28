import Image from 'next/image';
import React from 'react';

const CallDetails = () => {
    return (
        <div className="bg-[#111B3C] rounded-2xl border border-[#2B7FFF33]">
            <h1 className="text-xl p-6">Call Details</h1>
            <div className="p-6 border-t border-t-[#2B7FFF33]">
                <div className="grid grid-cols-2 grid-rows-1  mb-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm text-gray-400 leading-5">
                                Phone Number
                            </span>
                            <h2 className="text-base">+1 (555) 123-4567</h2>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm text-gray-400 leading-5">
                                Date & Time
                            </span>
                            <h2 className="text-base">2025-12-16 10:45 AM</h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm text-gray-400 leading-5">
                                Duration
                            </span>
                            <h2 className="text-base">4:32</h2>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm text-gray-400 leading-5">
                                Issue Type
                            </span>
                            <h2 className="text-base">Screen</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-1.5 mb-6">
                    <h5 className="text-sm text-gray-400 leading-5">
                        Issue Type
                    </h5>
                    <div
                        className={`border border-[#00C9504D] bg-[#00BC7D33] text-[#05DF72] rounded-[10px] py-1.5 px-3.5  text-xs`}
                    >
                        AI Reserved
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start mb-6">
                    <h5 className="text-sm text-gray-400 leading-5">Outcome</h5>
                    <h2 className="text-base">Quote provided</h2>
                </div>
                <button className="w-full p-4 mb-6 flex justify-center items-center gap-x-2 rounded-[14px] border border-[#AD46FF4D] bg-gradient-to-r from-[#AD46FF33] to-[#F6339A33] ">
                    <Image
                        src="/play.png"
                        alt="play Button"
                        width={20}
                        height={20}
                    />
                    <span className="text-[#C27AFF]">Play Audio Recording</span>
                </button>
                <div>
                    <div className="flex gap-x-4 mb-4">
                        <Image
                            src="/script.png"
                            alt="script Button"
                            width={20}
                            height={20}
                        />
                        <h2 className="text-base">Conversation Transcript</h2>
                    </div>
                    <div className="flex flex-col gap-y-3 rounded-[14px] bg-[#1D293D80] px-4 py-5">
                        <div className="flex flex-col gap-y-1">
                            <h3 className="text-sm text-[#05DF72]">
                                AI Assistant:
                            </h3>
                            <p className="text-xs text-white leading-5">
                                Thank you for calling UBreakiFix! How can I help
                                you today?
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="text-sm text-[#51A2FF]">
                                Customer:
                            </h3>
                            <p className="text-xs text-white leading-5">
                                Hi, my iPhone 13 screen is cracked. How much
                                would
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="text-sm text-[#05DF72]">
                                AI Assistant:
                            </h3>
                            <p className="text-xs text-white leading-5">
                                I can help you with that! For an iPhone 13
                                screen repair, our price is $199. This includes
                                parts, labor, and comes with a 90-day warranty.
                                Would you like to book an appointment?
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="text-sm text-[#51A2FF]">
                                Customer:
                            </h3>
                            <p className="text-xs text-white leading-5">
                                Yes, please! When are you available?
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h3 className="text-sm text-[#05DF72]">
                                AI Assistant:
                            </h3>
                            <p className="text-xs text-white leading-5">
                                Great! I have availability today at 2:00 PM or
                                tomorrow at 10:00 AM. Which works better for
                                you?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallDetails;
