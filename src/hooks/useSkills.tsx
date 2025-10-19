import { CSS3 } from '../components/icons/CSS3';
import { Express } from '../components/icons/Express';
import { HTML5 } from '../components/icons/HTML5';
import { Java } from '../components/icons/Java';
import { Javascript } from '../components/icons/Javascript';
import { MySQL } from '../components/icons/MySQL';
import { Node } from '../components/icons/Node';
import { ReactIcon } from '../components/icons/React';
import { SpringBoot } from '../components/icons/SpringBoot';
import { SQLite } from '../components/icons/SQLite';
import { Tailwind } from '../components/icons/Tailwind';
import { Typescript } from '../components/icons/Typescript';
import { sizeTypes } from '../types';

const classIcon =
	'shadow-md bg-white transition-transform shadow-gray-200 border border-gray-300 p-1 sm:p-2';
const sizeNormal =
	'w-14 h-14 min-h-14 min-w-14 md:min-h-16 md:min-w-16 p-1 sm:p-2 rounded-lg sm:rounded-xl';
const sizeSmall =
	'w-8 h-8 md:min-h-8 md:min-w-8 sm:p-1 rounded-md sm:rounded-lg';

export function useSkills(size: sizeTypes = 'normal') {
	const iClass = `${classIcon} ${size == 'small' ? sizeSmall : sizeNormal}`;
	return {
		html: <HTML5 className={iClass + ' border-orange-300'} />,
		css: <CSS3 className={iClass + ' border-sky-300'} />,
		javascript: <Javascript className={iClass + ' border-yellow-300'} />,
		typescript: <Typescript className={iClass + ' border-sky-300'} />,
		react: <ReactIcon className={iClass + ' border-sky-300'} />,
		sqlite: <SQLite className={iClass + ' border-gray-400'} />,
		tailwind: <Tailwind className={iClass + ' border-sky-300'} />,
		node: <Node className={iClass + ' border-green-400'} />,
		express: <Express className={iClass + ' border-gray-400'} />,
		java: <Java className={iClass + ' border-blue-300 border-t-orange-300'} />,
		springboot: <SpringBoot className={iClass + ' border-green-400'} />,
		mysql: (
			<MySQL
				className={
					iClass +
					' border-t-teal-300 border-l-teal-300 border-b-orange-300 border-r-orange-300'
				}
			/>
		),
	};
}
