/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	CheckCircle2,
	Circle,
	ExternalLink,
	Github,
	LockIcon,
} from 'lucide-react';
import javier from '../javier-david.webp';
import easepass from '../easepassword.webp';
import { useLanguage } from '../hooks/useLanguage';
import { PROJECTS } from '../const';
import { ReactNode, useEffect, useRef } from 'react';
import { SandClock } from './elements/SandClock';
import { Key } from './elements/Key';
import { HTML5 } from './elements/HTML5';
import { CSS3 } from './elements/CSS3';
import { Javascript } from './elements/Javascript';
import { Typescript } from './elements/Typescript';
import { ReactIcon } from './elements/React';

const projects = [
	{
		title: { en: 'Artist Store', es: 'Tienda de artista' },
		subtitle: { en: 'E-Commerce', es: 'Tienda Virtual' },
		description: {
			en: 'An E-Commerce to sell the 3d models of the artist',
			es: 'Una tienda virtual para vender los modelos 3d del artista',
		},
		image: javier,
		tags: ['React', 'Node.js', 'Express', 'SQLite'],
		hidden: false,
		liveUrl: 'https://javier-david.com',
		githubUrl: 'https://github.com/FelixCodex/j-ecommerce-client',
	},
];

const small_projects = [
	{
		title: { en: 'EasePassword', es: 'EasePassword' },
		subtitle: { en: 'Password Generator', es: 'Generador de contraseñas' },
		icon: <Key className='text-blue-500 h-5 w-5' />,
		link: 'https://easepassword.pages.dev/',
		github: 'https://github.com/FelixCodex/EasePassword',
	},
	{
		title: { en: 'Local ProductyFlow', es: 'Local ProductyFlow' },
		subtitle: {
			en: 'Task Management App',
			es: 'Aplicación de gestión de tareas',
		},
		icon: <CheckCircle2 className='text-[#4f46e5] h-5 w-5' />,
		link: 'https://localproductyflow.pages.dev/',
		github: 'https://github.com/FelixCodex/LocalProductyFlow',
	},
	{
		title: { en: 'ProductyFlow', es: 'ProductyFlow' },
		subtitle: {
			en: 'Task Management App',
			es: 'Aplicación de gestión de tareas',
		},
		icon: <CheckCircle2 className='text-[#4f46e5] h-5 w-5' />,
		github: 'https://github.com/FelixCodex/ProductyFlow',
	},
	{
		title: { en: 'Krono', es: 'Krono' },
		subtitle: { en: 'Cronometer', es: 'Cronometer' },
		icon: <SandClock className='text-blue-500 h-5 w-5' />,
		link: 'https://krono.pages.dev/',
		github: 'https://github.com/FelixCodex/Krono',
	},
];

