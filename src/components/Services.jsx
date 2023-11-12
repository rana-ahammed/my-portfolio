import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import Modal from "../modals/Modal";
import { BsCheckCircle } from "react-icons/bs";

const Services = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [showModal3, setShowModal3] = useState(false);
	return (
		<section id="services" className="pt-24 w-full">
			<p className="text-2xl font-opensans font-semibold text-center">
				Services
			</p>
			<p className="text-md font-bold mt-1 font-opensans text-gray-400 text-center mb-16">
				What I Offer
			</p>
			<div className="w-full xl:flex xl:items-center xl:justify-center gap-5 text-black">
				{/* 1st Section */}
				<div className="bg-gray-200 xl:w-1/3 rounded-lg p-2 flex flex-col items-center mb-8">
					<FaFigma className="text-2xl mt-3 text-sky-500 w-10 h-10" />
					<p className="text-lg font-semibold font-opensans my-4">
						Figma to React & <br />
						Full-Stack MERN
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-sky-500 hover:text-white p-2 rounded-md cursor-pointer text-lg lg:text-xl"
						onClick={() => setShowModal(true)}
					>
						<p>View More </p>
						<BsArrowRight />
					</div>
				</div>
				{/* 2nd Section */}
				<div className="bg-gray-200 xl:w-1/3 rounded-lg p-2 flex flex-col items-center mb-8">
					<FaReact className="text-2xl mt-3 text-sky-500 w-10 h-10" />
					<p className="text-lg font-semibold font-opensans my-4">
						React
						<br />
						Web App
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-sky-500 hover:text-white p-2 rounded-md cursor-pointer text-lg lg:text-xl"
						onClick={() => setShowModal2(true)}
					>
						<p>View More </p>
						<BsArrowRight />
					</div>
				</div>
				{/* 3rd Section */}
				<div className="bg-gray-200 xl:w-1/3 rounded-lg p-2 flex flex-col items-center mb-8">
					<FaNodeJs className="text-2xl mt-3 text-sky-500 w-10 h-10" />
					<p className="text-lg font-semibold font-opensans my-4">
						Full-Stack
						<br />
						MERN
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-sky-500 hover:text-white text-lg lg:text-xl p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal3(true)}
					>
						<p>View More </p>
						<BsArrowRight />
					</div>
				</div>
			</div>

			{/* Modal For First Section */}
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<p className="text-xl lg:text-2xl font-opensans font-semibold text-left mb-6">
					Figma to React & Full-Stack MERN
				</p>
				<p className="text-lg lg:text-xl font-opensans font-semibold text-gray-500 mb-8 text-left">
					Service with more than 2 years of experience. Providing
					quality work to clients companies.
				</p>
				<div className="text-md lg:text-lg">
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Figma Design convert to React & Full-Stack MERN.</p>
					</div>

					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Responsive website for mobile and tablet device.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Sign up & Login authentication with google.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Clean code.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Pixel perfect web app.</p>
					</div>
				</div>
			</Modal>

			{/* Modal for Second Section */}
			<Modal showModal={showModal2} setShowModal={setShowModal2}>
				<p className="text-xl lg:text-2xl font-opensans font-semibold text-left mb-6">
					React Web App
				</p>
				<p className="text-lg lg:text-xl font-opensans font-semibold text-gray-500 mb-8 text-left">
					Service with more than 2 years of experience. Providing
					quality work to clients companies.
				</p>
				<div className="text-md lg:text-lg">
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Clean code & organize components.</p>
					</div>

					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Sign up & Login authentication with google.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Site deploy in free hosting server.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Necessary all npm package installed.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Unlimited revision.</p>
					</div>
				</div>
			</Modal>

			{/* Modal For Third Section */}
			<Modal showModal={showModal3} setShowModal={setShowModal3}>
				<p className="text-xl lg:text-2xl font-opensans font-semibold text-left mb-6">
					Full-Stack MERN
				</p>
				<p className="text-lg lg:text-xl font-opensans font-semibold text-gray-500 mb-8 text-left">
					Service with more than 2 years of experience. Providing
					quality work to clients companies.
				</p>
				<div className="text-md lg:text-lg">
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>User frindly web app.</p>
					</div>

					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Pixel perfect web app as per Figma.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>
							Password Authentication & email verification system.
						</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Sign up & login system.</p>
					</div>
					<div className="flex items-center gap-2 mb-5">
						<BsCheckCircle />
						<p>Server site deploy & site hosting.</p>
					</div>
				</div>
			</Modal>
		</section>
	);
};

export default Services;
