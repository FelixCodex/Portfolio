/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckCircle2, ExternalLink, Github, Link } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import jd1 from '/jd1.png';
import jd2 from '/jd2.png';
import jd3 from '/jd3.png';
import { PROJECTS } from '../const';
import { SandClock } from './elements/SandClock';
import { Key } from './elements/Key';
import { Skills } from '../types';
import { ProjectCard } from './elements/ProjectCard';
import { SimpleProjectCard } from './elements/SimpleProjectCard';

const projects = [
	{
		title: { en: 'javier-david.com', es: 'javier-david.com' },
		description: {
			en: 'Fully functional online store developed with React and Node.js, it features payment management with Tropipay, authentication with JWT and Google OAuth2, a real-time chat and admin dashboard with data analysis.',
			es: 'Tienda virtual completamente funcional desarrollada con React y Node.js, cuenta con manejo de pagos con Tropipay, autenticación con JWT y OAuth2 de Google, un chat en tiempo real y panel de control con análisis de datos',
		},
		images: [jd1, jd2, jd3],
		tags: [
			'react',
			'typescript',
			'node',
			'express',
			'sqlite',
			'tailwind',
		] as Skills[],
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
		tags: ['react', 'typescript', 'tailwind'] as Skills[],
	},
	{
		title: { en: 'ProductyFlow', es: 'ProductyFlow' },
		subtitle: {
			en: 'Task Management App',
			es: 'Aplicación de gestión de tareas',
		},
		icon: <CheckCircle2 className='text-[#4f46e5] h-5 w-5' />,
		link: 'https://localproductyflow.pages.dev/',
		github: 'https://github.com/FelixCodex/ProductyFlow',
		tags: [
			'html',
			'css',
			'javascript',
			'java',
			'springboot',
			'mysql',
		] as Skills[],
	},
	{
		title: { en: 'Krono', es: 'Krono' },
		subtitle: { en: 'Cronometer', es: 'Cronometer' },
		icon: <SandClock className='text-blue-500 h-5 w-5' />,
		link: 'https://krono.pages.dev/',
		github: 'https://github.com/FelixCodex/Krono',
		tags: ['react', 'typescript', 'tailwind'] as Skills[],
	},
];

export function Projects() {
	const { language } = useLanguage();
	return (
		<section
			id='projects'
			className='pb-20 pt-28 bg-gradient-to-b min-h-[100dvh] h-fit from-[--bg_pri] to-[#F5F7FA]'
		>
			<div className='sect-container mx-auto px-4 flex flex-col gap-16 md:gap-28'>
				<h2 className='text-5xl text-gray-900 font-bold text-center hidder'>
					{PROJECTS.TITLE[language]}
				</h2>
				<div className='flex flex-col gap-8 items-center hidder'>
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
				<div className='relative w-full h-fit p-4 pt-6 gap-7 flex flex-col items-center justify-center hidder'>
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
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
