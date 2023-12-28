import React from 'react';
import { Event } from '@/types';
import Link from 'next/link';
import {formatDateTime} from '@/lib/utils';
import Image from 'next/image';
import {auth} from '@clerk/nextjs';
import { DeleteConfirmation } from './DeleteConformation';

type CardProps = {
    eventData: Event,
    hasOrderLink?: boolean,
    hasPrice?: boolean
}

interface UserData{
    userId : string | null
}

const Card = ({ eventData, hasOrderLink, hasPrice }: CardProps) => {
    const { sessionClaims } = auth();
    const userData = sessionClaims?.userId as UserData;
    const isEventCreator = userData?.userId && eventData.organizer.id === userData.userId;

    return (
        <div className='group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden shadow-md rounded-xl bg-white transition-all hover:shadow-lg md:min-h-[438px]'>
            <Link href={`/events/${eventData.id}`} style={{ backgroundImage: `url(${eventData.imageUrl})` }} className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500'>
            </Link>
            {
                isEventCreator && !hasPrice && (
                    <div className='absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all'>
                        <Link href={`/events/${eventData.id}/update`}>
                            <Image src="/assets/icons/edit.svg" alt='edit' width={20} height={20}/>
                        </Link>
                        <DeleteConfirmation eventId={eventData.id}/>
                    </div>
                )
            }
            <Link href={`/events/${eventData.id}`} className='flex min-h-[230px] flex-col gap-3 p-5 md:gap-4'>
                {
                    !hasPrice && (
                        <div className='flex gap-2'>
                            <span className='p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-500'>
                                {eventData.isFree ? 'FREE' : `$${eventData.price}`}
                            </span>
                            <p className='p-semibold-14 w-min rounded-full bg-gray-600/10 px-4 py-1 text-gray-500'>{eventData.category.name}</p>
                        </div>
                    )
                }
                <p className='p-medium-16 text-gray-500 md:p-medium-18'>{formatDateTime(eventData.startDateTime).dateTime}</p>
                <p className='p-medium-16 line-clamp-2 flex-1 text-black md:p-medium-20'>{eventData.title}</p>
                <div className='flex-between w-full'>
                    <p className='p-medium-14 md:p-medium-16 text-gray-600'>{eventData.organizer.firstName} {eventData.organizer.lastName}</p>
                </div>
                {
                    hasOrderLink && (
                        <Link href={`/orders?eventId=${eventData.id}`} className='flex gap-2'>
                            <p className='text-primary-500'>Order Details</p>
                            <Image src="/assets/icons/arrow.svg" alt='arrow' width={10} height={10} />
                        </Link>
                    )
                }
            </Link>
        </div>
    )
}

export default Card