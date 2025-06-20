/* eslint-disable prefer-const */
import { useCallback, useRef } from 'react';

export function useObserver() {
	let observer = useRef<IntersectionObserver | null>(null);

	return useCallback(() => {
		observer.current = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('appear');
					console.log('ASD');
					observer.unobserve(entry.target);
				}
			});
		});

		document.querySelectorAll('.hidder').forEach(elem => {
			if (observer.current) observer.current.observe(elem);
		});
	}, []);
}
