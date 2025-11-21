import { createContext, useState } from 'react';

interface ImageViewerContextType {
	imageSet: string[] | null;
	setImageSet: (val: string[] | null, startIndex?: number) => void;
	starterIndex: number;
	setStarterIndex: (n: number) => void;
}

interface ImageViewerProviderProps {
	children: import('react').ReactElement;
}

export const ImageViewerContext = createContext<ImageViewerContextType>({
	imageSet: null,
	setImageSet: () => {},
	starterIndex: 0,
	setStarterIndex: n => {
		console.log(n);
	},
});

export function ImageViewerProvider({ children }: ImageViewerProviderProps) {
	const [imageSet, setImages] = useState<string[] | null>(null);
	const [starterIndex, setStarterIndex] = useState<number>(0);
	const setImageSet = (val: string[] | null, startIndex?: number) => {
		if (startIndex != undefined) setStarterIndex(startIndex);
		setImages(val);
	};

	return (
		<ImageViewerContext.Provider
			value={{
				imageSet,
				setImageSet,
				starterIndex,
				setStarterIndex,
			}}
		>
			{children}
		</ImageViewerContext.Provider>
	);
}
