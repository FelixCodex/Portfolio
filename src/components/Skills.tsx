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
import { ReactNode } from 'react';

const iClass =
	'min-h-14 min-w-14 w-14 h-14 md:min-h-20 md:min-w-20 shadow-md bg-white shadow-gray-200 border border-gray-300 rounded-xl p-2';

function SkillsSlideElementsWrapper({
	element,
	name,
}: {
	element: ReactNode;
	name: string;
}) {
	return (
		<div className='group relative'>
			{element}
			<span className='tooltiptext tooltip-bottom p-1 px-2 flex items-center justify-center text-gray-800 group-hover:translate-y-2 group-hover:opacity-100 bg-white border border-gray-300 shadow-sm text-xs md:text-sm font-medium transition-[transform,opacity]'>
				{name}
			</span>
		</div>
	);
}

function SkillsSlideElements() {
	return (
		<>
			<SkillsSlideElementsWrapper
				name='HTML5'
				element={<HTML5 className={iClass + ' border-orange-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='CSS3'
				element={<CSS3 className={iClass + ' border-sky-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='Javascript'
				element={<Javascript className={iClass + ' border-yellow-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='Typescript'
				element={<Typescript className={iClass + ' border-sky-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='React'
				element={<ReactIcon className={iClass + ' border-blue-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='SQLite'
				element={<SQLite className={iClass + ' border-gray-400'} />}
			/>
			<SkillsSlideElementsWrapper
				name='Tailwind'
				element={<Tailwind className={iClass + ' border-sky-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='Node.js'
				element={<Node className={iClass + ' border-green-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='Express'
				element={<Express className={iClass + ' border-gray-400'} />}
			/>
			<SkillsSlideElementsWrapper
				name='Java'
				element={
					<Java className={iClass + ' border-blue-300 border-t-orange-300'} />
				}
			/>
			<SkillsSlideElementsWrapper
				name='SpringBoot'
				element={<SpringBoot className={iClass + ' border-green-300'} />}
			/>
			<SkillsSlideElementsWrapper
				name='MySQL'
				element={
					<MySQL
						className={
							iClass +
							' border-t-teal-300 border-l-teal-300 border-b-orange-300 border-r-orange-300'
						}
					/>
				}
			/>
		</>
	);
}

export function SkillsSlider() {
	return (
		<div className='flex w-full items-center justify-center overflow-hidden mask-image'>
			<div className='w-full py-10'>
				<div
					className='flex w-max items-center gap-4 anim-slide hover:anim-none py-6'
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
