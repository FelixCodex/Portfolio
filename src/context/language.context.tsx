import { Languages } from '../types';
import { createContext, useState } from 'react';

interface LanguageContextType {
	language: Languages;
	setLanguage: (val: Languages) => void;
}

interface LanguageProviderProps {
	children: import('react').ReactElement;
}

export const LanguageContext = createContext<LanguageContextType>({
	language: 'en',
	setLanguage: () => {},
});

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLang] = useState<Languages>('en');
	const setLanguage = (val: Languages) => {
		setLang(val);
	};

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}
