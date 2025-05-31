import { ReactNode } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ABOUT } from '../const';

function Step({ text }: { text?: ReactNode }) {
	return (
		<div
			className={`rounded-xl z-10 relative text-xl w-fit bluebow-border font-medium cursor-default 
						 md:rotate-1 md:hover:rotate-0 group-hover:scale-[101%] group-hover:shadow-lg text-gray-700 bg-white 
						 transition-[outline,background-color,padding,border,box-shadow,transform]`}
		>
			<p className='p-4 relative rounded-xl z-20 bg-transparent border-2 border-gray-300 group-hover:border-transparent transition-[border]'>
				{text}
			</p>
			<div className='absolute top-[0.125rem] left-[0.125rem] w-[calc(100%-0.25rem)] h-[calc(100%-0.25rem)] bg-white rounded-lg group-hover:rounded-[.625rem] transition-[border-radius]'></div>
		</div>
	);
}
function Year({ year }: { year?: string }) {
	return (
		<div className='text-lg z-10 relative font-medium w-fit bluebow-border text-gray-800 cursor-default group-hover:scale-[102%] h-fit group-hover:shadow-lg rounded-xl transition-[background-color,padding,border,box-shadow,transform]'>
			<p className='p-3 relative px-4 rounded-[0.625rem] z-20 bg-transparent border-2 border-gray-300 group-hover:border-transparent transition-[border]'>
				{year}
			</p>
			<div className='absolute top-[0.125rem] left-[0.125rem] w-[calc(100%-0.25rem)] h-[calc(100%-0.25rem)] bg-white rounded-lg group-hover:rounded-[.625rem] transition-[border-radius]'></div>
		</div>
	);
}
function Quarter({ year }: { year?: string }) {
	return (
		<div className='w-20 rounded-full relative bluebow-border '>
			<div
				className={`p-2 px-3 relative z-20 w-20 text-lg flex justify-center items-center text-nowrap font-medium 
						 text-gray-800 cursor-default group-hover:scale-[102%] h-fit group-hover:shadow-lg 
						 group-hover:border-blue-500 rounded-full 
						 bg-transparent border-2 border-gray-300 group-hover:border-transparent
						 transition-[background-color,box-shadow,transform,border]`}
			>
				<p>{year}</p>
			</div>
			<div className='absolute top-[0.125rem] left-[0.125rem] w-[calc(100%-0.25rem)] h-[calc(100%-0.25rem)] bg-white rounded-full '></div>
		</div>
	);
}
function Divisor() {
	return <div className='w-full h-full bg-fuchsia-50'></div>;
}

const linkClass = 'text-blue-500 hover:text-blue-600 transition-colors';

const journey = {
	end2023: {
		es: (
			<>
				Inicié mi aprendizaje en programación con el lenguaje Java a finales de
				2023, utilizando recursos como{' '}
				<a
					href='https://www.youtube.com/@pildorasinformaticas'
					className={linkClass}
				>
					Programación ATS
				</a>{' '}
				y{' '}
				<a
					href='https://www.youtube.com/@pildorasinformaticas'
					className={linkClass}
				>
					Píldoras Informáticas
				</a>
				. Este primer acercamiento me permitió desarrollar las bases de la
				lógica de programación y adquirir una comprensión sólida de los
				conceptos fundamentales.
			</>
		),
		en: (
			<>
				I began my programming experience with Java at the end of 2023, using
				resources such as{' '}
				<a
					href='https://www.youtube.com/channel/UC7QoKU6bj1QbXQuNIjan82Q'
					className={linkClass}
				>
					Programación ATS
				</a>{' '}
				and{' '}
				<a
					href='https://www.youtube.com/@pildorasinformaticas'
					className={linkClass}
				>
					Píldoras Informáticas
				</a>
				. This initial introduction allowed me to develop the foundations of
				programming logic and acquire a solid understanding of the fundamental
				concepts.
			</>
		),
	},
	first_mid2024: {
		es: (
			<>
				Amplié mis conocimientos en desarrollo web con{' '}
				<a
					href='https://www.youtube.com/@soydalto'
					className={linkClass}
				>
					SoyDalto
				</a>{' '}
				y exploré herramientas como Spring Boot, MySQL y WebSockets. Durante
				esta etapa, realicé mis primeros proyectos prácticos, aplicando lo
				aprendido para construir aplicaciones web interactivas y dinámicas.
			</>
		),
		en: (
			<>
				I expanded my web development knowledge with{' '}
				<a
					href='https://www.youtube.com/@soydalto'
					className={linkClass}
				>
					SoyDalto
				</a>{' '}
				and explored tools such as Spring Boot, MySQL, and WebSockets. During
				this time, I completed my first practical projects, applying what I
				learned to build interactive and dynamic web applications.
			</>
		),
	},
	sec_mid2024: {
		es: (
			<>
				Me adentré en frameworks modernos como React y en tecnologías de apoyo
				como Tailwind CSS, Vite, Node.js, Express y TypeScript con{' '}
				<a
					href='https://www.youtube.com/@midulive'
					className={linkClass}
				>
					Midudev
				</a>
				. Este periodo me ayudó a fortalecer mis habilidades en el desarrollo de
				interfaces de usuario modernas y aplicaciones web escalables y
				eficientes.
			</>
		),
		en: (
			<>
				I delved into modern frameworks like React and supporting technologies
				such as Tailwind CSS, Vite, Node.js, Express, and TypeScript with{' '}
				<a
					href='https://www.youtube.com/@midulive'
					className={linkClass}
				>
					Midudev
				</a>
				. This period helped me strengthen my skills in developing modern user
				interfaces and scalable and efficient web applications.
			</>
		),
	},
	start2025: {
		es: (
			<>
				Desarrollé un e-commerce completo, donde profundicé en aspectos como la
				integración de pagos, el despliegue de aplicaciones mediante GitHub y el
				manejo de autenticación con Google. También implementé funcionalidades
				en tiempo real, como chats interactivos, y aprendí a utilizar SQLite
				para el almacenamiento de datos.
			</>
		),
		en: (
			<>
				I developed a complete e-commerce platform, where I delved into aspects
				such as payment integration, application deployment via GitHub, and
				Google authentication management. I also implemented real-time features
				such as interactive chats and learned how to use SQLite for data
				storage.
			</>
		),
	},
};

