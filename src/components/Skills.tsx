import { useLanguage } from '../hooks/useLanguage';
import { SKILLS } from '../const';
import { HTML5 } from './elements/HTML5';
import { Javascript } from './elements/Javascript';
import { Typescript } from './elements/Typescript';
import { ReactIcon } from './elements/React';
import { Tailwind } from './elements/Tailwind';
import { Node } from './elements/Node';
import { Express } from './elements/Express';
import { Java } from './elements/Java';
import { SpringBoot } from './elements/SpringBoot';
import { MySQL } from './elements/MySQL';
import { SQLite } from './elements/SQLite';
import { CSS3 } from './elements/CSS3';

const iClass =
	'min-h-14 min-w-14 w-14 h-14 md:min-h-20 md:min-w-20 shadow-md shadow-gray-200 border border-gray-300 rounded-xl p-2';

function SkillsSlideElements() {
	return (
		<>
			<HTML5 className={iClass + ' border-orange-300'} />
			<CSS3 className={iClass + ' border-blue-300'} />
			<Javascript className={iClass + ' border-yellow-300'} />
			<Typescript className={iClass + ' border-sky-300'} />
			<ReactIcon className={iClass + ' border-blue-300'} />
			<SQLite className={iClass + ' border-gray-400'} />
			<Tailwind className={iClass + ' border-sky-300'} />
			<Node className={iClass + ' border-green-300'} />
			<Express className={iClass + ' border-gray-400'} />
			<Java className={iClass + ' border-blue-300 border-t-orange-300'} />
			<SpringBoot className={iClass + ' border-green-300'} />
			<MySQL
				className={
					iClass +
					' border-t-teal-300 border-l-teal-300 border-b-orange-300 border-r-orange-300'
				}
			/>
		</>
	);
}

export function SkillsSlider() {
	return (
		<div className='flex w-full items-center justify-center overflow-hidden mask-image'>
			<div className='w-full'>
				<div
					className='flex w-max items-center gap-4 anim-slide py-6'
					id='langs'
				>
					<SkillsSlideElements />
					<SkillsSlideElements />
				</div>
			</div>
		</div>
	);
}

export function Skills() {
	const { language } = useLanguage();
	return (
		<section
			id='skills'
			className='py-20 bg-[#F5F7FA]'
		>
			<div className='sect-container mx-auto px-4'>
				<h2 className='text-5xl text-gray-900 font-bold text-center mb-12'>
					{SKILLS.TITLE[language]}
				</h2>
				<SkillsSlider></SkillsSlider>
			</div>
		</section>
	);
}
