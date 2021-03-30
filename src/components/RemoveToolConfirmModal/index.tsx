import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { GoX } from "react-icons/go";

import style from "./style.module.scss";

interface RemoveToolConfirmModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RemoveToolConfirmModal({
  isOpen,
  onRequestClose,
}: RemoveToolConfirmModalProps) {
  const [isConfirm, setIsConfirm] = useState(false);

  //   async function handleCreateNewTrasaction(event: FormEvent) {
  //     event.preventDefault();
  //     // await createTransaction({
  //     //   title,
  //     //   amount,
  //     //   category,
  //     //   userID: localStorage.getItem("user") || "",
  //     //   type,
  //     // });

  //     setTitle("");
  //     setAmount(0);
  //     setCategory("");
  //     setType("deposit");
  //     onRequestClose();
  //   }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form className={style.container}>
        <div>
          <GoX />
          <h2>Remove tool</h2>
        </div>
        <p>Are you sure you want to remove <strong>hotel</strong>?</p>
        <div>
          <button type="button" onClick={onRequestClose} className={style.cancel}>
            cancel
          </button>
          <button type="submit" className={style.confirm}>
            Yes, remove
          </button>
        </div>
      </form>
    </Modal>
  );
}
