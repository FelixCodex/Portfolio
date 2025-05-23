import { Logo } from './elements/Logo';

export function Footer() {
	return (
		<footer className='bg-gray-900 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='flex items-center gap-2 mb-4 md:mb-0'>
						<Logo className='h-7 w-7'></Logo>
						<span className='text-xl font-bold'>Jose Felix</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
