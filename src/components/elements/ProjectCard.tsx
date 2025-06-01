import { Circle, ExternalLink, Github, LockIcon } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSkills } from '../../hooks/useSkills';
import { Skills } from '../../types';

export function ProjectCard({
	title,
	description,
	image,
	tags,
	liveUrl,
	githubUrl,
}: {
	title: { en: string; es: string };
	description: { en: string; es: string };
	image: string;
	tags: Skills[];
	liveUrl?: string;
	githubUrl: string;
}) {
	const { language } = useLanguage();
	const skills = useSkills();

	return (
		<div className='relative overflow-hidden w-[90%] group rounded-2xl hover:scale-[101%] transition-transform h-fit p-4 shadow-sm bg-white/60 border border-gray-300'>
			<div className='w-full flex items-center justify-start md:justify-center mb-4'>
				<div className='absolute top-[.76rem] left-4 pt-[.625rem] md:flex items-center justify-center gap-2 hidden'>
					<Circle
						className='w-3 h-3 hover:scale-125 transition-[transform,color]'
						fill='#4b5563'
						stroke='#4b5563 '
					></Circle>
					<Circle
						className='w-3 h-3 hover:scale-125 transition-[transform,color]'
						fill='#4b5563'
						stroke='#4b5563 '
					></Circle>
					<Circle
						className='w-3 h-3 hover:scale-125 transition-[transform,color]'
						fill='#4b5563'
						stroke='#4b5563 '
					></Circle>
				</div>
				<p className='flex items-center justify-center gap-2'>
					<LockIcon className='text-gray-600 w-4 h-4 hover:scale-125 transition-[transform,color] hover:text-green-500'></LockIcon>
					<span className='text-gray-800'>{title[language]}</span>
				</p>
				<div className='absolute top-[.45rem] right-4 flex items-center justify-center gap-3 p-2 px-3 border border-gray-200 rounded-xl'>
					{liveUrl && (
						<a
							href={liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={'Direct link for ' + title[language]}
							className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
						>
							<ExternalLink className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
						</a>
					)}
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={'Github link for ' + title[language]}
						className='flex items-center gap-2 text-gray-700 hover:text-gray-900'
					>
						<Github className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
					</a>
				</div>
			</div>
			<div className='relative h-full flex flex-col gap-2'>
				<img
					src={image}
					alt={title[language]}
					className='w-full h-full border max-h-[33.125rem] border-gray-200 object-cover rounded-xl'
				/>
				<div
					className={`top-0 left-0 w-full flex flex-col-reverse gap-1 rounded-xl p-1 px-2 border border-gray-200
			 					 items-start justify-between h-full`}
				>
					<div className='px-1 md:p-1 w-fit gap-1 flex-wrap rounded-lg backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-center'>
						{tags.map(el => skills[el])}
					</div>
					<div className='rounded-lg w-fit font-medium sm:font-normal text-sm sm:text-lg md:text-xl cursor-default text-gray-600 backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-center px-1 md:p-3'>
						<p>{description[language]}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
