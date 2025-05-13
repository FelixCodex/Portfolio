import { ArrowRight, File } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { HERO } from '../const';

export function Hero() {
	const { language } = useLanguage();
	return (
		<section className='bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl'>
					<h1 className='text-5xl font-bold mb-6'>{HERO.TITLE[language]}</h1>
					<p className='text-xl text-gray-300 mb-8'>
						{HERO.DESCRIPTION[language]}
					</p>
					<div className='flex items-center justify-start gap-3'>
						<a
							href='#projects'
							className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors'
						>
							{HERO.VIEW[language]}
							<ArrowRight className='w-5 h-5 rotate-90' />
						</a>
						<a
							href='/src/ResumeCV.pdf'
							download='JoséFelixCV.pdf'
							className='inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-300 text-blue-700 px-6 py-3 rounded-lg transition-colors'
						>
							{HERO.CV[language]}
							<File className='w-5 h-5' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
