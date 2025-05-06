import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import localproductyflowImg from '../localproductyflow.webp';
import kronoImg from '../krono.webp';
import easepass from '../easepassword.webp';

const projects = [
	{
		title: 'Artist Store',
		subtitle: 'E-Commerce',
		description: 'An E-Commerce to sell the 3d models of the artist',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
		tags: ['React', 'Node.js', 'Express', 'MySQL', 'In Process'],
		liveUrl: '#',
		hidden: false,
		githubUrl: 'https://javier-david.com',
	},
	{
		title: 'EasePassword',
		subtitle: 'Password Generator',
		description: 'Fast and simple password generator to secure your accounts',
		image: easepass,
		tags: ['Javascript', 'React', 'Tailwind'],
		hidden: false,
		liveUrl: 'https://easepassword.pages.dev/',
		githubUrl: 'https://github.com/FelixCodex/EasePassword',
	},
	{
		title: 'Local ProductyFlow',
		subtitle: 'Task Management App',
		description: 'This is the local version without server of ProductyFlow.',
		image: localproductyflowImg,
		tags: ['HTML5', 'CSS3', 'Javascript'],
		hidde: false,
		liveUrl: 'https://localproductyflow.pages.dev/',
		githubUrl: 'https://github.com/FelixCodex/LocalProductyFlow',
	},
	{
		title: 'ProductyFlow',
		subtitle: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates and team features.',
		image: localproductyflowImg,
		tags: ['Javascript', 'Spring Boot', 'MySQL', 'In Process'],
		liveUrl: '#',
		hidden: false,
		githubUrl: 'https://github.com/FelixCodex/ProductyFlow',
	},
	{
		title: 'Krono',
		subtitle: 'Cronometer',
		description: 'A simple cronometer to keep track of your work hours',
		image: kronoImg,
		tags: ['Javascript', 'React', 'Tailwind'],
		hidden: false,
		liveUrl: 'https://krono.pages.dev/',
		githubUrl: 'https://github.com/FelixCodex/Krono',
	},
];

export function Projects() {
	return (
		<section
			id='projects'
			className='py-20 bg-white'
		>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Featured Projects
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map(project => {
						if (project.hidden) return;
						return (
							<ProjectCard
								key={project.title}
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
	title: string;
	subtitle: string;
	description: string;
	image: string;
	tags: string[];
	liveUrl: string;
	githubUrl: string;
}) {
	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[102%] transition-transform'>
			<img
				src={image}
				alt={title}
				className='w-full h-48 object-cover'
			/>
			<div className='p-6'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-gray-600 mb-4'>{subtitle}</p>
				<p className='text-gray-600 mb-4'>{description}</p>
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
					<a
						href={liveUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
					>
						<ExternalLink className='w-4 h-4' />
						Live Demo
					</a>
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 text-gray-700 hover:text-gray-900'
					>
						<Github className='w-4 h-4' />
						Code
					</a>
				</div>
			</div>
		</div>
	);
}
