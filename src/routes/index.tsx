import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer.tsx';
import { Header } from '../components/Header.tsx';
import { Loading } from '../components/Loading.tsx';

const Home = lazy(() => import('../pages/Home.tsx'));
const About = lazy(() => import('../pages/About.tsx'));
const Contact = lazy(() => import('../pages/Contact.tsx'));

export function AppRouter() {
	return (
		<Router>
			<div className='min-h-screen relative bg-white'>
				<Header />
				<main>
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route
								path='/'
								element={<Home />}
							/>
							<Route
								path='/about'
								element={<About />}
							/>
							<Route
								path='/contact'
								element={<Contact />}
							/>
						</Routes>
					</Suspense>
				</main>
				<Footer />
			</div>
		</Router>
	);
}
