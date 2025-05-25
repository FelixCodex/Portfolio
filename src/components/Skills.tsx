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

const iClass = 'h-20 w-20';

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
				<div className='flex w-full items-center justify-center gap-2 flex-wrap'>
					<HTML5 className={iClass} />
					<Javascript className={iClass} />
					<Typescript className={iClass} />
					<Git className={iClass} />
					<ReactIcon className={iClass} />
					<SQLite className={iClass} />
					<Tailwind className={iClass} />
					<Node className={iClass} />
					<Express className={iClass} />
					<Java className={iClass} />
					<SpringBoot className={iClass} />
					<MySQL className={iClass} />
				</div>
			</div>
		</section>
	);
}
