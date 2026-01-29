import { useContext } from 'react';
import { CallServiceContext } from '@/contexts/CallServiceContext';

const useCallService = () => {
    const context = useContext(CallServiceContext);
    if (!context) {
        throw new Error(
            'useCallService must be used within a CallServiceProvider',
        );
    }
    return context;
};

export default useCallService;
