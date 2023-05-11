import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown({ ...props } ) {
    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <div onBlur={()=>{setTimeout(() => {
            setIsOpen(false)
        }, 200);}} className="relative flex justify-center items-center ">
            <Link to={props.link}  className="cursor-pointer  flex justify-center items-center duration-75 hover:scale-105 transition-transform hover:shadow rounded px-2 py-1  group" onClick={() => setIsOpen(!isOpen)}>
                {props.name}
            </Link>
            {isOpen && props.options&& (
                <div className=" absolute top-10 min-w-[160px] transition-all bg-brand-color bg-opacity-50 py-4 rounded-3xl drop-shadow-lg z-[1]">
                    {
                       props.options&&props.options.map((res, key) => {
                            return (
                                <Link to={res.link}   key={key} className='px-4 py-3 block hover:text-brand-color text-center font-serif font-extralight transition-all' >{res.name}</Link>
                            )

                        })
                    }
                </div>
            )}
        </div>
    );
}
