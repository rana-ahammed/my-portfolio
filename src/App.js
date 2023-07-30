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
import { motion } from "framer-motion";

function App() {
	const [selectedPage, setSelectedPage] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

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
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<motion.div
							margin="0 0 -200px 0"
							amount="all"
							onViewportEnter={() => setSelectedPage("home")}
						>
							<Home />
						</motion.div>
					</div>
					<div className="w-4/6 mx-auto mt-10 xl:h-full">
						<motion.div
							margin="0 0 -200px 0"
							amount="all"
							onViewportEnter={() => setSelectedPage("about")}
						>
							<About />
						</motion.div>
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<motion.div
							margin="0 0 -200px 0"
							amount="all"
							onViewportEnter={() => setSelectedPage("skills")}
						>
							<Skills />
						</motion.div>
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<motion.div
							margin="0 0 -200px 0"
							amount="all"
							onViewportEnter={() => setSelectedPage("services")}
						>
							<Services />
						</motion.div>
					</div>
					<div className="w-5/6 mx-auto mt-10 xl:h-full">
						<motion.div
							margin="0 0 -200px 0"
							amount="all"
							onViewportEnter={() => setSelectedPage("portfolio")}
						>
							<Portfolio />
						</motion.div>
					</div>
					<div className="w-4/6 mx-auto mt-10 xl:h-full">
						<motion.div
							margin="0 0 -200px 0"
							amount="all"
							onViewportEnter={() => setSelectedPage("contact")}
						>
							<Contact />
						</motion.div>
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
