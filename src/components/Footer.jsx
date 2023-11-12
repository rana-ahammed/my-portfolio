import React from "react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
	return (
		<footer className="bg-gray-800 w-full bottom-0 flex flex-col items-center p-5 text-gray-200 mt-10">
			<p className="text-2xl font-playfair font-semibold mb-5 text-center">
				Rana
			</p>
			<div className="flex items-center justify-center gap-12 text-md font-opensans font-semibold mb-8">
				<AnchorLink href="#skills" className=" hover:text-yellow-500">
					Skills
				</AnchorLink>
				<AnchorLink
					href="#portfolio"
					className=" hover:text-yellow-500"
				>
					Portfolio
				</AnchorLink>
				<AnchorLink href="#contact" className=" hover:text-yellow-500">
					Contact
				</AnchorLink>
			</div>
			<div className="flex items-center justify-center text-3xl font-bold gap-3 mb-8">
				<a
					href="https://github.com/rana-ahammed"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithubSquare />
				</a>
				<a
					href="https://linkedin.com/in/rana-ahammed"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://facebook.com/rana6220"
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookSquare />
				</a>
			</div>
			<p className="text-xs font-semibold font-opensans text-center">
				&copy; Rana Ahammed. All rights reserved
			</p>
		</footer>
	);
};

export default Footer;
