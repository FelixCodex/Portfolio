import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

const aClass = 'w-14 h-14 flex items-center justify-center group ';
const iClass =
	'w-7 h-7 group-hover:w-9 group-hover:h-9 transition-[width,height,color] group-hover:text-[#007BFF]';

export function SocialMedia() {
	return (
		<>
			<div className='flex items-center gap-2'>
				<a
					href=''
					className={aClass + ' ml-3'}
				>
					<Linkedin className={iClass} />
				</a>
				<a
					href=''
					className={aClass}
				>
					<Facebook className={iClass} />
				</a>
				<a
					href=''
					className={aClass}
				>
					<Github className={iClass} />
				</a>
				<a
					href=''
					className={aClass}
				>
					<Mail className={iClass} />
				</a>
			</div>
		</>
	);
}
