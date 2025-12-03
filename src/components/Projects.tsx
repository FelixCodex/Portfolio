/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLanguage } from '../hooks/useLanguage';
import jd1 from '/jd1.webp';
import jd2 from '/jd2.webp';
import jd3 from '/jd3.webp';
import pf1 from '/pf-home.webp';
import pf2 from '/pf-workspace.webp';
import pf3 from '/pf-network.webp';
import { PROJECTS } from '../const';
import { Key } from './elements/Key';
import { Project, Skills } from '../types';
import { ProjectCard } from './elements/ProjectCard';
import { CheckCircle2 } from 'lucide-react';
import { SandClock } from './elements/SandClock';

const projects: Project[] = [
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
		liveUrl: 'https://javier-david.com',
		githubUrl: 'https://github.com/FelixCodex/ecommerce-jd',
	},
	{
		title: { en: 'ProductyFlow', es: 'ProductyFlow' },
		description: {
			en: 'A simple yet powerful project, task, and node management system designed to boost productivity for individuals and teams through real-time collaboration and intuitive organization. It features JWT Authentication, Real-time Updates, Task Calendar, Project Groups and Node Management',
			es: 'Un sistema de gestión de proyectos, tareas y nodos sencillo pero potente, diseñado para aumentar la productividad de individuos y equipos mediante la colaboración en tiempo real y una organización intuitiva. Incluye autenticación JWT, actualizaciones en tiempo real, calendario de tareas, grupos de proyectos y gestión de nodos.',
		},
		images: [pf1, pf2, pf3],
		tags: [
			'html',
			'css',
			'javascript',
			'java',
			'springboot',
			'mysql',
		] as Skills[],
		githubUrl: 'https://github.com/FelixCodex/ProductyFlow',
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
			<div className='sect-container mx-auto px-4 flex flex-col gap-12 md:gap-14'>
				<h2 className='text-5xl text-gray-900 font-bold text-center hidder'>
					{PROJECTS.TITLE[language]}
				</h2>
				<div className='h-[.0625rem] w-[90%] bg-gradient-to-r from-transparent via-gray-400 to-transparent' />
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
				{/* <div className='relative w-full h-fit p-4 pt-6 gap-7 flex flex-col items-center justify-center hidder'>
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
				</div> */}
			</div>
		</section>
	);
}
