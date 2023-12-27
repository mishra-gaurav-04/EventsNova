'use server';

import {PrismaClient} from '@prisma/client';
import {CreateEventParams} from '@/types';
import { handleError } from '../utils';

const prisma = new PrismaClient();

export const createEvent = async(eventParams:CreateEventParams) => {
    try{
        const {event,userId,path} = eventParams;
        const organizer = await prisma.user.findUnique({
            where : {
                id : userId
            }
        })
        if(!organizer){
            throw new Error('Invalid Organizer')
        }

        const newEvent = await prisma.events.create({
            data : {
                ...event,
                categoryId:event.categoryId,
                organizerId:userId
            }
        });
        return JSON.parse(JSON.stringify(newEvent));
    }
    catch(error){
        handleError(error);
    }
};

export const getEventById = async(eventId:string) => {
    try{
        const event = await prisma.events.findUnique({
            where : {
                id : eventId
            },
            include : {
                organizer : {
                    select : {
                        id : true,
                        firstName : true,
                        lastName : true
                    }
                },
                category : {
                    select : {
                        id : true,
                        name : true
                    }
                }
            }
        });
        if(!event){
            throw new Error('Event Not Found');
        }

        return JSON.parse(JSON.stringify(event));
    }
    catch(error){
        handleError(error);
    }
}
