interface ToggleProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	className?: string;
}

export function Toggle({ checked, onChange, className }: ToggleProps) {
	return (
		<div className={`${className} flex items-center`}>
			<span
				className={`${
					checked
						? 'translate-x-[1.75rem] shadow-es'
						: 'translate-x-[0.20rem] shadow-en'
				} pointer-events-none absolute inline-block h-5 w-5 transform rounded-full bg-gray-100 ring-0 transition duration-200 ease-in-out`}
			></span>
			<button
				type='button'
				className={`bg-gray-800 relative p-[0.10rem] pt-[0.09rem] inline-flex h-[1.90rem] w-[3.40rem] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
				role='switch'
				aria-checked={checked}
				onClick={() => onChange(!checked)}
			>
				<span className='pointer-events-none text-gray-600 h-[calc(100%-0.20rem)] w-6 absolute left-[0.10rem] flex items-center justify-center text-xs font-bold'>
					EN
				</span>
				<span className='pointer-events-none text-gray-600 h-[calc(100%-0.20rem)] w-6 absolute right-[0.10rem] flex items-center justify-center text-xs font-bold'>
					ES
				</span>
				<span
					className={`${
						checked ? 'translate-x-[1.45rem]' : 'translate-x-0'
					} pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-gray-100 shadow ring-0 transition duration-200 ease-in-out`}
				>
					<span
						className={`${
							checked
								? 'opacity-0 duration-100 ease-out'
								: 'opacity-100 duration-200 ease-in'
						} absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
						aria-hidden='true'
					>
						<span className='text-gray-800 text-xs font-bold'>EN</span>
					</span>
					<span
						className={`${
							checked
								? 'opacity-100 duration-200 ease-in'
								: 'opacity-0 duration-100 ease-out'
						} absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
						aria-hidden='true'
					>
						<span className='text-gray-800 text-xs font-bold'>ES</span>
					</span>
				</span>
			</button>
		</div>
	);
}
