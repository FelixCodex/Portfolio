import { useContext } from 'react';
import { ImageViewerContext } from '../context/imageViewer.context';

export function useImageViewer() {
	const context = useContext(ImageViewerContext);
	if (context == undefined) {
		throw new Error('useImageViewer must be used within a ImageViewerProvider');
	}
	return context;
}
