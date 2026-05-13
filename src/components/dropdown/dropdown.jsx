import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({ placeholder, options = [], onChange }) => {

    let selected_options = placeholder === 'all'
            ? 'All Blogs'
            : (options.find(option => option.slug === placeholder)?.name || 'All Blogs');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value) => {
        onChange(value);
        setIsOpen(false); // Close dropdown after selecting an option
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        } 
    };

     // Close dropdown if history changes (back or forward navigation)
     const handleHistoryChange = () => {
        setIsOpen(false);
    };

    // Add event listener for outside clicks
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('popstate', handleHistoryChange);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('popstate', handleHistoryChange);
        };
    }, []);

    return (
        <div className='relative w-fit' ref={dropdownRef}>
            <div
                className='w-56 cursor-pointer rb-select-blogs border border-rb-black/40 bg-rb-white pt-2 pb-8 px-4 rounded-6xl h-7.5 text-rb-black uppercase font-medium dd-field'
                onClick={toggleDropdown}
            >
                {selected_options}
            </div>
            {isOpen && (
                <ul
                    onWheel={(event) => event.stopPropagation()}
                    className=' cursor-pointer absolute w-56 bg-white border border-stone-300 rounded-lg max-h-60 overflow-y-auto mt-2 z-10 custom-scrollbar'
                >

                    {[
                        { name: 'All Blogs', slug: 'all-blogs' }, // Ensure 'All Blogs' is first
                        ...options.sort((a, b) => a.name.localeCompare(b.name)) // Sort the rest alphabetically
                    ].map((option) => (
                        <li
                            key={option.slug}
                            className="py-2 px-6 cursor-pointer hover:bg-gray-300"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.name}
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
};