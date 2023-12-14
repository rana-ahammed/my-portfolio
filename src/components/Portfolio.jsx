import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "../modals/Modal";
import gentStyleImg from "https://i.postimg.cc/g2vXT5wb/gentstyle-home-desktop.png";
import quiznookImg from "https://i.postimg.cc/Qt6RXkZc/rana-shop-portfolio.png";
import skyInsightImg from "https://i.postimg.cc/sX2M1gT3/skyinsight-home-desktop-dark.png";

const Portfolio = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [showModal3, setShowModal3] = useState(false);
	return (
		<section id="portfolio" className="pt-24 w-full">
			<p className="text-2xl font-opensans font-semibold text-center">
				Portfolio
			</p>
			<p className="text-md text-gray-400 mt-1 font-bold font-opensans text-center mb-16">
				Most Recent Works
			</p>

			<div className="w-100% h-auto xl:flex xl:items-center xl:justify-between gap-4 text-black">
				{/* 1st Section */}
				<div className="flex flex-col bg-gray-200 p-2 rounded-lg items-center mb-8">
					<img
						className="h-64 w-full rounded-md"
						src={gentStyleImg}
						alt="ecommerce portfolio website image"
					/>
					<p className="mt-5 font-opensans font-semibold text-lg lg:text-2xl text-black">
						GentStyle
					</p>
					<div
						className="flex items-center xs:text-lg lg:text-xl gap-2 bg-gray-300 my-3 hover:bg-sky-500 p-2 rounded-md cursor-pointer hover:text-white"
						onClick={() => setShowModal(true)}
					>
						<p>Demo</p>
						<BsArrowRight />
					</div>
				</div>
				{/* 2nd Section */}
				<div className="flex flex-col bg-gray-200 p-2 rounded-lg items-center mb-8">
					<img
						className="h-64 w-full rounded-md"
						src={quiznookImg}
						alt="quiznook portfolio website image"
					/>
					<p className="mt-5 font-opensans font-semibold text-lg lg:text-2xl text-black">
						Quiznook
					</p>
					<div
						className="flex items-center gap-2 xs:text-lg lg:text-xl bg-gray-300 my-3 hover:bg-sky-500 hover:text-white p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal2(true)}
					>
						<p>Demo</p>
						<BsArrowRight />
					</div>
				</div>
				{/* 3rd Section */}
				<div className="flex flex-col bg-gray-200 p-2 rounded-lg items-center mb-8">
					<img
						className="h-64 w-full rounded-md"
						src={skyInsightImg}
						alt="weather portfolio website image"
					/>
					<p className="mt-5 lg:text-2xl font-opensans text-center font-semibold text-lg text-black">
						SkyInsight
					</p>
					<div
						className="flex items-center xs:text-lg lg:text-xl gap-2  bg-gray-300 my-3 hover:bg-sky-500 hover:text-white p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal3(true)}
					>
						<p>Demo</p>
						<BsArrowRight />
					</div>
				</div>
			</div>

			{/* MODAL FOR FIRST SECTION */}
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<img
					className="mb-5 mt-1 h-64 w-full rounded-md"
					src={gentStyleImg}
					alt="e-commerce portfolio website image"
				/>
				<p className="xs:text-lg lg:text-2xl font-semibold font-opensans text-center">
					Project's Name:{" "}
					<span className="text-sky-500">GentStyle</span>
				</p>
				<p className="xs:text-md lg:text-xl font-semibold text-gray-600 font-opensans py-5">
					<strong className="text-lg font-bold text-black">
						Technology Used:
					</strong>{" "}
					React| TailwindCSS | NodeJs | Express | Redux-Toolkit |
					Mongoose | MongoDB | Nodemailer | Stripe
				</p>
				<div className="flex gap-5 justify-center text-lg lg:text-xl">
					<button className="bg-gray-300 hover:bg-sky-500 hover:text-white p-2 text-black font-opensans font-semibold rounded-md">
						<a
							href="https://gentstyle.vercel.app"
							target="_blank"
							rel="noreferrer"
						>
							Live-Site
						</a>
					</button>
					<button className="bg-gray-300 hover:bg-sky-500 hover:text-white text-black font-opensans font-semibold p-2 rounded-md">
						<a
							href="https://github.com/rana-ahammed/gentstyle"
							target="_blank"
							rel="noreferrer"
						>
							Project-Repo
						</a>
					</button>
				</div>
			</Modal>
			{/* MODAL FOR SECOND SECTION */}
			<Modal showModal={showModal2} setShowModal={setShowModal2}>
				<img
					className="mb-5 mt-1 h-64 w-full rounded-md"
					src={quiznookImg}
					alt="quiz portfolio website image"
				/>
				<p className="xs:text-lg lg:text-2xl font-semibold font-opensans text-center">
					Project's Name:{" "}
					<span className="text-sky-500">Quiznook</span>
				</p>
				<p className="xs:text-md lg:text-xl font-semibold text-gray-600 font-opensans py-5">
					<strong className="text-lg font-bold text-black">
						Technology Used:
					</strong>{" "}
					ReactJs | TailwindCSS | NodeJs | ExpressJs | MongoDB |
					Mongoose
				</p>
				<div className="flex gap-5 justify-center text-lg lg:text-xl">
					<button className="bg-gray-300 hover:bg-sky-500 hover:text-white p-2 text-black font-opensans font-semibold rounded-md">
						<a
							href="https://quiznook.vercel.app"
							target="_blank"
							rel="noreferrer"
						>
							Live-Site
						</a>
					</button>
					<button className="bg-gray-300 hover:bg-sky-500 hover:text-white text-black font-opensans font-semibold p-2 rounded-md">
						<a
							href="https://github.com/rana-ahammed/quiznook"
							target="_blank"
							rel="noreferrer"
						>
							Project-Repo
						</a>
					</button>
				</div>
			</Modal>
			{/* MODAL FOR THIRD SECTION */}
			<Modal showModal={showModal3} setShowModal={setShowModal3}>
				<img
					className="mb-5 mt-1 h-64 w-full rounded-md"
					src={skyInsightImg}
					alt="weather portfolio website image"
				/>
				<p className="xs:text-lg lg:text-2xl font-semibold font-opensans text-center">
					Project's Name:{" "}
					<span className="text-sky-500">SkyInsight</span>
				</p>
				<p className="xs:text-md lg:text-xl font-semibold text-gray-600 font-opensans py-5">
					<strong className="text-lg font-bold text-black">
						Technology Used:
					</strong>{" "}
					ReactJs, Tailwindcss, NodeJs, ExpressJs, OpenweathermapApi
				</p>
				<div className="flex gap-5 justify-center text-lg lg:text-xl">
					<button className="bg-gray-300 hover:bg-sky-500 hover:text-white p-2 text-black font-opensans font-semibold rounded-md">
						<a
							href="https://skyinsight.vercel.app"
							target="_blank"
							rel="noreferrer"
						>
							Live-Site
						</a>
					</button>
					<button className="bg-gray-300 hover:bg-sky-500 hover:text-white text-black font-opensans font-semibold p-2 rounded-md">
						<a
							href="https://github.com/rana-ahammed/skyinsight"
							target="_blank"
							rel="noreferrer"
						>
							Project-Repo
						</a>
					</button>
				</div>
			</Modal>
		</section>
	);
};

export default Portfolio;
