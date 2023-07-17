import React from "react";
import { useModal } from "./context/ModalContext";

function Modal() {
  const { isModalOpen, closeModal } = useModal();
  if (!isModalOpen) return null;

  return (
    <article className="flex items-center justify-center fixed h-full w-full z-30 bg-slate-600/60">
      <div className="w-3/4 h-[30%] md:w-2/5 relative flex flex-col justify-center space-y-4 text-white text-center bg-[#152f2e] border-t-8 border-[#00c2c5]">
        <h3 className="text-4xl font-semibold">Thank You</h3>
        <p className="px-8">
          We&apos;ll reach out to confirm your appointment shortly.
        </p>
        <button
          className="p-1 absolute -right-4 -top-10 bg-black rounded-full border-4 border-white pointer"
          onClick={() => {
            closeModal();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default Modal;
