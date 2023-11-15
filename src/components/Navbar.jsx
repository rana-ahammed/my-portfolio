import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";

const Link = ({
	page,
	selectedPage,
	setSelectedPage,
	isMenuToggled,
	setIsMenuToggled,
}) => {
	const lowerCasePage = page.toLowerCase();
	const isDesktop = useMediaQuery("(min-width: 1024px");

	return (
		<AnchorLink
			className={`${
				isDesktop && selectedPage === lowerCasePage
					? "text-yellow-500"
					: ""
			} hover:text-yellow-500 transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={
				isDesktop
					? () => setSelectedPage(lowerCasePage)
					: () => setIsMenuToggled(!isMenuToggled)
			}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	return (
		<nav className="z-50 w-full fixed top-0 bg-gray-800">
			<div className="flex items-center justify-between mx-auto py-6 w-5/6">
				<p className="font-playfair text-3xl font-bold">Rana</p>

				{/* DESKTOP NAV */}
				{isDesktop ? (
					<div className="flex justify-between gap-16 font-opensans text-lg font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							isMenuToggled={isMenuToggled}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="About"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							isMenuToggled={isMenuToggled}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							isMenuToggled={isMenuToggled}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Services"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							isMenuToggled={isMenuToggled}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Portfolio"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							isMenuToggled={isMenuToggled}
							setIsMenuToggled={setIsMenuToggled}
						/>
						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
							isMenuToggled={isMenuToggled}
							setIsMenuToggled={setIsMenuToggled}
						/>
					</div>
				) : (
					<button
						className="rounded-full bg-sky-400 p-2 text-black"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<GiHamburgerMenu />
					</button>
				)}

				{/* MOBILE MENU */}
				{!isDesktop && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full w-2/3 bg-sky-500">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
								className="text-black"
							>
								X
							</button>
						</div>

						{/* MENU ITEMS */}
						<div className="flex flex-col text-2xl xs:gap-5 text-black ml-[33%]">
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="About"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="Services"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="Portfolio"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
								setIsMenuToggled={setIsMenuToggled}
							/>
							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
								setIsMenuToggled={setIsMenuToggled}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
