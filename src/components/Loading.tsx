const lClass = ' w-8 h-8 bg-black rounded-full anim-load-';
export function Loading() {
	return (
		<div className='relative flex items-center justify-center h-screen bg-[--bg_prim]'>
			<div className='absolute w-fit mx-auto flex gap-3 md:gap-8 items-center justify-center'>
				<div className={lClass + '1'}></div>
				<div className={lClass + '2'}></div>
				<div className={lClass + '3'}></div>
				<div className={lClass + '4'}></div>
				<div className={lClass + '5'}></div>
			</div>
		</div>
	);
}
