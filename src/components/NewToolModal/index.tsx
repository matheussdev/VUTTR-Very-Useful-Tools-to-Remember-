import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { FaPlus } from "react-icons/fa";

import style from "./style.module.scss";

interface NewToolModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewToolModal({ isOpen, onRequestClose }: NewToolModalProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);

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
            <FaPlus />
          <h2>
            Add new tool
          </h2>
        </div>
        <label>Tool Name *</label>
        <input
          placeholder="Required..."
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Tool Link *</label>
        <input
          placeholder="Required..."
          required
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <label>Tool Description</label>
        <textarea
          value={description}
          rows={5}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>Tags*</label>
        <input
          placeholder="Required..."
          required
          value={tags}
          onChange={(event) => setTags([event.target.value])}
        />

        <button type="submit">Add Tool</button>
      </form>
    </Modal>
  );
}
