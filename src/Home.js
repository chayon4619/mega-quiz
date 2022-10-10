import React from 'react';
import Quiz from './components/Quiz';

const Home = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-900">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl  font-bold leading-none sm:text-5xl"> How much
                        <span className="text-violet-400"> you about</span> web development?
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Try yourself and know how much you know about website development using different things!</p>
                </div>
            </section>
            <section>
                {
                    <Quiz></Quiz>
                }

            </section>
        </div>
    );
};

export default Home;