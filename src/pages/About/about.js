import React from 'react';

const About = () => {

	return (
		<main className="mx-3 sm:mx-8 my-5 flex flex-wrap lg:flex-nowrap justify-center p-5 border-4 rounded-lg border-slate-500">
			<img
				className='mb-3 lg:mb-0 lg:mr-5 max-h-80 aspect-square'
				src={require('../assets/me.png')}
				alt="Headshot"
			/>
			<p className='text-darkgrey text-l sm:text-xl'>
				
			</p>
		</main>
	);
}

export default About;