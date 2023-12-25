import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"

import { Category } from '@/types';
import { useState, useEffect } from 'react';
import Alert from './Alert';
import { getAllCategory } from '@/lib/actions/category.actions'


type DropdownProps = {
  value?: string,
  onChangeHandler?: () => void
}

const Dropdown = ({ onChangeHandler, value }: DropdownProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async() => {
      const categoryList = await getAllCategory();
      // console.log('Drop Down Component',categoryList)
      categoryList && setCategories(categoryList);
    }
    getCategories();
  },[]);

  console.log('DropDown Component ',categories);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {
          categories.length > 0 && categories.map((item: Category) => (
            <SelectItem key={item.id} value={item.id} className='select-item p-regular-14'>{item.name}</SelectItem>
          ))
        }
        <Alert onSetCategoriesHandler={setCategories} />
      </SelectContent>
    </Select>

  )
}

export default Dropdown
