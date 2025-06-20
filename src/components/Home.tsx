import { useEffect } from 'react';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { useObserver } from '../hooks/useObserver';

export default function Home() {
	const observe = useObserver();
	useEffect(() => {
		observe();
	}, []);
	return (
		<>
			<Hero></Hero>
			<Projects></Projects>
			<Skills></Skills>
		</>
	);
}
