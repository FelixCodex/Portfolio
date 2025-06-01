import { ReactNode } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { ExternalLink, Github } from 'lucide-react';

export function SimpleProjectCard({
	icon,
	title,
	subtitle,
	link,
	github,
}: {
	icon: ReactNode;
	title: { en: string; es: string };
	subtitle: { en: string; es: string };
	link?: string | undefined;
	github: string;
}) {
	const { language } = useLanguage();
	return (
		<div
			className={`p-2 px-3 hover:scale-[102%] group flex items-center gap-5 transition-[transform,box-shadow] select-none bg-white/60 hover:shadow-lg hover:shadow-blue-200 border border-gray-200 rounded-lg shadow-sm`}
		>
			<div className='flex flex-col'>
				<p className='flex gap-4 items-center'>
					{icon}
					<span className='-ml-2 text-lg text-gray-700 group-hover:text-gray-800 transition-colors font-medium'>
						{title[language]}
					</span>
				</p>
				<p className='text-gray-400 group-hover:text-gray-500 transition-colors'>
					{subtitle[language]}
				</p>
			</div>
			<div className='flex gap-2 border border-gray-200 rounded-xl p-2'>
				{link && (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={'Direct link for ' + title[language]}
						className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
					>
						<ExternalLink className='w-6 h-6 hover:scale-[120%] transition-[transform] cursor-pointer' />
					</a>
				)}
				<a
					href={github}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={'Github link for ' + title[language]}
					className='flex items-center gap-2 text-gray-700 hover:text-gray-900'
				>
					<Github className='w-6 h-6 hover:scale-[120%] transition-[transform] cursor-pointer' />
				</a>
			</div>
		</div>
	);
}
