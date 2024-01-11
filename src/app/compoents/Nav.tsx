'use client'

import React, {useEffect, useState} from 'react';

const Nav = () => {
    return (
        <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 shadow-2xl mb-3'>
            <div className='relative h-10 rounde-3xl shadow-2xl overflow-hidden'>
                <img src='./logo.png' alt='Logo' className='w-full h-full object-cover items-left'/>
            </div>  
            <a className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black hover:opacity-75' href='/'>
                Quality-Safety-Security
            </a>
        </nav>
    );
}

export default Nav;