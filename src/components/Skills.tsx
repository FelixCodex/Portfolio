import React, { ReactNode } from 'react';
import { Code, Server, Database, Layout } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SKILLS } from '../const';
import { HTML5 } from './elements/HTML5';
import { CSS3 } from './elements/CSS3';
import { Javascript } from './elements/Javascript';
import { Typescript } from './elements/Typescript';
import { Brain } from './elements/Brain';
import { Team } from './elements/Team';
import { Communication } from './elements/Communication';
import { ReactIcon } from './elements/React';
import { Tailwind } from './elements/Tailwind';
import { Node } from './elements/Node';
import { Express } from './elements/Express';
import { Java } from './elements/Java';
import { SpringBoot } from './elements/SpringBoot';
import { MySQL } from './elements/MySQL';
import { SQLite } from './elements/SQLite';
import { Git } from './elements/Git';
import { VSCode } from './elements/VSCode';
import { Npm } from './elements/Npm';
import { Maven } from './elements/Maven';

const iClass = 'h-7 w-7';

const skills = {
	frontend: [
		{ title: 'HTML5', icon: <HTML5 className={iClass} /> },
		{ title: 'CSS3', icon: <CSS3 className={iClass} /> },
		{ title: 'JavaScript', icon: <Javascript className={iClass} /> },
		{ title: 'Typescript', icon: <Typescript className={iClass} /> },
		{ title: 'React', icon: <ReactIcon className={iClass} /> },
		{ title: 'Tailwind', icon: <Tailwind className={iClass} /> },
	],
	backend: [
		{ title: 'Node.js', icon: <Node className={iClass} /> },
		{ title: 'Express', icon: <Express className={iClass} /> },
		{ title: 'Java', icon: <Java className={iClass} /> },
		{ title: 'Spring Boot', icon: <SpringBoot className={iClass} /> },
		{ title: 'MySQL', icon: <MySQL className={iClass} /> },
		{ title: 'SQLite', icon: <SQLite className={iClass} /> },
	],
	tools: [
		{ title: 'Git', icon: <Git className={iClass} /> },
		{ title: 'VS Code', icon: <VSCode className={iClass} /> },
		{ title: 'npm', icon: <Npm className={iClass} /> },
		{ title: 'Maven', icon: <Maven className={iClass} /> },
	],
	soft: [
		{ title: 'Problem Solving', icon: <Brain className={iClass} /> },
		{ title: 'Team Collaboration', icon: <Team className={iClass} /> },
		{ title: 'Communication', icon: <Communication className={iClass} /> },
	],
};

export function Skills() {
	const { language } = useLanguage();
	return (
		<section
			id='skills'
			className='py-20 bg-gray-50'
		>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					{SKILLS.TITLE[language]}
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<SkillCard
						title={SKILLS.FRONTEND[language]}
						skills={skills.frontend}
						icon={<Layout className='w-6 h-6' />}
					/>
					<SkillCard
						title={SKILLS.BACKEND[language]}
						skills={skills.backend}
						icon={<Server className='w-6 h-6' />}
					/>
					<SkillCard
						title={SKILLS.TOOLS[language]}
						skills={skills.tools}
						icon={<Code className='w-6 h-6' />}
					/>
					<SkillCard
						title={SKILLS.SOFT_SKILLS[language]}
						skills={skills.soft}
						icon={<Database className='w-6 h-6' />}
					/>
				</div>
			</div>
		</section>
	);
}

function SkillCard({
	title,
	skills,
	icon,
}: {
	title: string;
	skills: { title: string; icon: ReactNode }[];
	icon: React.ReactNode;
}) {
	return (
		<div className='bg-white p-6 rounded-lg shadow-md'>
			<div className='flex items-center gap-3 mb-4'>
				{icon}
				<h3 className='text-xl font-semibold'>{title}</h3>
			</div>
			<ul className='space-y-2'>
				{skills.map(skill => (
					<li
						key={skill.title}
						className='flex items-center gap-2'
					>
						{skill.icon}
						<span className='font-medium'>{skill.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
