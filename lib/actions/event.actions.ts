'use server';

import {PrismaClient} from '@prisma/client';
import {CreateEventParams, GetAllEventsParams} from '@/types';
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

export const getAllEvents = async({query,limit=6,page,category}:GetAllEventsParams) => {
    try{
        const currentPage = page > 0 ? page : 1;
        const skipAmount = (currentPage-1)*limit;
        const events = await prisma.events.findMany({
            include : {
                organizer : {
                    select : {
                        id : true,
                        firstName : true,
                        lastName : true,
                    }
                },
                category : {
                    select : {
                        id : true,
                        name : true
                    }
                }
            },
            orderBy : {
                createdAt : 'desc'
            },
            skip : 0,
            take : limit
        });

        if(!events){
            throw new Error('Events Not found');
        }

        return {
            data : JSON.parse(JSON.stringify(events))
        }
    }
    catch(error){
        handleError(error);
    }
}