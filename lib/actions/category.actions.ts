'use server'

import {CreateCategoryParams} from '@/types';
import { handleError } from '../utils';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createNewCategory = async({categoryName}:CreateCategoryParams) => {
    try{
        const newCategory = await prisma.category.create({
            data : {
                name : categoryName
            }
        });
        return JSON.parse(JSON.stringify(newCategory));
    }
    catch(error){
        handleError(error);
    }
};

export const  getAllCategory = async() => {
    try{
        const categories = await prisma.category.findMany();
        return JSON.parse(JSON.stringify(categories));
    }
    catch(error){
        handleError(error);
    }
}