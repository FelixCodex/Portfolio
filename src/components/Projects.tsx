import { ExternalLink, Github } from 'lucide-react';
import localproductyflowImg from '../localproductyflow.webp';
import kronoImg from '../krono.webp';
import easepass from '../easepassword.webp';
import javier from '../javier-david.webp';
import { useLanguage } from '../hooks/useLanguage';
import { PROJECTS } from '../const';

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
	{
		title: { en: 'EasePassword', es: 'EasePassword' },
		subtitle: { en: 'Password Generator', es: 'Generador de contraseñas' },
		description: {
			en: 'Fast and simple password generator to secure your accounts',
			es: 'Rapida y simple generador de contraseñas para asegurar tus cuentas',
		},
		image: easepass,
		tags: ['Javascript', 'React', 'Tailwind'],
		hidden: false,
		liveUrl: 'https://easepassword.pages.dev/',
		githubUrl: 'https://github.com/FelixCodex/EasePassword',
	},
	{
		title: { en: 'Local ProductyFlow', es: 'Local ProductyFlow' },
		subtitle: {
			en: 'Task Management App',
			es: 'Aplicación de gestión de tareas',
		},
		description: {
			en: 'This is the local version without server of ProductyFlow',
			es: 'Esta es la versión local sin servidor de ProductyFlow',
		},
		image: localproductyflowImg,
		tags: ['HTML5', 'CSS3', 'Javascript'],
		hidde: false,
		liveUrl: 'https://localproductyflow.pages.dev/',
		githubUrl: 'https://github.com/FelixCodex/LocalProductyFlow',
	},
	{
		title: { en: 'ProductyFlow', es: 'ProductyFlow' },
		subtitle: {
			en: 'Task Management App',
			es: 'Aplicación de gestión de tareas',
		},
		description: {
			en: 'A collaborative task management application with real-time updates and team features',
			es: 'Una aplicación de gestión de tareas colaborativo con actualizaciónes en tiempo real y herramientas de equipo',
		},
		image: localproductyflowImg,
		tags: ['Javascript', 'Spring Boot', 'MySQL'],
		hidden: false,
		githubUrl: 'https://github.com/FelixCodex/ProductyFlow',
	},
	{
		title: { en: 'Krono', es: 'Krono' },
		subtitle: { en: 'Cronometer', es: 'Cronometer' },
		description: {
			en: 'A simple cronometer to keep track of your work hours',
			es: 'Un Cronometro para mantener un seguimiento de tus horas de trabajo',
		},
		image: kronoImg,
		tags: ['Javascript', 'React', 'Tailwind'],
		hidden: false,
		liveUrl: 'https://krono.pages.dev/',
		githubUrl: 'https://github.com/FelixCodex/Krono',
	},
];

export function Projects() {
	const { language } = useLanguage();
	return (
		<section
			id='projects'
			className='py-20 bg-white'
		>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					{PROJECTS.TITLE[language]}
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
			</div>
		</section>
	);
}

function ProjectCard({
	title,
	subtitle,
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
		<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[102%] transition-transform'>
			<img
				src={image}
				alt={title[language]}
				className='w-full h-48 object-cover'
			/>
			<div className='p-6'>
				<h3 className='text-xl font-semibold mb-2'>{title[language]}</h3>
				<p className='text-gray-600 mb-4'>{subtitle[language]}</p>
				<p className='text-gray-600 mb-4'>{description[language]}</p>
				<div className='flex flex-wrap gap-2 mb-4'>
					{tags.map(tag => (
						<span
							key={tag}
							className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
						>
							{tag}
						</span>
					))}
				</div>
				<div className='flex gap-4'>
					{liveUrl && (
						<a
							href={liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
						>
							<ExternalLink className='w-4 h-4' />

							{PROJECTS.LINK[language]}
						</a>
					)}
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 text-gray-700 hover:text-gray-900'
					>
						<Github className='w-4 h-4' />
						{PROJECTS.CODE[language]}
					</a>
				</div>
			</div>
		</div>
	);
}
