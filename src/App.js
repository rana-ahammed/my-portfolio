import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
	const [selectedPage, setSelectedPage] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 3000);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="app bg-dark-gray">
					<Navbar
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
					<div className="w-5/6 mx-auto xl:h-full">
						<Home />
					</div>
					<div className="w-4/6 mx-auto mt-10 xl:h-full">
						<About />
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<Skills />
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<Services />
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<Portfolio />
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<Contact />
					</div>
					<div className="w-full mx-auto">
						<Footer />
					</div>
				</div>
			)}
		</>
	);
}

export default App;
