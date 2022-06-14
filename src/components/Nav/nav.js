import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    const [ selectionBorder, setSelection ] = useState({selection: 'about' , style: 'border-2 border-orange-h1'});

    const changeSelection = (selection) => {
        setSelection({
            ...selectionBorder,
            selection
        });
    }

    return (
        <nav className='grow pt-1'>
            <ul className='text-center sm:flex sm:flex-nowrap text-xl justify-center sm:justify-end'>
                <li className={`px-1 sm:px-2 ${(selectionBorder.selection === 'about') ? selectionBorder.style : 'border-2 border-transparent'}`}>
                    <Link onClick={() => changeSelection('about')} to="/Portfolio/about">About</Link>
                </li>
                <li className={`px-1 sm:px-2 ${(selectionBorder.selection === 'projects') ? selectionBorder.style : 'border-2 border-transparent'}`}>
                    <Link onClick={() => changeSelection('projects')} to="/Portfolio/projects">Projects</Link>
                </li>
                <li className={`px-1 sm:px-2 ${(selectionBorder.selection === 'contact') ? selectionBorder.style : 'border-2 border-transparent'}`}>
                    <Link onClick={() => changeSelection('contact')} to="/Portfolio/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;