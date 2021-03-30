import React, { useState } from "react";
import { Controllers } from "../components/Controllers";
import { NewToolModal } from "../components/NewToolModal";
import { RemoveToolConfirmModal } from "../components/RemoveToolConfirmModal";
import { ToolsList } from "../components/ToolsList";

export default function Home() {
  const [isNewToolModalOpen, setIsNewToolModalOpen] = useState(false);
  const [isRemoveToolConfirmModalOpen, setIsRemoveToolConfirmModalOpen] = useState(false);


  function handleOpenNewToolModal() {
    setIsNewToolModalOpen(true);
  }

  function handleOpenRemoveToolConfirmModal() {
    setIsRemoveToolConfirmModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewToolModalOpen(false);
    setIsRemoveToolConfirmModalOpen(false)
  }

  return (
    <>
      <Controllers onOpenNewToolModal={handleOpenNewToolModal} />
      <ToolsList onOpenRemoveToolConfirmModal={handleOpenRemoveToolConfirmModal}/>
      <NewToolModal
        isOpen={isNewToolModalOpen}
        onRequestClose={handleCloseModal}
      />
      <RemoveToolConfirmModal
        isOpen={isRemoveToolConfirmModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
