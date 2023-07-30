import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "../modals/Modal";
import { BsCheckCircle } from "react-icons/bs";

const Services = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [showModal3, setShowModal3] = useState(false);
	return (
		<section id="services" className="pt-24">
			<p className="text-2xl font-opensans font-semibold text-center">
				Services
			</p>
			<p className="text-md font-light font-opensans text-gray-300 text-center mb-16">
				What I Offer
			</p>
			<div className="w-100% lg:flex lg:items-center lg:justify-center gap-5 text-black">
				{/* First Section */}
				<motion.div
					className="xl:w-1/3 flex flex-col items-center p-4 bg-gray-200 rounded-lg mb-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -100 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<FaFigma className="text-2xl mt-3" />
					<p className="text-lg font-semibold font-opensans my-4">
						Figma to React & <br />
						Full-Stack MERN
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-gray-500 p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal(true)}
					>
						<p>View More </p>
						<BsArrowRight />
					</div>
				</motion.div>
				{/* SECOND SECTION */}
				<motion.div
					className="xl:w-1/3 flex flex-col items-center p-4 bg-gray-200 rounded-lg mb-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<FaReact className="text-2xl mt-3" />
					<p className="text-lg font-semibold font-opensans my-4">
						React
						<br />
						Web App
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-gray-500 p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal2(true)}
					>
						<p>View More </p>
						<BsArrowRight />
					</div>
				</motion.div>
				{/* THIRD SECTION */}
				<motion.div
					className="xl:w-1/3 flex flex-col items-center p-4 bg-gray-200 rounded-lg mb-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: 100 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<FaNodeJs className="text-2xl mt-3" />
					<p className="text-lg font-semibold font-opensans my-4">
						Full-Stack
						<br />
						MERN
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-gray-500 p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal3(true)}
					>
						<p>View More </p>
						<BsArrowRight />
					</div>
				</motion.div>
			</div>

			{/* Modal For First Section */}
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<p className="text-lg font-opensans font-semibold text-center mb-3">
					Figma to React & Full-Stack MERN
				</p>
				<p className="text-sm font-opensans font-thin text-gray-500 mb-8 text-center">
					Service with more than 2 years of experience. Providing
					quality work to clients companies.
				</p>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Figma Design convert to React & Full-Stack MERN.
					</p>
				</div>

				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Responsive website for mobile and tablet device.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Sign up & Login authentication with google.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Clean code.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Pixel perfect web app.
					</p>
				</div>
			</Modal>

			{/* Modal for Second Section */}
			<Modal showModal={showModal2} setShowModal={setShowModal2}>
				<p className="text-lg font-opensans font-semibold text-center mb-3">
					React Web App
				</p>
				<p className="text-sm font-opensans font-thin text-gray-500 mb-8 text-center">
					Service with more than 2 years of experience. Providing
					quality work to clients companies.
				</p>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Clean code & organize components.
					</p>
				</div>

				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Sign up & Login authentication with google.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Site deploy in free hosting server.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Necessary all npm package installed.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Unlimited revision.
					</p>
				</div>
			</Modal>

			{/* Modal For Third Section */}
			<Modal showModal={showModal3} setShowModal={setShowModal3}>
				<p className="text-lg font-opensans font-semibold text-center mb-3">
					Full-Stack MERN
				</p>
				<p className="text-sm font-opensans font-thin text-gray-500 mb-8 text-center">
					Service with more than 2 years of experience. Providing
					quality work to clients companies.
				</p>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						User frindly web app.
					</p>
				</div>

				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Pixel perfect web app as per Figma.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Password Authentication & email verification system.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Sign up & login system.
					</p>
				</div>
				<div className="flex items-center gap-2 mb-5">
					<BsCheckCircle />
					<p className="text-sm font-opensans font-thin text-gray-500">
						Server site deploy & site hosting.
					</p>
				</div>
			</Modal>
		</section>
	);
};

export default Services;
