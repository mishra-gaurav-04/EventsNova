'use server'
import { PrismaClient } from "@prisma/client";
import { handleError } from "../utils";
import {CreateUserParams} from '@/types';

const prisma = new PrismaClient();

export const createUser = async(user:CreateUserParams) => {
    try{
        const newUser = await prisma.user.create(
            {
                data : {
                    clerkId : user.clerkId,
                    userName : user.username,
                    photo : user.photo,
                    firstName : user.firstName,
                    lastName : user.lastName
                }
            }
        ) 
        if(!newUser){
            throw new Error('Something Went wrong')
        }
        return JSON.parse(JSON.stringify(newUser));
    }
    catch(error){
        handleError(error)
    }
}