import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNavigatePage() {
	const navigate = useNavigate();

	const navigatePage = (e: MouseEvent<HTMLElement>) => {
		e.preventDefault();
		navigate(`/${e.currentTarget.dataset.id}`);
		window.scrollTo({ top: 0 });
	};
	return { navigatePage };
}
