import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
	const isDesktop = useMediaQuery("(min-width: 1024px");
	return (
		<section
			id="home"
			className="lg:flex lg:justify-between lg:items-center lg:h-full gap-16 pt-24"
		>
			{/* IMAGE SECTION */}
			<div className="lg:order-2 flex justify-center basis-3/5 mt-16 xl:mt-0">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: 100 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<img
						className="z-10 xs:w-310px xs:h-310px w-400 h-400 max-w-[320px] xl:max-w-[400px] rounded-lg"
						src="../assets/profile-image-circular.png"
						alt="profile"
					/>
				</motion.div>
			</div>

			{/* DETAILS SECTION */}
			<div className="basis-2/5 mt-12 xl:mt-0">
				{/* HEADING */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="text-4xl lg:5xl font-playfair text-center xl:text-center">
						Rana Ahammed
					</p>
					<div className="text-2xl font-opensans text-center mt-2 xl:mt-2 xl:text-center">
						{isDesktop ? (
							<span className="inline-block border-dashed w-10 text-center">
								<hr />
							</span>
						) : (
							""
						)}
						<TypeAnimation
							sequence={[
								"Frontend Developer",
								2000,
								"Backend Developer",
								2000,
								"Full Stack Developer",
								2000,
							]}
							speed={50}
							className="text-yellow-400"
							cursor={true}
							repeat={Infinity}
						/>
					</div>
					<p className="text-sm text-center xl:text-lg mt-5 font-thin">
						I'm a Full-Stack MERN Developer, and I'm very passionate
						and dedicated to my work.
					</p>
				</motion.div>

				{/* CV */}
				<motion.div
					className="mt-10 text-black text-center font-semibold font-opensans text-md"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1.2 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<a
						className="h-4 w-6 bg-cyan-500 rounded-lg p-4"
						href="../assets/cv-rana-ahammed.pdf"
						download
					>
						Download Resume
					</a>
				</motion.div>
				<motion.div
					className="mt-10 text-center font-semibold font-opensans text-md"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	);
};

export default Home;
