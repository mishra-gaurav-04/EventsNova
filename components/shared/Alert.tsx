import React, { startTransition } from 'react'
import { useState } from 'react'
import {AlertDialog, AlertDialogAction, AlertDialogCancel,AlertDialogContent,AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Input } from '../ui/input'
import {createNewCategory} from '@/lib/actions/category.actions'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Category } from '@/types'

type AlertProps = {
    onSetCategoriesHandler : (prevState:any) => void
}

const Alert = ({onSetCategoriesHandler} : AlertProps) => {
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        createNewCategory({
            categoryName : newCategory
        })
        .then((category) => {
           onSetCategoriesHandler((prevState:any) => [...prevState,category])
        })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>+ Add New Category</AlertDialogTrigger>
            <AlertDialogContent className='bg-white'>
                <AlertDialogHeader>
                    <AlertDialogTitle>New Category</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Input type='text' placeholder='Enter New Category' className='input-field mt-3' onChange={(e) => { setNewCategory(e.target.value) }}/>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default Alert