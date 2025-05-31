import React, { useState } from 'react';
import { XIcon, LucideAlignJustify } from 'lucide-react';
import { Logo } from './elements/Logo';
import { useLanguage } from '../hooks/useLanguage';
import { PAGES } from '../const';
import { Toggle } from './elements/Toggle';
import { useNavigatePage } from '../hooks/useNavigatePage';

export function Header() {
	const [bool, setBool] = useState(false);
	const [icon, setIcon] = useState(<LucideAlignJustify className='w-7 h-7' />);
	const { language, setLanguage } = useLanguage();
	const { navigatePage } = useNavigatePage();

	const handlerClick = (e: React.MouseEvent<HTMLElement>) => {
		document.querySelector('.mobile-links')?.classList.toggle('showLinks');
		if (bool) {
			setIcon(<LucideAlignJustify className='w-7 h-7' />);
		} else {
			setIcon(<XIcon className='w-7 h-7' />);
		}
		setBool(!bool);
		navigatePage(e);
	};

	const handleChangeLanguage = () => {
		setLanguage(language == 'es' ? 'en' : 'es');
	};

	return (
		<header className='text-gray-900 h-[4.125rem] fixed z-50 top-3 px-3 xl:px-0 w-full items-center'>
			<div className='sect-container mx-auto h-full'>
				<nav
					className='flex justify-between px-7 relative z-10 backdrop-blur-md bg-white/15 border border-white/40 rounded-3xl items-center flex-col h-fit'
					style={{
						boxShadow:
							'0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 15px 0px rgba(255, 255, 255, 0.3)',
					}}
				>
					<div className='w-full relative flex justify-center h-16'>
						<div className='flex absolute left-0 top-[calc(50%-0.875rem)] items-center gap-2 name-logo'>
							<Logo className='h-7 w-7'></Logo>
							<span className='text-xl font-bold'>Jose Felix</span>
						</div>
						<div className='flex items-center gap-6 links-mobile'>
							<p
								data-id=''
								className='hover:text-blue-500 text-lg font-medium cursor-pointer transition-colors'
								onClick={navigatePage}
							>
								{PAGES.HOME[language]}
							</p>
							<p
								data-id='about'
								className='hover:text-blue-500 text-lg font-medium cursor-pointer transition-colors'
								onClick={navigatePage}
							>
								{PAGES.ABOUT[language]}
							</p>
							<p
								data-id='contact'
								className='hover:text-blue-500 text-lg font-medium cursor-pointer transition-colors'
								onClick={navigatePage}
							>
								{PAGES.CONTACT[language]}
							</p>
						</div>
						<div className='flex absolute right-0 top-[calc(50%-0.9375rem)] items-center gap-4 links-mobile'>
							<Toggle
								checked={language == 'es'}
								onChange={handleChangeLanguage}
							></Toggle>
						</div>

						<div className='flex switch-mobile absolute right-0 top-[calc(50%-0.9375rem)] items-center gap-6'>
							<Toggle
								checked={language == 'es'}
								onChange={handleChangeLanguage}
							></Toggle>
							<button onClick={handlerClick}>{icon}</button>
						</div>
					</div>

					<div
						className={`flex gap-6 ${
							bool ? 'max-h-96' : 'max-h-0'
						} transition-[max-height] duration-500 ease-in-out md:max-h-0 overflow-hidden w-full`}
					>
						<div className='flex flex-col justify-start w-full gap-4 px-2 pb-5 pt-3'>
							<p
								data-id=''
								className='hover:text-blue-500 text-lg font-medium cursor-pointer transition-colors'
								onClick={handlerClick}
							>
								{PAGES.HOME[language]}
							</p>
							<p
								data-id='about'
								className='hover:text-blue-500 text-lg font-medium cursor-pointer transition-colors'
								onClick={handlerClick}
							>
								{PAGES.ABOUT[language]}
							</p>
							<p
								data-id='contact'
								className='hover:text-blue-500 text-lg font-medium cursor-pointer transition-colors'
								onClick={handlerClick}
							>
								{PAGES.CONTACT[language]}
							</p>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
