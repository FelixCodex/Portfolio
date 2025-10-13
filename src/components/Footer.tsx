import { Check, Heart } from 'lucide-react';
import { Logo } from './elements/Logo';
import { CVButton } from './elements/CVButton';
import { SocialMedia } from './elements/SocialMedia';
import { MouseEvent, useState } from 'react';
import { useNavigatePage } from '../hooks/useNavigatePage';
import { useLanguage } from '../hooks/useLanguage';
import { FOOTER, PAGES } from '../const';

const liClass = 'cursor-pointer hover:text-blue-500';

export function Footer() {
	const [posx, setPosx] = useState(-96);
	const { navigatePage } = useNavigatePage();
	const { language } = useLanguage();
	const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
		setPosx(e.clientX - e.currentTarget.offsetLeft - 96);
	};
	return (
		<footer>
			<div className='relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-black py-20 overflow-hidden'>
				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
					<div className='absolute -bottom-28 -left-24 w-96 h-96 bg-blue-200/60 rounded-full blur-3xl'></div>
					<div className='absolute -bottom-28 -right-24 w-96 h-96 bg-indigo-200/60 rounded-full blur-3xl'></div>
				</div>

				<div className='z-10 flex flex-col items-center justify-center px-6 sm:px-10 gap-12 sect-container mx-auto max-w-4xl'>
					<h2 className='text-4xl sm:text-5xl font-semibold title-font text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700'>
						{FOOTER.CONTACT_TITLE[language]}
					</h2>
					<div className='flex items-center justify-center gap-6 flex-col md:flex-row w-full md:w-auto'>
						<button
							data-id='contact'
							className='w-48 h-14 relative group overflow-hidden cursor-pointer bg-gradient-nm flex text-lg font-medium items-center justify-center rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow'
							onMouseMove={handleMouseMove}
							onClick={navigatePage}
						>
							<span
								className='bg-gradient-foot w-[100%] h-full group-hover:opacity-100 opacity-0 absolute top-0 right-0 transition-opacity-2'
								style={{ transform: `translateX(${posx}px)` }}
							></span>
							<span className='z-20'>{FOOTER.CONTACT[language]}</span>
						</button>
						<p className='flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-lg shadow-sm'>
							<Check className='w-8 h-8 text-green-500'></Check>
							<span className='text-xl font-semibold text-gray-700'>
								{FOOTER.AVAILABLE[language]}
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className='bg-gray-900 text-white py-8 z-50'>
				<div className='sect-container mx-auto px-4'>
					<div className='flex p-5 md:p-10 gap-6 md:gap-0 w-full justify-between flex-col md:flex-row'>
						<div className='flex flex-col gap-4'>
							<div className=''>
								<p className='w-full h-full py-3 font-medium text-4xl font-mono'>
									{FOOTER.READY[language]}
								</p>
							</div>
							<div className='flex items-center gap-2 flex-col md:flex-row'>
								<CVButton></CVButton>
								<SocialMedia></SocialMedia>
							</div>
						</div>
						<div className='flex gap-7 pt-3'>
							<div className='flex gap-3 flex-col'>
								<h2 className='text-3xl font-medium'>
									{FOOTER.PAGES[language]}
								</h2>
								<ul className='flex gap-1 flex-col'>
									<li
										data-id=''
										className={liClass}
										onClick={navigatePage}
									>
										{PAGES.HOME[language]}
									</li>
									<li
										data-id='about'
										className={liClass}
										onClick={navigatePage}
									>
										{PAGES.ABOUT[language]}
									</li>
									<li
										data-id='contact'
										className={liClass}
										onClick={navigatePage}
									>
										{PAGES.CONTACT[language]}
									</li>
								</ul>
							</div>
							<div className='flex gap-3 flex-col'>
								<h2 className='text-3xl font-medium'>
									{FOOTER.SERVICES[language]}
								</h2>
								<ul className='flex gap-1 flex-col'>
									<li>{FOOTER.SOFTWARE[language]}</li>
									<li>{FOOTER.WEB[language]}</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row py-5 px-10 border-t border-gray-700 justify-between items-center'>
						<div className='flex items-center flex-col sm:flex-row gap-2 mb-4 md:mb-0'>
							<div className='flex items-center gap-2'>
								<Logo className='h-7 w-7'></Logo>
								<span className='text-xl font-bold'>Jose Felix</span>
							</div>
							<div className='flex items-end ml-1 justify-center gap-1'>
								<span className='flex pt-1'>{FOOTER.MADE[language]}</span>
								<Heart
									fill='#d00'
									stroke='#d00'
									className='anim-jump h-5 w-5 pb-[0.125rem]'
								></Heart>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