const stepClass =
	'relative group flex flex-col-reverse items-start md:items-end md:flex-row gap-5';

export default function About() {
	const { language } = useLanguage();
	return (
		<section className='bg-gray-50 min-h-screen'>
			<div className='sect-container mx-auto h-full flex flex-col items-center justify-center px-4 pt-32 pb-12 md:pt-[8rem] md:pb-[5rem]'>
				<div className='p-4 md:p-12 md:px-14 flex flex-col items-start justify-center gap-8 mb-8 md:mb-0'>
					<h1 className='text-5xl md:text-6xl font-semibold text-gray-900'>
						{ABOUT.WHO[language]}
					</h1>
					<p className='text-lg font-medium md:font-normal md:text-2xl text-gray-700'>
						{ABOUT.IM_1[language]}
					</p>
					<p className='text-lg font-medium md:font-normal md:text-2xl text-gray-700'>
						{ABOUT.IM_2[language]}
					</p>
					<p className='text-lg font-medium md:font-normal md:text-2xl text-gray-700'>
						{ABOUT.IM_3[language]}
					</p>
				</div>
				<div className='p-4 md:p-12 flex flex-col md:flex-row w-full items-start h-fit justify-between gap-8'>
					<div className='w-full md:w-96 mb-6 flex flex-col gap-20'>
						<p className='text-5xl text-gray-800 font-medium'>
							{ABOUT.JOURNEY[language]}
						</p>
						<p className='text-2xl text-gray-700 mt-4 hidden md:flex'>
							{ABOUT.EXTRA[language]}
						</p>
					</div>
					<div className='flex relative items-start justify-center w-full md:w-[70%]'>
						<div className='absolute left-9 top-0 bg-timeline h-full w-1'></div>
						<div className='w-full flex flex-col-reverse gap-7 md:gap-14 items-start h-fit'>
							<div className={stepClass + 'my-4'}>
								<Year year='2023' />
								<div className='flex flex-col gap-8'></div>
							</div>
							<div className={stepClass}>
								<Quarter year='Q3-Q4' />
								<div className='flex flex-col gap-8'>
									<Step text={journey.end2023[language]}></Step>
								</div>
							</div>
							<div className={stepClass + 'my-4'}>
								<Year year='2024' />
								<Divisor />
							</div>
							<div className={stepClass}>
								<Quarter year='Q1-Q2' />
								<div className='flex flex-col gap-8'>
									<Step text={journey.first_mid2024[language]}></Step>
								</div>
							</div>
							<div className={stepClass}>
								<Quarter year='Q3-Q4' />
								<div className='flex flex-col gap-8'>
									<Step text={journey.sec_mid2024[language]}></Step>
								</div>
							</div>
							<div className={stepClass + 'my-4'}>
								<Year year='2025' />
								<div className='flex flex-col gap-8'></div>
							</div>
							<div className={stepClass}>
								<Quarter year='Q1' />
								<div className='flex flex-col gap-8'>
									<Step text={journey.start2025[language]}></Step>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
