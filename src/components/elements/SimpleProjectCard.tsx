import { ReactNode } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { ExternalLink, Github } from 'lucide-react';
import { useSkills } from '../../hooks/useSkills';
import { Skills } from '../../types';

export function SimpleProjectCard({
	icon,
	title,
	subtitle,
	link,
	github,
	tags,
}: {
	icon: ReactNode;
	title: { en: string; es: string };
	subtitle: { en: string; es: string };
	link?: string | undefined;
	github: string;
	tags?: Skills[];
}) {
	const { language } = useLanguage();
	const skills = useSkills('small');
	return (
		<div
			className={`p-2 px-3 hover:scale-[102%] relative group h-fit hover:mb-14 lg:hover:mb-0 flex items-center justify-center gap-5 transition-[transform,box-shadow,margin] select-none bg-white/60 hover:shadow-lg hover:shadow-blue-100 border border-gray-200 rounded-lg shadow-sm`}
		>
			<div className='flex flex-col'>
				<p className='flex gap-4 items-center -mb-1'>
					{icon}
					<span className='-ml-2 text-lg text-gray-700 group-hover:text-gray-800 transition-colors font-medium'>
						{title[language]}
					</span>
				</p>
				<p className='text-gray-400 group-hover:text-gray-500 transition-colors'>
					{subtitle[language]}
				</p>
			</div>
			<div className='flex gap-2'>
				{link && (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={'Direct link for ' + title[language]}
						className='p-2.5 bg-white rounded-lg border border-gray-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-200 shadow-sm'
					>
						<ExternalLink className='w-5 h-5' />
					</a>
				)}
				<a
					href={github}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={'Github link for ' + title[language]}
					className='p-2.5 bg-white rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-200 shadow-sm'
				>
					<Github className='w-5 h-5' />
				</a>
			</div>

			{tags && (
				<span className='tooltiptext tooltip-bottom p-1 flex items-center justify-center group-hover:opacity-100 transition-opacity'>
					<span className='p-1 text-gray-700 group-hover:translate-y-2 flex items-center gap-1 bg-white border rounded-lg border-gray-300 opacity-100 cursor-default shadow-sm text-xs md:text-sm font-medium transition-[transform]'>
						{tags.map(el => skills[el])}
					</span>
				</span>
			)}
		</div>
	);
}
