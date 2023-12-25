import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {Catefory} from '@/types';
import {useState} from 'react';
import Alert from './Alert';


type DropdownProps = {
    value ?: string,
    onChangeHandler ?: () => void
}

const Dropdown = ({onChangeHandler,value}:DropdownProps) => {
  const [categories,setCategories] = useState<Catefory[]>([]);
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {
             categories.length > 0 && categories.map((item:Catefory) => (
                 <SelectItem key={item._id} value={item.name} className='select-item p-regular-14'>{item.name}</SelectItem>
             ))
          }
          <Alert/>
        </SelectContent>
    </Select>

  )
}

export default Dropdown
