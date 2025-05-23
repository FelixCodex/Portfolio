import React, { useState } from 'react';
import {
	Mail,
	Github,
	Linkedin,
	Facebook,
	XIcon,
	LucideAlignJustify,
} from 'lucide-react';
import { Logo } from './elements/Logo';
import { useLanguage } from '../hooks/useLanguage';
import { HEADER } from '../const';
import { Toggle } from './elements/Toggle';

export function Header() {
	const [bool, setBool] = useState(false);
	const [icon, setIcon] = useState(<LucideAlignJustify className='w-7 h-7' />);
	const { language, setLanguage } = useLanguage();

	const handlerClick = () => {
		document.querySelector('.mobile-links')?.classList.toggle('showLinks');
		if (bool) {
			setBool(!bool);
			setIcon(<LucideAlignJustify className='w-7 h-7' />);
		} else {
			setBool(!bool);
			setIcon(<XIcon className='w-7 h-7' />);
		}
	};

	const handleChangeLanguage = () => {
		setLanguage(language == 'es' ? 'en' : 'es');
	};

	return (
		<header className='bg-gray-900 text-white h-20 fixed z-50 top-0 w-full items-center'>
			<div className='container mx-auto h-full'>
				<nav className='flex justify-between px-4 relative z-10 bg-gray-900 items-center h-full'>
					<div className='flex items-center gap-2 name-logo'>
						<Logo className='h-7 w-7'></Logo>
						<span className='text-xl font-bold'>Jose Felix</span>
					</div>
					<div className='flex items-center gap-6 links-mobile'>
						<a
							href='#skills'
							className='hover:text-blue-400 transition-colors'
						>
							{HEADER.SKILLS[language]}
						</a>
						<a
							href='#projects'
							className='hover:text-blue-400 transition-colors'
						>
							{HEADER.PROJECTS[language]}
						</a>
						<a
							href='#contact'
							className='hover:text-blue-400 transition-colors'
						>
							{HEADER.CONTACT[language]}
						</a>
					</div>
					<div className='flex items-center gap-4 links-mobile'>
						<a
							href='mailto:josefelixlr05@gmail.com'
							className='hover:text-blue-400 transition-colors'
						>
							<Mail className='w-5 h-5' />
						</a>
						<a
							href='https://github.com/Jer403'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
						>
							<Github className='w-5 h-5' />
						</a>
						<a
							href='https://cu.linkedin.com/in/jos%C3%A9-felix-lorenzo-rodr%C3%ADguez-b747b6328'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
						>
							<Linkedin className='w-5 h-5' />
						</a>
						<a
							href='https://www.facebook.com/profile.php?id=100088139118774'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
						>
							<Facebook className='w-5 h-5' />
						</a>
						<Toggle
							checked={language == 'es'}
							onChange={handleChangeLanguage}
						></Toggle>
					</div>

					<div className='flex switch-mobile items-center gap-6'>
						<Toggle
							checked={language == 'es'}
							onChange={handleChangeLanguage}
						></Toggle>
						<button onClick={handlerClick}>{icon}</button>
					</div>
				</nav>
				<div className='flex mobile-links gap-6'>
					<div className='flex flex-col gap-6 links-t'>
						<a
							href='#skills'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							{HEADER.SKILLS[language]}
						</a>
						<a
							href='#projects'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							{HEADER.PROJECTS[language]}
						</a>
						<a
							href='#contact'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							{HEADER.CONTACT[language]}
						</a>
					</div>
					<div className='flex items-center gap-4 links-i'>
						<a
							href='mailto:josefelixlr05@gmail.com'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							<Mail className='w-5 h-5' />
						</a>
						<a
							href='https://github.com/josefelix'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							<Github className='w-5 h-5' />
						</a>
						<a
							href='https://cu.linkedin.com/in/jos%C3%A9-felix-lorenzo-rodr%C3%ADguez-b747b6328'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							<Linkedin className='w-5 h-5' />
						</a>
						<a
							href='https://www.facebook.com/profile.php?id=100088139118774'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-blue-400 transition-colors'
							onClick={handlerClick}
						>
							<Facebook className='w-5 h-5' />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
