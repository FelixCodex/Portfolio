import { createContext, useState } from 'react';

interface ImageViewerContextType {
	imageSet: string[] | null;
	setImageSet: (val: string[] | null) => void;
}

interface ImageViewerProviderProps {
	children: import('react').ReactElement;
}

export const ImageViewerContext = createContext<ImageViewerContextType>({
	imageSet: null,
	setImageSet: () => {},
});

export function ImageViewerProvider({ children }: ImageViewerProviderProps) {
	const [imageSet, setImages] = useState<string[] | null>(null);
	const setImageSet = (val: string[] | null) => {
		setImages(val);
	};

	return (
		<ImageViewerContext.Provider
			value={{
				imageSet,
				setImageSet,
			}}
		>
			{children}
		</ImageViewerContext.Provider>
	);
}
