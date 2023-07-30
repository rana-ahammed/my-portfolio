import React from "react";
import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";

const Skills = () => {
	return (
		<section id="skills" className="pt-24">
			<p className="text-2xl font-semibold font-opensans text-center">
				Skills
			</p>
			<p className="text-md font-light font-opensans text-center mb-20 text-gray-400">
				My technical level
			</p>
			<div className="xl:flex xl:justify-center xl:items-center gap-8">
				{/* FRONTEND SECTION */}
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
					<div className="w-320px h-320px xl:max-w-[400px] xl:max-h-[400px] p-2 bg-gray-200 text-black rounded-lg  xs:mb-8">
						<p className="mt-5 mb-8 text-center font-opensans font-semibold">
							Frontend Development
						</p>

						<div className="flex gap-2 mt-5">
							<div className="flex flex-col basis-2/4 gap-2">
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											HTML
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											CSS
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Intermediate
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											TailwindCSS
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Material-UI
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Intermediate
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col basis-2/4 gap-2">
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Bootstrap
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Intermediate
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											React
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											JavaScript
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Git
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* TOOLS SECTION */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, y: 100 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="w-320px h-320px p-2 bg-gray-200 text-black rounded-lg mb-5">
						<p className="mt-5 mb-8 text-center font-opensans font-semibold">
							Tools I Use
						</p>

						<div className="flex mt-5">
							<div className="flex flex-col basis-2/4 gap-2">
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											VS Code
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Postman
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Redux Dev Tool
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col basis-2/4 gap-2">
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											GitHub
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Chrome Dev Tool
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											MongoDB Compass
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* BACKEND SECTION */}
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
					<div className="w-320px h-320px xl:max-w-[400px] xl:max-h-[400px] p-2 bg-gray-200 text-black rounded-lg xs:mb-8">
						<p className="mt-5 mb-8 text-center font-opensans font-semibold">
							Backend Development
						</p>

						<div className="flex gap-2 mt-5">
							<div className="flex flex-col basis-2/4 gap-2">
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											NodeJs
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Intermediate
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											ExpressJs
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Intermediate
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											MongoDB
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Intermediate
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Redux
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col basis-2/4 gap-2">
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Mongoose
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Vercel
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											FireBase
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
								<div className="flex gap-2">
									<BiBadgeCheck className="text-lg mt-1" />
									<div>
										<p className="font-opensans font-semibold text-lg">
											Netlify
										</p>
										<p className="font-opensans text-gray-500 font-thin text-sm">
											Advanced
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