export function Projects() {
	const { language } = useLanguage();
	return (
		<section
			id='projects'
			className='pb-20 pt-28 bg-gradient-to-b min-h-[100dvh] h-fit from-[--bg_pri] to-[#F5F7FA]'
		>
			<div className='sect-container mx-auto px-4 flex flex-col gap-28'>
				<h2 className='text-5xl text-gray-900 font-bold text-center'>
					{PROJECTS.TITLE[language]}
				</h2>
				<div className='flex flex-col gap-8 items-center'>
					{projects.map(project => {
						const title = project.title[language];
						if (project.hidden) return;
						return (
							<ProjectCard
								key={title}
								{...project}
							/>
						);
					})}
				</div>
				<div className='relative w-full h-fit p-4 pt-6 gap-7 flex flex-col items-center justify-center'>
					<div className='absolute top-0 h-[.0625rem] w-[90%] bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
					<h2 className='text-2xl text-gray-700 font-medium text-center'>
						{PROJECTS.OTHER[language]}
					</h2>
					<div className='flex flex-wrap justify-center gap-4'>
						{small_projects.map(project => {
							const title = project.title[language];
							return (
								<SimpleProjectCard
									key={title}
									{...project}
								></SimpleProjectCard>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

function SimpleProjectCard({
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
			className={`p-2 px-3 hover:scale-[102%] group flex items-center gap-5 transition-[transform,box-shadow] cursor-pointer select-none bg-white/60 hover:shadow-lg hover:shadow-blue-200 border border-gray-200 rounded-lg shadow-sm`}
			onClick={() => {
				location.href = link ? link : github;
			}}
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
						className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
					>
						<ExternalLink className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
					</a>
				)}
				<a
					href={github}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center gap-2 text-gray-700 hover:text-gray-900'
				>
					<Github className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
				</a>
			</div>
		</div>
	);
}

const iClass =
	'w-7 h-7 md:h-14 md:w-14 drop-shadow-lg drop-shadow-[0_4px_6px_rgba(59,130,246,0.3)]';

function ProjectCard({
	title,
	description,
	image,
	tags,
	liveUrl,
	githubUrl,
}: {
	title: { en: string; es: string };
	subtitle: { en: string; es: string };
	description: { en: string; es: string };
	image: string;
	tags: string[];
	liveUrl?: string;
	githubUrl: string;
}) {
	const { language } = useLanguage();

	return (
		<div className='relative overflow-hidden w-[90%] group rounded-2xl hover:scale-[101%] transition-transform max-h-[40rem] h-fit p-4 shadow-sm bg-white/60 border border-gray-300'>
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
					<span className='text-gray-800'>javier-david.com</span>
				</p>
				<div className='absolute top-[.45rem] right-4 flex items-center justify-center gap-3 p-2 px-3 border border-gray-200 rounded-xl'>
					{liveUrl && (
						<a
							href={liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
						>
							<ExternalLink className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
						</a>
					)}
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
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
					className='w-full h-full border max-h-[33.125rem] border-gray-200 object-cover rounded-xl transition-[box-shadow]'
				/>
				<div
					className={`md:absolute top-0 left-0 w-full flex flex-col-reverse gap-1 rounded-xl p-2 px-3 border border-gray-200 
					md:flex-row items-start justify-between h-full md:p-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity`}
				>
					<div className='px-1 md:p-2 w-fit rounded-lg backdrop-blur-md bg-white/15 border border-white/20 md:shadow-sm flex items-center justify-center'>
						<HTML5 className={iClass} />
						<CSS3 className={iClass} />
						<Javascript className={iClass} />
						<Typescript className={iClass} />
					</div>
					<div className='rounded-lg w-fit backdrop-blur-md bg-white/15 border border-white/20 md:shadow-sm flex items-center justify-center px-1 md:p-3'>
						<p>{description[language]}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

// function ProjectCard({
// 	title,
// 	description,
// 	image,
// 	tags,
// 	liveUrl,
// 	githubUrl,
// }: {
// 	title: { en: string; es: string };
// 	subtitle: { en: string; es: string };
// 	description: { en: string; es: string };
// 	image: string;
// 	tags: string[];
// 	liveUrl?: string;
// 	githubUrl: string;
// }) {
// 	const { language } = useLanguage();

// 	return (
// 		<div className='relative overflow-hidden w-[90%] group rounded-xl hover:scale-[101%] transition-transform h-fit p-4 shadow-sm bg-white/60 border border-gray-200'>
// 			<div className='w-full flex items-center justify-start md:justify-center mb-3'>
// 				<div className='absolute top-[.56rem] left-4 pt-[.625rem] md:flex items-center justify-center gap-2 hidden'>
// 					<Circle
// 						className='w-4 h-4 hover:scale-125 transition-[transform,color]'
// 						fill='#4b5563'
// 						stroke='#4b5563 '
// 					></Circle>
// 					<Circle
// 						className='w-4 h-4 hover:scale-125 transition-[transform,color]'
// 						fill='#4b5563'
// 						stroke='#4b5563 '
// 					></Circle>
// 					<Circle
// 						className='w-4 h-4 hover:scale-125 transition-[transform,color]'
// 						fill='#4b5563'
// 						stroke='#4b5563 '
// 					></Circle>
// 				</div>
// 				<p className='flex items-center justify-center gap-2'>
// 					<LockIcon className='text-gray-600 w-4 h-4 hover:scale-125 transition-[transform,color] hover:text-green-500'></LockIcon>
// 					<span className='text-gray-800'>javier-david.com</span>
// 				</p>
// 				<div className='absolute top-[.375rem] right-4 flex items-center justify-center gap-3 p-2 px-3 border border-gray-200 rounded-xl'>
// 					{liveUrl && (
// 						<a
// 							href={liveUrl}
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
// 						>
// 							<ExternalLink className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
// 						</a>
// 					)}
// 					<a
// 						href={githubUrl}
// 						target='_blank'
// 						rel='noopener noreferrer'
// 						className='flex items-center gap-2 text-gray-700 hover:text-gray-900'
// 					>
// 						<Github className='w-6 h-6 hover:scale-[120%] transition-[transform]' />
// 					</a>
// 				</div>
// 			</div>
// 			<div className='relative h-full flex flex-col gap-2'>
// 				<img
// 					src={image}
// 					alt={title[language]}
// 					className='w-full h-full border max-h-[33.125rem] border-gray-200 object-cover rounded-xl transition-[box-shadow]'
// 				/>
// 				<div
// 					className={` top-0 left-0 w-full flex gap-1 rounded-xl p-2 px-3 border border-gray-200
// 					 items-start justify-between h-full transition-opacity`}
// 				>
// 					<div className='px-1 md:p-2 w-fit rounded-lg backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-center'>
// 						<HTML5 className={iClass} />
// 						<CSS3 className={iClass} />
// 						<Javascript className={iClass} />
// 						<Typescript className={iClass} />
// 					</div>
// 					<div className='rounded-lg w-fit backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-center px-1 md:p-3'>
// 						<p>{description[language]}</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
