/* eslint-disable @typescript-eslint/no-unused-vars */
import { Facebook, Github, Linkedin, Mail, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { CONTACT } from '../const';
import { useObserver } from '../hooks/useObserver';
import { useEffect, useState } from 'react';

const iClass =
	'w-7 h-7 text-blue-600 group-hover:scale-[140%] transition-transform';
const sClass =
	'group-hover:text-blue-600 text-lg font-medium text-gray-700 transition-colors';

export default function Contact() {
	const { language } = useLanguage();
	const [data, setData] = useState({ name: '', email: '', message: '' });
	const [success, setSuccess] = useState<boolean | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const observe = useObserver();
	useEffect(() => {
		observe();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch(
				'https://portfolio-email-redirect-worker.josefelixlr05.workers.dev',
				{
					method: 'POST',
					body: JSON.stringify(data),
				}
			);
			console.log(res.status);
			if (res.status === 200) {
				setSuccess(true);
			} else {
				setSuccess(false);
			}
		} catch (error) {
			console.log(error);
			setSuccess(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id='contact'
			className='bg-gray-50 min-h-screen'
		>
			<div className='sect-container relative mx-auto flex items-center justify-center px-4 pt-32 pb-24 md:pt-[12rem] md:pb-[11.25rem] hidder'>
				<div className='w-full max-w-[64rem] p-3 md:p-12'>
					<h2 className='text-4xl md:text-6xl text-gray-800 font-medium text-start mb-12'>
						{CONTACT.TITLE[language]}
					</h2>
					<div className='grid md:grid-cols-2 gap-12'>
						<div className='rainbow-border rounded-xl p-[.125rem]'>
							<form
								className='space-y-4 bg-white p-4 rounded-[.625rem]'
								onSubmit={handleSubmit}
							>
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
										value={data.name}
										onChange={e => {
											setData({ ...data, name: e.target.value });
										}}
										required
										className='w-full px-4 py-2 border-2 font-medium text-gray-700 border-gray-200 rounded-lg outline-none focus:border-blue-600 transition-colors duration-300'
										placeholder={CONTACT.NAME_PLACEHOLDER[language]}
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
										value={data.email}
										onChange={e => {
											setData({ ...data, email: e.target.value });
										}}
										required
										className='w-full px-4 py-2 border-2 font-medium text-gray-700 border-gray-200 rounded-lg outline-none focus:border-blue-600 transition-colors duration-300'
										placeholder={CONTACT.EMAIL_PLACEHOLDER[language]}
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
										value={data.message}
										onChange={e => {
											setData({ ...data, message: e.target.value });
										}}
										required
										className='w-full px-4 py-2 border-2 font-medium text-gray-700 border-gray-200 rounded-lg outline-none focus:border-blue-600 transition-colors duration-300'
										placeholder={CONTACT.MESSAGE_PLACEHOLDER[language]}
									></textarea>
								</div>
								<button
									type='submit'
									className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors'
								>
									{CONTACT.SEND[language]}
								</button>
								<div
									className={`w-full flex ${
										loading
											? ' bg-blue-200 border-blue-400'
											: success != null
											? success
												? 'bg-green-200 border-green-400'
												: 'bg-red-200 border-red-400'
											: 'hidden'
									} rounded-lg border-2 justify-between items-center p-2`}
								>
									<p
										className={`${
											loading
												? ' text-blue-600'
												: success != null
												? success
													? 'flex text-green-600'
													: 'flex text-red-600'
												: ''
										} font-medium pl-2`}
									>
										{loading
											? `${CONTACT.RESULT_LOADING[language]}`
											: success != null
											? success
												? `${CONTACT.RESULT_SUCCESS[language]}`
												: `${CONTACT.RESULT_FAILED[language]}`
											: ''}
									</p>
									<button
										className={`flex ${
											loading
												? 'hover:bg-blue-300 text-blue-600'
												: success != null
												? success
													? 'hover:bg-green-300 text-green-600'
													: 'hover:bg-red-300 text-red-600'
												: ''
										} rounded-lg p-1`}
										onClick={e => {
											e.preventDefault();
											setSuccess(null);
											setLoading(false);
										}}
									>
										<X className='h-6 w-6' />
									</button>
								</div>
							</form>
						</div>
						<div className='space-y-6 md:pl-24'>
							<h3 className='text-3xl text-gray-800 font-semibold mb-4'>
								{CONTACT.INFO[language]}
							</h3>
							<a
								className='flex items-center gap-5 group'
								href='mailto:josefelixlr05@gmail.com'
							>
								<Mail className={iClass} />
								<span className={sClass}>josefelixlr05@gmail.com</span>
							</a>
							<a
								className='flex items-center gap-5 group'
								href='https://github.com/FelixCodex'
							>
								<Github className={iClass} />
								<span className={sClass}>FelixCodex</span>
							</a>
							<a
								className='flex items-center gap-5 group'
								href='https://www.linkedin.com/in/josé-felix-lr'
							>
								<Linkedin className={iClass} />
								<span className={sClass}>Linkedin</span>
							</a>
							<a
								className='flex items-center gap-5 group'
								href='https://www.facebook.com/profile.php?id=100088139118774'
							>
								<Facebook className={iClass} />
								<span className={sClass}>Facebook</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
