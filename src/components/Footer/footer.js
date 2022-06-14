import React from 'react';

const Footer = () => {
	return (
		<footer>
			<ul className='flex flex-wrap w-auto justify-center py-2'>
			<li className='mx-3'>
					<a href="https://github.com/NicholasConradHolzer">
						<img
							src={require('../../assets/github-logo-dark.png')}
							alt="GitHub Logo"
							className="h-10 opacity-100 hover:opacity-60"
						/>
					</a>
				</li>
				<li className='mx-3'>
					<a href="linkedinaddress" alt="noaddressfunctional">
						<img 
							src={require('../../assets/linkedin-logo-dark.png')}
							alt="LinkedIn Logo"
							className="h-10 opacity-100 hover:opacity-60"
						/>
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;