import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalType } from "../../types";

interface ModalProps extends ModalType {
  children: JSX.Element;
}

const Modal = ({ isOpen, children, setIsOpen }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  useEffect(() => {
    if (isOpen === modalStatus) return;
    setModalStatus(isOpen);
  }, [isOpen, modalStatus]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      // Usar a prop isOpen vinda do componente pai direto no envio da prop isOpen={isOpen} deste componente (ReactModal) não seria melhor que usar toda a lógica do modalStatus acima?
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
