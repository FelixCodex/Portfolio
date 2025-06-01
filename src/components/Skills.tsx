import { useLanguage } from '../hooks/useLanguage';
import { SKILLS } from '../const';
import { ReactNode } from 'react';
import { useSkills } from '../hooks/useSkills';

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
			<span className='tooltiptext tooltip-bottom p-1 px-2 flex items-center justify-center group-hover:opacity-100 transition-opacity'>
				<span className='p-1 px-2 text-gray-700 group-hover:translate-y-2 bg-white border rounded-md border-gray-300 opacity-100 cursor-default shadow-sm text-xs md:text-sm font-medium transition-[transform]'>
					{name}
				</span>
			</span>
		</div>
	);
}

function SkillsSlideElements() {
	const skills = useSkills();
	return (
		<>
			<SkillsSlideElementsWrapper
				name='HTML5'
				element={skills.html}
			/>
			<SkillsSlideElementsWrapper
				name='CSS3'
				element={skills.css}
			/>
			<SkillsSlideElementsWrapper
				name='Javascript'
				element={skills.javascript}
			/>
			<SkillsSlideElementsWrapper
				name='Typescript'
				element={skills.typescript}
			/>
			<SkillsSlideElementsWrapper
				name='React'
				element={skills.react}
			/>
			<SkillsSlideElementsWrapper
				name='SQLite'
				element={skills.sqlite}
			/>
			<SkillsSlideElementsWrapper
				name='Tailwind'
				element={skills.tailwind}
			/>
			<SkillsSlideElementsWrapper
				name='Node.js'
				element={skills.node}
			/>
			<SkillsSlideElementsWrapper
				name='Express'
				element={skills.express}
			/>
			<SkillsSlideElementsWrapper
				name='Java'
				element={skills.java}
			/>
			<SkillsSlideElementsWrapper
				name='SpringBoot'
				element={skills.springboot}
			/>
			<SkillsSlideElementsWrapper
				name='MySQL'
				element={skills.mysql}
			/>
		</>
	);
}

export function SkillsSlider() {
	return (
		<div className='flex w-full items-center justify-center overflow-hidden mask-image'>
			<div className='w-full py-10'>
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
				<h2 className='text-4xl md:text-5xl text-gray-900 font-bold text-center mb-2 sm:mb-6'>
					{SKILLS.TITLE[language]}
				</h2>
				<SkillsSlider></SkillsSlider>
			</div>
		</section>
	);
}
