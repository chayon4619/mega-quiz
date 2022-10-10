import React from 'react';
import Option from './Option';

const Question = ({ question0 }) => {
    // console.log(question0);
    const { correctAnswer, question, options } = question0;
    return (
        <div className='border-b-2 border-gray-500'>
            {/* <h1>{question}</h1> */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans  text-3xl font-bold leading-none tracking-tight text-gray-700 sm:text-3xl md:mx-auto">
                        {question}
                    </h2>
                </div>
                <div className=" max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                    <div className=" max-w-md sm:mx-auto sm:flex-row">
                        {
                            options.map(option => <Option
                                option={option}
                            ></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;