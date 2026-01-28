import React from 'react';
import CallListItem from '@/components/call-logs/CallListItem';
import { CALL_LISTS } from '@/constants';

const CallList = () => {
    return (
        <div className="bg-[#111B3C] rounded-2xl border border-[#2B7FFF33]">
            <h1 className="text-xl p-6">Call List</h1>
            <div>
                {CALL_LISTS.map((call, index) => (
                    <CallListItem key={index} call={call} />
                ))}
            </div>
        </div>
    );
};

export default CallList;
