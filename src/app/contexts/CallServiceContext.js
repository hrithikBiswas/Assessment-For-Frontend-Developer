'use client';

import { createContext } from 'react';
import { useState } from 'react';

export const CallServiceContext = createContext(null);

export default function CallServiceProvider({ children }) {
    const [user, setUser] = useState({
        image: '/Avatar.png',
        fullName: 'Jane D.',
        email: 'jane@gmail.com',
        storeName: 'Ubreakfix Store',
        storeAddress: '123 Main Street, New York, NY 10001',
    });
    const [isEdit, setIsEdit] = useState(false);

    return (
        <CallServiceContext.Provider
            value={{
                user,
                setUser,
                isEdit,
                setIsEdit,
            }}
        >
            {children}
        </CallServiceContext.Provider>
    );
}
