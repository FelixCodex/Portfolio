import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// export function ImageViewerModal() {
// 	return (
// 		<section
// 			id='ImageViewerModal'
// 			className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50'
// 		>
// 			<button className='absolute bottom-20 lg:bottom-auto lg:top-20 xl:top-16 w-16 h-14 flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors rounded-xl text-white text-3xl font-bold'>
// 				<X className='w-6 h-6' />
// 			</button>
// 			<button className='absolute bottom-20 lg:bottom-auto left-6 w-8 h-14 flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors rounded-xl text-white text-3xl font-bold'>
// 				<ChevronLeft className='w-6 h-6' />
// 			</button>
// 			<div className='w-full px-4 lg:w-3/4 max-h-[720px]'>
// 				<img
// 					src={jd1}
// 					alt={'ImageViewer1'}
// 					className='w-full h-auto object-cover rounded-2xl border border-gray-700 shadow-xl shadow-gray-700'
// 				/>
// 			</div>
// 			<button className='absolute bottom-20 lg:bottom-auto right-6 w-8 h-14 flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors rounded-xl text-white text-3xl font-bold'>
// 				<ChevronRight className='w-6 h-6' />
// 			</button>
// 		</section>
// 	);
// }

import { useState, useEffect } from 'react';
import { useImageViewer } from '../hooks/useImageViewer';

export function ImageViewerModal() {
	const { imageSet, setImageSet } = useImageViewer();
	const [currentIndex, setCurrentIndex] = useState(0);

	// Reset index when imageSet changes
	useEffect(() => {
		setCurrentIndex(0);
	}, [imageSet]);

	if (!imageSet || imageSet.length === 0) return null;

	const handleClose = () => setImageSet(null);
	const handlePrev = () => setCurrentIndex(i => (i > 0 ? i - 1 : i));
	const handleNext = () =>
		setCurrentIndex(i => (i < imageSet.length - 1 ? i + 1 : i));

	return (
		<section
			id='ImageViewerModal'
			className={`${
				imageSet ? 'fixed' : 'hidden'
			} top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50`}
		>
			<button
				onClick={handleClose}
				className='absolute bottom-20 lg:bottom-auto lg:top-20 xl:top-16 w-16 h-14 flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors rounded-xl text-white text-3xl font-bold'
			>
				<X className='w-6 h-6' />
			</button>
			{currentIndex > 0 && (
				<button
					onClick={handlePrev}
					className='absolute bottom-20 lg:bottom-auto left-6 w-8 h-14 flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors rounded-xl text-white text-3xl font-bold'
				>
					<ChevronLeft className='w-6 h-6' />
				</button>
			)}
			<div className='w-full px-4 lg:w-3/4 max-h-[720px] flex justify-center'>
				<img
					src={imageSet && imageSet[currentIndex]}
					alt={`ImageViewer${currentIndex + 1}`}
					className='w-full h-auto object-cover rounded-2xl border-2 border-gray-900 shadow-xl shadow-gray-700'
				/>
			</div>
			{currentIndex < imageSet.length - 1 && (
				<button
					onClick={handleNext}
					className='absolute bottom-20 lg:bottom-auto right-6 w-8 h-14 flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors rounded-xl text-white text-3xl font-bold'
				>
					<ChevronRight className='w-6 h-6' />
				</button>
			)}
		</section>
	);
}
