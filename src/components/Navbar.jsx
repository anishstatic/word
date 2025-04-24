import React from 'react'
import { Book } from 'lucide-react';
import { History } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Moon } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar px-[250px] flex items-center justify-between h-[100px] border-[#374151]">
        <div className="logo flex items-center gap-[8px]">
        <Book size={"40px"} color='#9333ea'/>
        <h3 className='text-[22px] font-[600]'>Gloss<span className='text-purple-600'>Ai</span></h3>
        </div>
        <div className="icons flex items-center gap-[20px]">
        <History className='cursor-pointer  rounded-[100%] transition-all hover:bg-[#1F2937]'/>
        <Bookmark className='cursor-pointer  rounded-[100%] transition-all hover:bg-[#1F2937]'/>
        <Moon className='cursor-pointer  rounded-[100%] transition-all hover:bg-[#1F2937]'/>
        </div>
    </div>
  )
}

export default Navbar
