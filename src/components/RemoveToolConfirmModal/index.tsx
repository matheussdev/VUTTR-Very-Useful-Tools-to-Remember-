import { useTools } from "../../hooks/useTools";
import Modal from "react-modal";

import { GoX } from "react-icons/go";

import style from "./style.module.scss";

interface RemoveToolConfirmModalProps {
  isOpen: boolean;
  toolId: number;
  toolName: string;
  onRequestClose: () => void;
}

export function RemoveToolConfirmModal({
  isOpen,
  toolName,
  toolId,
  onRequestClose,
}: RemoveToolConfirmModalProps) {
  const { removeTool } = useTools();

  async function handleRemoveTool(id: number) {
    event.preventDefault();

    removeTool(id);
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form className={style.container} onSubmit={() => handleRemoveTool(toolId)}>
        <div>
          <GoX />
          <h2>Remove tool</h2>
        </div>
        <p>
          Are you sure you want to remove <strong>{toolName}</strong>?
        </p>
        <div>
          <button
            type="button"
            onClick={onRequestClose}
            className={style.cancel}
          >
            cancel
          </button>
          <button
            type="submit"
            className={style.confirm}
            
          >
            Yes, remove
          </button>
        </div>
      </form>
    </Modal>
  );
}
