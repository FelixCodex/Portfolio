import { ExternalLink, Github, LockIcon } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useSkills } from '../../hooks/useSkills';
import { Skills } from '../../types';
import { PROJECTS } from '../../const';
import { useImageViewer } from '../../hooks/useImageViewer';

export function ProjectCard({
	title,
	description,
	images,
	tags,
	liveUrl,
	githubUrl,
}: {
	title: { en: string; es: string };
	description: { en: string; es: string };
	images: string[];
	tags: Skills[];
	liveUrl?: string;
	githubUrl: string;
}) {
	const { language } = useLanguage();
	const skills = useSkills();
	const { setImageSet } = useImageViewer();

	const handleViewImage = () => {
		setImageSet(images);
	};

	return (
		<div className='group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
			<div className='relative bg-gradient-to-r from-gray-50 to-gray-100 px-3 lg:px-6 py-4 border-b border-gray-200'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<div className='p-2 bg-white rounded-lg shadow-sm border border-gray-200 group-hover:border-green-400 transition-colors'>
							<LockIcon className='text-gray-600 w-4 h-4 group-hover:text-green-500 transition-colors' />
						</div>
						<h3 className='text-xl font-semibold text-gray-900'>
							{title[language]}
						</h3>
					</div>

					<div className='flex items-center gap-2'>
						{liveUrl && (
							<a
								href={liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={'Direct link for ' + title[language]}
								className='p-2.5 bg-white rounded-lg border border-gray-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-200 shadow-sm'
							>
								<ExternalLink className='w-5 h-5' />
							</a>
						)}
						<a
							href={githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={'Github link for ' + title[language]}
							className='p-2.5 bg-white rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-200 shadow-sm'
						>
							<Github className='w-5 h-5' />
						</a>
					</div>
				</div>

				<div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
			</div>

			<div className='p-3 lg:p-6'>
				<div className='flex flex-col lg:flex-row gap-4'>
					{/* Image Gallery */}
					<div className='flex-1 space-y-3'>
						{/* Main Image */}
						<div
							className='relative overflow-hidden rounded-xl border border-gray-200 shadow-md group/img cursor-pointer'
							onClick={() => {
								handleViewImage();
							}}
						>
							<img
								src={images[0]}
								alt={title[language]}
								className='w-full h-auto max-h-[400px] object-cover transition-transform duration-500 group-hover/img:scale-105'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300'></div>
						</div>

						{/* Thumbnail Gallery */}
						<div className='grid grid-cols-2 gap-3'>
							<div
								className='relative overflow-hidden rounded-lg border border-gray-200 shadow-sm group/thumb cursor-pointer'
								onClick={() => {
									handleViewImage();
								}}
							>
								<img
									src={images[1]}
									alt={title[language]}
									className='w-full h-32 object-cover transition-transform duration-300 group-hover/thumb:scale-110'
								/>
							</div>
							<div
								className='relative overflow-hidden rounded-lg border border-gray-200 shadow-sm group/thumb cursor-pointer'
								onClick={() => {
									handleViewImage();
								}}
							>
								<img
									src={images[2]}
									alt={title[language]}
									className='w-full h-32 object-cover transition-transform duration-300 group-hover/thumb:scale-110'
								/>
							</div>
						</div>
					</div>

					{/* Project Info */}
					<div className='flex-1 flex flex-col gap-4'>
						{/* Description */}
						<div className='flex-1 bg-gradient-to-br h-full from-gray-50 to-white rounded-xl p-5 border border-gray-200 shadow-sm'>
							<h4 className='text- font-semibold text-gray-500 uppercase tracking-wide mb-2'>
								{PROJECTS.DESCRIPTION[language]}
							</h4>
							<p className='text-gray-700 font-medium leading-relaxed text-base'>
								{description[language]}
							</p>
						</div>

						{/* Technologies */}
						<div className='bg-gradient-to-br h-full from-gray-50 to-white rounded-xl p-5 border border-gray-200 shadow-sm'>
							<h4 className='text- font-semibold text-gray-500 uppercase tracking-wide mb-2'>
								{PROJECTS.TECNOLOGIES[language]}
							</h4>
							<div className='flex flex-wrap gap-2'>
								{tags.map(el => skills[el])}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
