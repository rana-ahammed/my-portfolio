import React from "react";
import { BiAward, BiSupport } from "react-icons/bi";
import { FiBriefcase } from "react-icons/fi";

const About = () => {
	return (
		<section id="about" className="pt-24 mt-5 lg:mt-24 w-full">
			<p className="text-2xl font-opensans text-center mb-16">About Me</p>
			{/* Image Section */}

			<div className="xl:flex justify-center gap-6 lg:gap-10">
				<div className="flex justify-center basis-3/5 xl:order-1">
					<img
						className="xs:w-300px xs:h-300px w-400 h-400 max-w-[300px] xl:max-w-[400px] rounded-md"
						src="https://i.postimg.cc/9QZ5G7yj/profile-image.jpg"
						alt="profile-icon"
					/>
				</div>

				<div className="xl:order-2">
					<div className="flex xs:my-6 xl:my-0 mx-auto justify-center xl:justify-between gap-4 xl:w-5/6">
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
					<div className="flex lg:mt-10 lg:mx-auto flex-col w-full xl:w-3/4">
						<p className="text-md text-gray-400 font-semibold font-opensans">
							I'm a self-taught frontend-based Full-Stack MERN
							Developer from Bangladesh. I love web development
							because I can showcase my creativity. I want to see
							myself as a skilled web developer with my hard work.
							During my learning period I completed approximately
							20+ projects and 3 awesome full-stack mern project.
						</p>

						<a
							className="bg-sky-400 hover:bg-sky-500 text-black rounded-lg p-4 w-full lg:w-3/5 text-center mt-6 font-bold text-lg mx-auto"
							href="https://docs.google.com/document/d/1yhod91mb04PdQIAl-uSpk8jpH6nTOESZn2WDjTeoiLM/edit?usp=sharing"
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
