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

            <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                <div className='w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start'>

                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>

                <div className='lg:flex flex-grow items-center'>
                    <ul className='flex flex-col lg:flex-row list-none ml-auto'>
                        <li className='nav-item'>
                            <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leadig-snug text-black hover:opacity-75 cursor-pointer'>
                                Discover
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leadig-snug text-black hover:opacity-75 cursor-pointer'>
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;