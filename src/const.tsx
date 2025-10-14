export const PAGES = {
	HOME: { es: 'Inicio', en: 'Home' },
	ABOUT: { es: 'Sobre mi', en: 'About me' },
	CONTACT: { es: 'Contactar', en: 'Contact' },
};
export const HERO = {
	TITLE: {
		es: 'Desarrollador Fullstack con mucha Pasión',
		en: 'FullStack Developer with Passion',
	},
	DESCRIPTION: {
		es: 'Hola, soy José Felix. Con 2 años de experiencia en desarrollo web, me especializo en crear aplicaciones responsivas e intuitivas con tecnologías modernas.',
		en: "Hi, I'm José Felix. With 2 years of experience in web development, I specialize in building responsive and user-friendly applications using modern technologies.",
	},
	VIEW: { es: 'Proyectos', en: 'Projects' },
	CV: { es: 'Descargar CV', en: 'Download CV' },
};
export const SKILLS = {
	TITLE: { es: 'Habilidades Técnicas', en: 'Technical Skills' },
	FRONTEND: { es: 'Frontend', en: 'Frontend' },
	BACKEND: { es: 'Backend', en: 'Backend' },
	TOOLS: { es: 'Herramientas de Desarrollo', en: 'Development Tools' },
	SOFT_SKILLS: { es: 'Habilidades blandas', en: 'Soft Skills' },
};
export const PROJECTS = {
	TITLE: { es: 'Proyectos destacados', en: 'Featured Projects' },
	OTHER: { es: 'Otros proyectos', en: 'Other Projects' },
	LINK: { es: 'Link a la Demo', en: 'Live Demo' },
	CODE: { es: 'Código', en: 'Code' },
	DESCRIPTION: { es: 'Descripción', en: 'Description' },
	TECNOLOGIES: { es: 'Tecnologías', en: 'Technologies' },
};
export const FOOTER = {
	CONTACT: { es: 'Contactame ahora', en: 'Contact me now' },
	CONTACT_TITLE: {
		es: 'TE INTERESA LO QUE VES?',
		en: 'DO YOU LIKE WHAT YOU SEE?',
	},
	AVAILABLE: { es: 'Estoy disponible!', en: 'I am available!' },
	READY: { es: 'Listo para trabajar contigo', en: 'Ready to work with you' },
	PAGES: { es: 'Páginas', en: 'Pages' },
	SERVICES: { es: 'Servicios', en: 'Services' },
	SOFTWARE: {
		es: 'Desarrollo y Mantenimiento de software ',
		en: 'Software Development and Maintenance',
	},
	WEB: {
		es: 'Diseño y Desarrollo de Páginas web',
		en: 'Website Design and Development',
	},
	MADE: { es: 'Hecho con', en: 'Made with' },
};
export const CONTACT = {
	TITLE: { es: 'Ponte en contacto', en: 'Get In Touch' },
	INFO: { es: 'Información de contacto', en: 'Contact Information' },
	NAME: { es: 'Nombre', en: 'Name' },
	EMAIL: { es: 'Email', en: 'Email' },
	MESSAGE: { es: 'Mensaje', en: 'Message' },
	NAME_PLACEHOLDER: { es: 'Cómo te llamas?', en: 'What is your name?' },
	EMAIL_PLACEHOLDER: {
		es: 'A dónde puedo enviarte un correo?',
		en: 'Where I can mail you?',
	},
	MESSAGE_PLACEHOLDER: {
		es: 'Me encantaría saber qué tienes que decir',
		en: `I'd like to know what you have to say`,
	},
	SEND: { es: 'Enviar mensaje', en: 'Send Message' },
	RESULT_SUCCESS: { es: 'Mensaje enviado!', en: 'Message Sent!' },
	RESULT_FAILED: {
		es: 'Ha ocurrido un error al enviar el mensaje',
		en: 'An error occurred while sending the message',
	},
	RESULT_LOADING: { es: 'Enviando mensaje...', en: 'Sending Message...' },
};
export const ABOUT = {
	WHO: { es: 'Quién soy?', en: 'Who I am?' },
	IM_1: {
		en: `Hello, I'm José Felix, a full-stack developer with two years of 
			experience, passionate about creating useful and modern applications 
			that add value to people. Since I began self-studying, I've developed 
			a strong interest in software development, focusing especially on 
			intuitive design and the implementation of efficient technological 
			solutions.`,
		es: `Hola, Soy José Felix, un desarrollador fullstack con dos años de
			experiencia, apasionado por crear aplicaciones útiles y modernas que
			aporten valor a las personas. Desde que empecé a estudiar de manera
			autodidacta, he cultivado un fuerte interés en el desarrollo de
			software, enfocándome especialmente en el diseño intuitivo y en la
			implementación de soluciones tecnológicas eficientes.`,
	},
	IM_2: {
		en: `Currently, I'm strengthening my knowledge and working on real-life 
		projects to continue growing professionally and consolidating my skills 
		in web and mobile development. I love learning from every challenge and 
		contributing to creating digital experiences that make users' lives easier 
		and more enjoyable.`,
		es: `Actualmente, estoy reforzando mis conocimientos y trabajando en
		proyectos reales para seguir creciendo profesionalmente y consolidar
		mis habilidades en el desarrollo web y móvil. Me encanta aprender de
		cada desafío y contribuir a crear experiencias digitales que hagan
		la vida más fácil y agradable para los usuarios.`,
	},
	JOURNEY: {
		en: 'My learning journey so far',
		es: 'Mi trayectoria de aprendiaje hasta ahora',
	},
	EXTRA: {
		es: `Como desarrollador web, estoy comprometido con el aprendizaje continuo y con la creación de soluciones tecnológicas que impacten
			positivamente a los usuarios.`,
		en: `As a web developer, I am committed to continuous learning and creating technological solutions that positively impact users.`,
	},
};

const linkClass = 'text-blue-500 hover:text-blue-600 transition-colors';

export const JOURNEY = {
	end2023: {
		es: (
			<>
				Inicié mi aprendizaje en programación con el lenguaje Java a finales de
				2023, utilizando recursos como{' '}
				<a
					href='https://www.youtube.com/@pildorasinformaticas'
					className={linkClass}
					target='_blank'
				>
					Programación ATS
				</a>{' '}
				y{' '}
				<a
					href='https://www.youtube.com/@pildorasinformaticas'
					target='_blank'
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
					target='_blank'
				>
					Programación ATS
				</a>{' '}
				and{' '}
				<a
					href='https://www.youtube.com/@pildorasinformaticas'
					className={linkClass}
					target='_blank'
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
					target='_blank'
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
					target='_blank'
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
					target='_blank'
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
					target='_blank'
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
