'use client';
import PageHeader from '@/components/layout/PageHeader';
import EditUser from '@/components/settings/EditUser';
import User from '@/components/settings/User';
import useCallService from '@/hooks/useCallService';

const SettingsPage = () => {
    const { isEdit } = useCallService();

    return (
        <div className="page-container">
            <PageHeader title="Settings" />
            <div className="p-4 sm:p-6">
                <div className="flex gap-x-6 sm:gap-x-10 px-3 mb-8 sm:mb-10">
                    <button className="text-2xl leading-9">Porfile</button>
                    <button className="text-2xl leading-9">
                        Password Setting
                    </button>
                </div>
                {isEdit ? <EditUser /> : <User />}
            </div>
        </div>
    );
};

export default SettingsPage;
