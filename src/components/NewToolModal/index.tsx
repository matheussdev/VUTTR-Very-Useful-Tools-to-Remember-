import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { FaPlus } from "react-icons/fa";

import style from "./style.module.scss";
import { useTools } from "../../hooks/useTools";

import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

Modal.setAppElement("#__next");

interface NewToolModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
interface tag {
  id: string;
  text: string;
}

/*
este componente é o modal 
responsável para adicionar 
uma nova ferramenta
*/

export function NewToolModal({ isOpen, onRequestClose }: NewToolModalProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<tag[]>([]);
  const [suggestions, setsuggestions] = useState<
    { id: string; text: string }[]
  >([
    { id: "node", text: "node" },
    { id: "api", text: "api" },
  ]);

  const { addNewTool } = useTools();

  function handleDeleteTag(i) {
    setTags(tags.filter((tag, index) => index !== i));
  }
  function handleAdditionTag(tag: tag) {
    setTags([...tags, tag]);
  }

  async function handleAddNewTool(event: FormEvent) {
    event.preventDefault();

    const tagSubmit = [...tags.map((tag) => tag.text)];
    await addNewTool({
      title,
      link,
      description,
      tags: tagSubmit,
    });

    setTitle("");
    setLink("");
    setDescription("");
    setTags([]);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form className={style.container} onSubmit={handleAddNewTool}>
        <div>
          <FaPlus />
          <h2>Add new tool</h2>
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
          placeholder="ex: hhtps://vuttr.com"
          required
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <label>Tool Description</label>
        <textarea
          value={description}
          rows={4}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>Tags*</label>
        <div className={style.containerTags}>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            handleDelete={handleDeleteTag}
            handleAddition={handleAdditionTag}
            delimiters={delimiters}
            autofocus={false}
            minQueryLength={1}
            allowDragDrop={false}
            inputFieldPosition="inline"
            allowDeleteFromEmptyInput={ false /*tags.length > 0*/}
            classNames={{
              tags: style.tagsClass,
              tagInput: style.tagInputClass,
              tagInputField: style.tagInputFieldClass,
              selected: style.selectedClass,
              tag: style.tagClass,
              remove: style.removeClass,
              suggestions: style.suggestionsClass,
              activeSuggestion: style.activeSuggestionClass,
            }}
          />
        </div>

        <button type="submit">Add Tool</button>
      </form>
    </Modal>
  );
}
