import React, { ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("portal");
    elRef.current ? modalRoot?.appendChild(elRef.current) : null;

    return () => {
      elRef.current ? modalRoot?.removeChild(elRef.current) : null;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
        {children}
      </div>
    </div>,
    elRef.current
  );
};

export default Modal;
