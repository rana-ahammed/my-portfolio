import React from "react";
import { BiAward, BiSupport } from "react-icons/bi";
import { FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="pt-24 mt-24">
			<p className="text-2xl font-opensans text-center mb-16">About Me</p>
			{/* Image Section */}

			<div className="xl:flex justify-center gap-6">
				<motion.div
					className="text-black text-center font-semibold font-opensans text-md"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div className="flex justify-center basis-3/5 xl:order-1">
						<img
							className="xs:w-300px xs:h-300px w-400 h-400 max-w-[300px] xl:max-w-[400px]"
							src="../assets/profile-image.jpeg"
							alt="profile-icon"
						/>
					</div>
				</motion.div>
				<div className="xl:order-2">
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
						<div className="flex basis-2/5 xs:my-6 xl:my-0 mx-auto justify-center xl:justify-between gap-4">
							<div className="flex flex-col p-2 h-24 xs:h-28 w-32 items-center gap-2 sm:gap-1 shadow-md bg-gray-300 rounded-lg">
								<BiAward className="text-black mb-2" />
								<p className="text-sm font-semibold text-black">
									Experience
								</p>
								<p className="text-sm text-black font-light">
									2 years+
								</p>
							</div>
							<div className="flex flex-col p-2 h-24 xs:h-28 w-32 items-center gap-2 sm:gap-1 shadow-md bg-gray-300 rounded-lg">
								<FiBriefcase className="text-black mb-2" />
								<p className="text-sm font-semibold text-black">
									Completed
								</p>
								<p className="text-sm text-black font-light">
									20+ projects
								</p>
							</div>
							<div className="flex flex-col p-2 h-24 xs:h-28 w-32 items-center gap-2 sm:gap-1 shadow-md bg-gray-300 rounded-lg">
								<BiSupport className="text-black mb-2" />
								<p className="text-sm font-semibold text-black">
									Support
								</p>
								<p className="text-sm text-black font-light">
									Online 24/7
								</p>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: -100 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className="text-md text-gray-300 font-light mt-5 mb-5 p-4 font-opensans">
							I'm a self-taught frontend-based Full-Stack MERN
							Developer from Bangladesh. I love web development
							because I can showcase my creativity in this work. I
							want to see myself as a skilled web developer with
							my hard work. During my learning period I completed
							approximately 20+ projects and 3 awesome full-stack
							mern project.
						</p>
					</motion.div>
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
				</div>
			</div>
		</section>
	);
};

export default About;
