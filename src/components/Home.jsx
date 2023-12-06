import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "./SocialMediaIcons";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	return (
		<section
			id="home"
			className="lg:flex w-full lg:justify-between lg:items-center lg:h-full gap-16 pt-24 xl:w-4/6 xl:pt-8 xl:mx-auto"
		>
			{/* IMAGE SECTION */}
			<div className="lg:order-2 flex justify-center basis-3/5 lg:mt-16 xl:mt-0">
				<img
					className="z-10 xs:w-310px xs:h-310px w-400 h-400 max-w-[320px] xl:max-w-[400px] rounded-full p-2 shadow-lg"
					src="https://i.postimg.cc/RVRjgR24/profile-image-circular.png"
					alt="profile"
				/>
			</div>

			{/* DETAILS SECTION */}
			<div className="basis-2/5 mt-12 xl:mt-0 flex flex-col items-center">
				{/* HEADING */}

				<p className="text-4xl lg:5xl font-playfair text-center xl:text-center text-gray-200">
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
						className="text-yellow-400 font-semibold text-2xl mt-2"
						cursor={true}
						repeat={Infinity}
					/>
				</div>
				<p className="text-md font-semibold text-center xl:text-lg mt-5 mb-8 text-gray-400">
					I'm a Full-Stack MERN Developer, and I'm very passionate and
					dedicated to my work.
				</p>

				{/* CV */}

				{/* <div className="flex flex-col items-center w-full mt-6 h-auto gap-4"> */}
				<a
					className="bg-sky-400 hover:bg-sky-500 text-black p-4 rounded-lg text-xl font-bold mx-auto text-center"
					href="https://docs.google.com/document/d/1yhod91mb04PdQIAl-uSpk8jpH6nTOESZn2WDjTeoiLM/edit?usp=sharing"
				>
					Visit My Resume
				</a>

				<SocialMediaIcons />
				{/* </div> */}
			</div>
		</section>
	);
};

export default Home;
