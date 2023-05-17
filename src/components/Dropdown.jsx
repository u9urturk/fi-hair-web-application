import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown({ ...props }) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div onBlur={() => {
            setTimeout(() => {
                setIsOpen(false);

            }, 200);
        }} className=" flex justify-center items-center ">
            <Link to={props.link} className="cursor-pointer w-44 md:w-auto rounded-tl-3xl md:bg-transparent px-4 rounded-br-3xl    flex justify-center items-center duration-75 md:hover:scale-105 transition-transform shadow md:shadow-none md:hover:shadow rounded  py-1  group" onClick={() => setIsOpen(!isOpen)}>
                {props.name}
            </Link>
            {isOpen && props.options && (
                <div className='relative flex justify-center items-center'>
                    <div className="md:absolute -right-6 top-10 min-w-[160px] transition-all  py-4 rounded-b-3xl drop-shadow-lg z-[1]">
                        {
                            props.options && props.options.map((res, key) => {
                                return (
                                    <Link to={res.link} onClick={props.close} key={key} className='px-4 py-3 block hover:text-brand-color text-center font-serif font-extralight transition-all' >{res.name}</Link>
                                )

                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
}
