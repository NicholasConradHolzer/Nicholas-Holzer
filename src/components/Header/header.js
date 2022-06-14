import React from 'react';
import Nav from '../Nav';

const Header = () => {
    return (
        <header>
            <section>
                <h1 className="text-2xl font-bold text-center sm:grow sm:text-left">Nicholas Holzer</h1>
                <Nav/>
            </section>
            <div
				className="bg-banner h-40 bg-cover"
			/>
        </header>
    );
}

export default Header;