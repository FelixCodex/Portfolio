export type Languages = 'es' | 'en';

export type Skills =
	| 'css'
	| 'express'
	| 'html'
	| 'java'
	| 'javascript'
	| 'mysql'
	| 'node'
	| 'react'
	| 'springboot'
	| 'sqlite'
	| 'tailwind'
	| 'typescript';

export type sizeTypes = 'normal' | 'small';

export interface Project {
	title: { en: string; es: string };
	description: {
		en: string;
		es: string;
	};
	images: string[];
	tags: Skills[];
	hidden?: boolean;
	liveUrl?: string;
	githubUrl?: string;
}
