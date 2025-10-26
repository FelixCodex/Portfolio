import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { HERO } from '../const';
import { CVButton } from './elements/CVButton';
import { SocialMedia } from './elements/SocialMedia';

// pt-56 pb-24 md:pt-[20.125rem] md:pb-[11.25rem]
// pt-[37%] pb-[15.68%] md:pt-[26.26%] md:pb-[14.68%]

export function Hero() {
	const { language } = useLanguage();

	return (
		<section className='bg-[--bg_pri] min-h-screen'>
			<div className='sect-container mx-auto flex h-full flex-col items-center px-4 hidder'>
				<div className='max-w-[51.125rem] pt-[37%] pb-[15.68%] md:pt-[26.26%] md:pb-[12.68%] px-4 flex items-center gap-8 flex-col'>
					<h1 className='text-4xl min-[560px]:text-5xl sm:text-6xl md:text-7xl font-bold text-center text-gray-900 md:text-gray-950'>
						{HERO.TITLE[language]}
					</h1>
					<p className='text-lg md:text-xl font-medium text-center text-gray-700'>
						{HERO.DESCRIPTION[language]}
					</p>
				</div>
				<div className='flex items-center justify-start flex-col md:flex-row gap-3 mb-5'>
					<CVButton></CVButton>
					<a
						href='#projects'
						className='inline-flex items-center w-full md:w-fit justify-center gap-2 bg-[#007BFF] hover:bg-[#00a2ff] text-white text-lg font-medium px-6 py-3.5 rounded-lg transition-colors'
					>
						{HERO.VIEW[language]}
						<ArrowRight className='w-5 h-5 rotate-90' />
					</a>
				</div>
				{/* <div
					className='absolute -top-1/4 left-[calc(50%-110px)] md:left-[calc(50%-260px)] w-[220px] h-[220px] md:w-[520px] md:h-[520px] opacity-20 -z-10 
                      bg-[#f5cb40] transform -rotate-45 blur-[100px] 
                      pointer-events-none'
				/> */}
				<SocialMedia></SocialMedia>
				<div className='flex mt-5 gap-5 hidden'>
					<div className='w-32 h-32 bg-[#007BFF]'></div>
					<div className='w-32 h-32 bg-[#1a1f36]'></div>
					<div className='w-32 h-32 bg-[#A1B1C6]'></div>
					<div className='w-32 h-32 bg-[#E6F0FF]'></div>
					<div className='w-32 h-32 bg-[#F5F7FA]'></div>
					<div className='w-32 h-32 bg-[#DADDE5]'></div>
					<div className='w-32 h-32 bg-[#8A7E72]'></div>
				</div>
			</div>
		</section>
	);
}
