import React from 'react';

const Intro = () => {
    return (
        <main className="mx-3 sm:mx-8 my-5 flex flex-wrap lg:flex-nowrap justify-center p-5 border-4 rounded-lg border-slate-500">
        <img
            className='mb-3 lg:mb-0 lg:mr-5 max-h-80 aspect-square'
            src={require('../assets/images/')}
            alt=""
        />
        <p className='text-darkgrey text-l sm:text-xl'>
            Nicholas Holzer
        </p>
    </main> 
    );
}

export default Intro;