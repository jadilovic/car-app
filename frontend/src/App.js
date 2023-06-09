import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

import { getCareers, getPosts } from './pages/util';
import { careerDetailsLoader } from './pages/careers/CareerDetails';

import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

import About from './pages/About';
import Home from './pages/Home';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import Register from './pages/Register';
import LoginForm from './pages/help/LoginForm';
import NotFound from './pages/NotFound';
import Careers from './pages/careers/Careers';
import CareerDetails from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} loader={getPosts} />
				<Route path="register" element={<Register />} />
				<Route path="about" element={<About />} />
				<Route path="help" element={<HelpLayout />}>
					<Route path="faq" element={<Faq />} />
					<Route path="contact" element={<Contact />} action={contactAction} />
					<Route path="login-form" element={<LoginForm />} />
				</Route>
				<Route
					path="careers"
					element={<CareersLayout />}
					errorElement={<CareersError />}
				>
					<Route index element={<Careers />} loader={getCareers} />
					<Route
						path=":id"
						element={<CareerDetails />}
						loader={careerDetailsLoader}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
