'use server'
import {CreateUserParams,UpdateUserParams} from '../../types';
import { handleError } from '../utils';
import {Prisma, PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export const createUser = async (user:CreateUserParams) => {
    try{
        const newUser = await prisma.user.create({
            data : {
                clerkId : user.clerkId,
                email : user.email,
                firstName : user.firstName,
                lastName : user.lastName,
                userName : user.username,
                photo : user.photo
            }
        })
        console.log(newUser);
        return JSON.parse(JSON.stringify(newUser));
    }
    catch(error){
        handleError(error);
    }
}

export const updateUser = async(id:string,user:UpdateUserParams) => {
    try{
        const updatedUser = await prisma.user.update({
            where : {id},
            data : {
                firstName : user.firstName,
                lastName : user.lastName,
                userName : user.lastName,
                photo : user.photo
            }
        })

        if(!updatedUser){
            throw new Error('User update failed');
        }
        return JSON.parse(JSON.stringify(updatedUser));
    }
    catch(error){
        handleError(error);
    }
}

export const deleteUser = async(id:string|undefined) => {
    try{
        const deletedUser = await prisma.user.delete({
            where : {id}
        });

        if(!deletedUser){
            throw new Error('User not found');
        }

        return JSON.parse(JSON.stringify(deletedUser));
    }
    catch(error){
        handleError(error);
    }
}
