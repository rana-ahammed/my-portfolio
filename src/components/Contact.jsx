import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { RiSkypeLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};
	return (
		<section id="contact" className="pt-24 w-full">
			<p className="text-2xl font-semibold font-opensans text-center mb-16">
				Contact Me
			</p>

			<div className="xl:flex xl:gap-10 w-full h-auto">
				{/* LEFT SECTION */}

				<div className="w-100% xl:w-2/5">
					<div className="bg-gray-200 mb-8 p-4 flex flex-col items-center rounded-md text-black">
						<HiOutlineMail className="text-3xl mb-4" />
						<p className="text-md font-opensans font-semibold">
							Email
						</p>
						<p className="text-sm font-opensans font-light text-gray-600 mb-3">
							rana.ahammed.012@gmail.com
						</p>

						<a
							href="mailto:rana.ahammed.012@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="text-sm font-opensans font-light p-2 bg-gray-300 rounded-md"
						>
							Contact me &rarr;
						</a>
					</div>

					<div className="bg-gray-200 mb-8 p-4 flex flex-col items-center rounded-md text-black">
						<FaWhatsapp className="text-3xl mb-4" />
						<p className="text-md font-opensans font-semibold">
							WhatsApp
						</p>
						<p className="text-sm font-opensans font-light text-gray-600 mb-3">
							(+88) 01303173740
						</p>

						<a
							href="https://wa.me/+8801303173740"
							target="_blank"
							rel="noreferrer"
							className="text-sm font-opensans font-light p-2 bg-gray-300 rounded-md flex items-center"
						>
							Contact me &rarr;
						</a>
					</div>

					<div className="bg-gray-200 mb-8 p-4 flex flex-col items-center rounded-md text-black">
						<RiSkypeLine className="text-3xl mb-4" />
						<p className="text-md font-opensans font-semibold">
							Skype
						</p>
						<p className="text-sm font-opensans font-light text-gray-600 mb-3">
							live:.cid.3ae481636a8c7eea
						</p>

						<a
							href="https://join.skype.com/invite/uBwzx0mkTMdO"
							target="_blank"
							rel="noreferrer"
							className="text-sm font-opensans font-light p-2 bg-gray-300 rounded-md"
						>
							Contact me &rarr;
						</a>
					</div>
				</div>

				{/* RIGHT SECTION */}
				<div className="w-100% xl:w-3/5">
					{/* FORM SECTION */}

					<form
						className="z-10 bg-gray-200 h-auto w-full p-4 rounded-lg xl:ml-12 text-black"
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/674d35914c4bb28cc7d7eb3c6ca20f93"
						method="POST"
						autoComplete="off"
					>
						<input
							type="text"
							placeholder="Your Name"
							{...register("name", {
								required: true,
								maxLength: 100,
							})}
							className="h-16 w-full text-md font-opensans font-light px-6 bg-gray-200 border-2 rounded-lg border-gray-500 border-opacity-50 outline-none focus:border-blue-500  transition duration-200 mb-3 mt-2"
						/>
						{errors.name && (
							<p className="text-red-500 ml-5 mb-8">
								{errors.name.type === "required" &&
									"* Your Name is required"}
								{errors.name.type === "maxLength" &&
									"Max length is 100 char."}
							</p>
						)}
						<input
							type="text"
							placeholder="Your Email"
							{...register("email", {
								required: true,
								pattern:
									/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
							})}
							className="h-16 w-full text-md font-opensans font-light px-6 bg-gray-200 border-2 rounded-lg border-gray-500 border-opacity-50 outline-none focus:border-blue-500  transition duration-200 mb-3"
						/>
						{errors.email && (
							<p className="text-red-500 ml-5 mb-8">
								{errors.email.type === "required" &&
									"* Your Email is required"}
								{errors.email.type === "pattern" &&
									"Invalid email address."}
							</p>
						)}
						<textarea
							rows="11"
							cols="30"
							placeholder="Write me"
							{...register("message", {
								required: true,
								maxLength: 2000,
							})}
							className="h-auto w-full text-md font-opensans font-light py-2 px-6 bg-gray-200 border-2 rounded-lg border-gray-500 border-opacity-50 outline-none focus:border-blue-500 transition duration-200 mb-2 resize-none"
						/>
						{errors.message && (
							<p className="text-red-500 ml-5 mb-8">
								{errors.message.type === "required" &&
									"* Your Message is required"}
								{errors.message.type === "maxLength" &&
									"Max length is 2000 char."}
							</p>
						)}

						<button
							type="submit"
							className="bg-sky-500 block mx-auto font-semibold text-white mt-5 text-center  hover:bg-sky-400 transition duration-500 rounded-lg px-4 py-2 lg:p-5"
						>
							SEND ME A MESSAGE
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
