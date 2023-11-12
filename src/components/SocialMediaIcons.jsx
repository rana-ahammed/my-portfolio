import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center gap-10 mt-6">
			<a
				href="https://linkedin.com/in/rana-ahammed"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin className="h-8 w-8 hover:bg-gray-600" />
			</a>
			<a
				href="https://github.com/rana-ahammed"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub className="h-8 w-8 hover:bg-gray-600 hover:rounded-full" />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
