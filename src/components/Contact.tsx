import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { CONTACT } from '../const';

export function Contact() {
	const { language } = useLanguage();
	return (
		<section
			id='contact'
			className='py-20 bg-gray-50'
		>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					{CONTACT.TITLE[language]}
				</h2>
				<div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8'>
					<div className='space-y-6'>
						<h3 className='text-xl font-semibold mb-4'>
							{CONTACT.INFO[language]}
						</h3>
						<div className='flex items-center gap-3'>
							<Mail className='w-5 h-5 text-blue-600' />
							<a
								href='mailto:josefelixlr05@gmail.com'
								className='hover:text-blue-600'
							>
								josefelixlr05@gmail.com
							</a>
						</div>
						<div className='flex items-center gap-3'>
							<Linkedin className='w-5 h-5 text-blue-600' />
							<a
								href='https://cu.linkedin.com/in/jos%C3%A9-felix-lorenzo-rodr%C3%ADguez-b747b6328'
								className='hover:text-blue-600'
							>
								Linkedin
							</a>
						</div>
						<div className='flex items-center gap-3'>
							<Facebook className='w-5 h-5 text-blue-600' />
							<a
								href='https://www.facebook.com/profile.php?id=100088139118774'
								className='hover:text-blue-600'
							>
								Facebook
							</a>
						</div>
					</div>
					<form className='space-y-4'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								{CONTACT.NAME[language]}
							</label>
							<input
								type='text'
								id='name'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								{CONTACT.EMAIL[language]}
							</label>
							<input
								type='email'
								id='email'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								{CONTACT.MESSAGE[language]}
							</label>
							<textarea
								id='message'
								rows={4}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							></textarea>
						</div>
						<button
							type='submit'
							className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors'
						>
							{CONTACT.SEND[language]}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
