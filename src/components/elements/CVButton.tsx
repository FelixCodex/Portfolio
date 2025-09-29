import { File } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { HERO } from '../../const';

export function CVButton() {
	const { language } = useLanguage();
	return (
		<>
			{language == 'es' ? (
				<div className='bluebow-border-with-xy anim-dasher w-fit h-fit p-[2px] rounded-lg shadow-nm hover:shadow-hm transition-[background-color,box-shadow] duration-[400ms] hover:bg-[#51a5ff] hover'>
					<a
						href='/src/ResumeCV-es.pdf'
						download='JoséFelixCV.pdf'
						className='inline-flex items-center gap-2 bg-white md:text-lg font-medium from-[#dce9f9] to-[#f0f8ff] text-black px-6 py-3 rounded-lg transition-colors'
					>
						{HERO.CV[language]}
						<File className='w-5 h-5' />
					</a>
				</div>
			) : (
				<div className='bluebow-border-with-xy anim-dasher p-[2px] rounded-lg shadow-nm hover:shadow-hm transition-[background-color,box-shadow] duration-[400ms] hover:bg-[#51a5ff] hover'>
					<a
						href='/src/ResumeCV-en.pdf'
						download='JoséFelixCV.pdf'
						className='inline-flex items-center gap-2 bg-white md:text-lg font-medium from-[#dce9f9] to-[#f0f8ff] text-black px-6 py-3 rounded-lg transition-colors'
					>
						{HERO.CV[language]}
						<File className='w-5 h-5' />
					</a>
				</div>
			)}
		</>
	);
}
