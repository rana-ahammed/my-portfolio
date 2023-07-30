import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "../modals/Modal";
import { motion } from "framer-motion";

const Portfolio = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [showModal3, setShowModal3] = useState(false);
	return (
		<section id="portfolio" className="pt-24">
			<p className="text-2xl font-opensans font-semibold text-center">
				Portfolio
			</p>
			<p className="text-md text-gray-300 font-light font-opensans text-center mb-16">
				Most Recent works
			</p>

			<div className="w-100% h-auto xl:flex xl:items-center xl:justify-between gap-4 text-black">
				{/* FIRST PROJECT */}
				<motion.div
					className="w-90% h-auto xl:w-1/3 flex flex-col items-center bg-gray-200 p-2 rounded-lg mb-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, x: -100 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<img
						className="h-64 w-full object-cover object-top"
						src="../assets/rana-shop-portfolio.png"
						alt="ecommerce-portfolio"
					/>
					<p className="mt-5 font-opensans font-semibold text-lg">
						Rana-Shop
					</p>
					<div
						className="flex items-center gap-2 bg-gray-300 my-3 hover:bg-gray-500 p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal(true)}
					>
						<p>Demo</p>
						<BsArrowRight />
					</div>
				</motion.div>

				{/* SECOND PROJECT */}
				<motion.div
					className="w-90% h-auto xl:w-1/3 flex flex-col items-center bg-gray-200 p-2 rounded-lg mb-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 1 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<img
						className="h-64 w-full object-cover object-top"
						src="../assets/social-media-portfolio.png"
						alt="ecommerce-portfolio"
					/>
					<p className="mt-5 font-opensans font-semibold text-lg">
						Social App
					</p>
					<div
						className="flex items-center gap-2  bg-gray-300 my-3 hover:bg-gray-500 p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal2(true)}
					>
						<p>Demo</p>
						<BsArrowRight />
					</div>
				</motion.div>

				{/* THIRD PROJECT */}
				<motion.div
					className="w-90% h-auto xl:w-1/3 flex flex-col items-center bg-gray-200 p-2 rounded-lg mb-8"
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
						className="h-64 w-full object-cover object-top"
						src="../assets/whatsapp-clone-portfolio.png"
						alt="rana-shop-portfolio"
					/>
					<p className="mt-5 font-opensans text-center font-semibold text-lg">
						WhatsApp-Clone
					</p>
					<div
						className="flex items-center gap-2  bg-gray-300 my-3 hover:bg-gray-500 p-2 rounded-md cursor-pointer"
						onClick={() => setShowModal3(true)}
					>
						<p>Demo</p>
						<BsArrowRight />
					</div>
				</motion.div>
			</div>

			{/* MODAL FOR FIRST SECTION */}
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<img
					className="mb-5 mt-1 h-20 w-full"
					src="../assets/rana-shop-portfolio.png"
					alt="rana-shop-portfolio"
				/>
				<p className="xs:text-md lg:text-xl font-semibold font-opensans text-center">
					Project's Name: Ecommerce
				</p>
				<p className="xs:text-sm lg:text-md font-semibold text-gray-600 font-opensans py-5">
					<strong className="text-lg font-bold text-black">
						Technology Used:
					</strong>{" "}
					React| CSS3 | Material-UI | ChratJs | ChartJs-2 |
					Redux-Thunk | ReactJs Pagination | NodeJs | Express | Redux
					| Mongoose | MongoDB | React-toastify | Cloudinary |
					Nodemailer | Stripe
				</p>
				<div className="flex gap-5 justify-center">
					<button className="bg-gray-300 hover:bg-gray-400 p-2 text-black font-opensans font-semibold rounded-md">
						<a
							href="https://rana-shop.vercel.app"
							target="_blank"
							rel="noreferrer"
						>
							Live-Site
						</a>
					</button>
					<button className="bg-gray-300 hover:bg-gray-400 text-black font-opensans font-semibold p-2 rounded-md">
						<a
							href="https://github.com/rana-ahammed/rana-shop"
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
					className="mb-5 mt-1 h-20 w-full"
					src="../assets/social-media-portfolio.png"
					alt="social-media-portfolio"
				/>
				<p className="text-xl font-semibold font-opensans text-center">
					Project's Name: Social App
				</p>
				<p className="text-md font-semibold text-gray-600 font-opensans py-5">
					<strong className="text-lg font-bold text-black">
						Technology Used:
					</strong>{" "}
					React, CSS3, Material-UI, NodeJs, Express, Mongoose,
					MongoDB, Redux toolkit, React-Toastify, Bcrypt, Cloudinary,
					JSON web token, Axios, React Router Dom
				</p>
				<div className="flex gap-5 justify-center">
					<button className="bg-gray-300 hover:bg-gray-400 p-2 text-black font-opensans font-semibold rounded-md">
						<a
							href="https://social-media-mern-la2e.onrender.com"
							target="_blank"
							rel="noreferrer"
						>
							Live-Site
						</a>
					</button>
					<button className="bg-gray-300 hover:bg-gray-400 text-black font-opensans font-semibold p-2 rounded-md">
						<a
							href="https://github.com/rana-ahammed/social-app"
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
					className="mb-5 mt-1 h-20 w-full"
					src="../assets/whatsapp-clone-portfolio.png"
					alt="ecommerce-portfolio"
				/>
				<p className="text-xl font-semibold font-opensans text-center">
					Project's Name: Ecommerce
				</p>
				<p className="text-md font-semibold text-gray-600 font-opensans py-5">
					<strong className="text-lg font-bold text-black">
						Technology Used:
					</strong>{" "}
					React, Material-UI, NodeJs, Express, Mongoose, MongoDB,
					Socket.io, Multer, Multer-Gridfs-Storage, Gridfs-Stream,
					Jwt-Decode
				</p>
				<div className="flex gap-5 justify-center">
					<button className="bg-gray-300 hover:bg-gray-400 p-2 text-black font-opensans font-semibold rounded-md">
						<a
							href="https://whatsapp-clone-five-orcin.vercel.app"
							target="_blank"
							rel="noreferrer"
						>
							Live-Site
						</a>
					</button>
					<button className="bg-gray-300 hover:bg-gray-400 text-black font-opensans font-semibold p-2 rounded-md">
						<a
							href="https://github.com/rana-ahammed/whatsapp-clone"
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
