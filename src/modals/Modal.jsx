import React from "react";

const Modal = ({ showModal, setShowModal, children }) => {
	if (!showModal) return null;
	return (
		<div className="p-4 lg:p-6 fixed inset-0 bg-gray-200 backdrop-brightness-50 flex justify-center items-center bg-opacity-5 z-40">
			<div className="lg:w-[600px] w-90% flex flex-col bg-gray-200 p-6 pt-2 rounded-md text-black">
				<button
					className="text-lg font-semibold place-self-end p-2 rounded-full bg-gray-300 hover:bg-sky-500 hover:text-white"
					onClick={() => setShowModal(false)}
				>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
