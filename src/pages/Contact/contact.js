import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

	const [formState, changeForm] = useState({name: '', email: '', message: '', response: '', fieldEmpty: ''});

	const form = useRef();

	const handleChange = (event) => {
		const {name, value} = event.target;
		changeForm({
			...formState,
			[name]: value
		});
	};

	const checkInput = (event) => {
		if (!event.target.value) {
			changeForm({
				...formState,
				fieldEmpty: event.target.name
			});
		}
		else if (event.target.name === 'email') {
			const found = event.target.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
			if(!found) {
				changeForm({
					...formState,
					fieldEmpty: event.target.name
				});
			}
		}
		else {
			changeForm({
				...formState,
				fieldEmpty: ''
			});
		}
	}

	const handleContact = (event) => {
		event.preventDefault();
		if(!(formState.name && formState.email && formState.message)) {
			changeForm({
				...formState,
				response: 'FILL'
			});
			return;
		}
		changeForm({
			...formState,
			response: 'SEND'
		});
		emailjs.sendForm('service_bch523t', 'contact_form', form.current, 'K7vZ6jWYaMjTVM59J')
			.then((response) => {
				changeForm({
					...formState,
					response: 'OK'
				});
			}, (error) => {
				changeForm({
					...formState,
					response: 'ERROR'
				})
			});
	};

	return (
		<main className="mx-3 sm:mx-8 my-5 flex flex-wrap lg:flex-nowrap p-5 border-4 rounded-lg border-slate-500">
			<form ref={form} onSubmit={handleContact} className="sm:ml-5 w-full">
				<div className='mb-1'>
					Name:
				</div>
				<input type="name" name="name" onBlur={checkInput} onChange={handleChange} value={formState.name} placeholder="Name"
					className="sm:ml-2 border-2 border-slate-300 rounded-lg px-2 bg-slate-100 focus:bg-white w-full sm:w-60"/>
				<div className='my-1'>
					Email:
				</div>
				<input type="email" name="email" onBlur={checkInput} onChange={handleChange} value={formState.email} placeholder="Email"
					className="sm:ml-2 border-2 border-slate-300 rounded-lg px-2 bg-slate-100 focus:bg-white w-full sm:w-60"/>
				<div className='my-1'>
					Message:
				</div>
				<textarea name="message" onBlur={checkInput} onChange={handleChange} value={formState.message} cols="20" rows="4" placeholder='Message'
					className="sm:ml-2 border-2 border-slate-300 rounded-lg px-2 bg-slate-100 focus:bg-white w-full sm:w-96"/>
				<br/>
				<div className='text-xl sm:ml-2 my-2'>
					{(formState.fieldEmpty) ? `Valid ${formState.fieldEmpty} is required!` : ''}
				</div>
				<button type='submit' className="mt-2 sm:ml-2 border-2 border-orange-hl rounded-lg px-2 bg-slate-200 focus:bg-white">
					Submit
				</button>
				<div className='text-xl sm:ml-2 mt-2'>
					{
						// Successfully email
						(formState.response === 'OK') ? 'Email Sent!' : (
						// Sending an email
						(formState.response === 'SEND') ? 'Sending email...' : (
						// Form wasn't filled out properly
						(formState.response === 'FILL') ? 'All fields must contain information!' : (
						// Error sending email
						(formState.response === 'ERROR') ? 'Error sending email. Contact me at nicholasch96@gmail.com!' : 
						// No response set yet
						'')))
					}
				</div>
			</form>
		</main>
	);
}

export default Contact;