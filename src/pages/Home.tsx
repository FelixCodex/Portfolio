import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { useObserver } from '../hooks/useObserver';
import { ImageViewerModal } from '../components/ImageViewerModal';

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
			<ImageViewerModal></ImageViewerModal>
		</>
	);
}
