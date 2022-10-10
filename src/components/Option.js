import React from 'react';

const Option = ({ option }) => {
    // console.log(option);
    return (
        <div >
            {/* <h1 className='text-left '>{option}</h1> */}
            <ul className='text-left font-semibold text-xl pl-2 py-2 border'>
                <li className='flex gap-2'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    {option}
                </li>
            </ul>
            {/* <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold">59.99€</p>
                    <p className="text-sm line-through dark:text-gray-600">75.50€</p>
                </div>
            </div> */}
        </div>
    );
};

export default Option;

// className='grid grid-cols-1 mx-20 my-10 gap-10 lg:grid-cols-2 sm:grid-cols-2'