'use client';

import { APPOINTMENT_TABLE_DATA } from '@/constants';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from '@heroui/react';

export default function AppointmentTable() {
    return (
        <Table
            classNames={{
                base: 'mb-8',
                wrapper:
                    'bg-[#111B3B] rounded-[14px] border border-[#162F61] p-0',
                th: 'bg-[#111B3B] px-6 sm:px-10 py-4 text-white text-sm font-medium',
                tr: 'border-t border-t-[#162F61]',
                td: 'py-3 sm:py-5 px-6 sm:px-10',
            }}
            aria-label="appointment table"
        >
            <TableHeader>
                <TableColumn>Client Name</TableColumn>
                <TableColumn>Client Phone</TableColumn>
                <TableColumn>Client Mail</TableColumn>
                <TableColumn>Device</TableColumn>
                <TableColumn>Repair Type</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>Slot no</TableColumn>
                <TableColumn>Start Time</TableColumn>
            </TableHeader>
            <TableBody>
                {APPOINTMENT_TABLE_DATA.map((appointment, index) => (
                    <TableRow key={index}>
                        <TableCell className="text-[#51A2FF]">
                            {appointment.clientName}
                        </TableCell>
                        <TableCell>{appointment.clientPhone}</TableCell>
                        <TableCell>{appointment.clientMail}</TableCell>
                        <TableCell>{appointment.device}</TableCell>
                        <TableCell>{appointment.repairType}</TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.slotNo}</TableCell>
                        <TableCell>{appointment.startTime}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
