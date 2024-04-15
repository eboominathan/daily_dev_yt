import { Search } from 'lucide-react'
import React from 'react'

export default function SearchInput() {
  return (
    <div className='relative '>
        <input type="text"  className='w-full lg:w-[500px] h-12 py-2 pl-10 outline-none bg-muted rounded-2xl'
        placeholder='Search here' />
        <Search className='absolute left-2 top-3 h-6 w-6 '/>
    </div>
  )
}
