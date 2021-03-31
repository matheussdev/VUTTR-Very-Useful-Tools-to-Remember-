import Head from "next/head";
import React, { useState } from "react";
import { Controllers } from "../components/Controllers";
import { NewToolModal } from "../components/NewToolModal";
import { RemoveToolConfirmModal } from "../components/RemoveToolConfirmModal";
import { ToolsList } from "../components/ToolsList";

export default function Home() {
  const [isNewToolModalOpen, setIsNewToolModalOpen] = useState(false);
  const [
    isRemoveToolConfirmModalOpen,
    setIsRemoveToolConfirmModalOpen,
  ] = useState(false);
  const [toolRemoveId, setToolRemoveId] = useState<number>();
  const [toolRemoveName, setToolRemoveName] = useState("");

  function handleOpenNewToolModal() {
    setIsNewToolModalOpen(true);
  }

  function handleOpenRemoveToolConfirmModal(toolId: number, toolName: string) {
    setIsRemoveToolConfirmModalOpen(true);
    setToolRemoveId(toolId);
    setToolRemoveName(toolName);
  }

  function handleCloseModal() {
    setIsNewToolModalOpen(false);
    setIsRemoveToolConfirmModalOpen(false);
  }

  return (
    <div className="container">
      <Head>
        <title>VUTTR | Very Userful Tools Remember</title>
      </Head>

      <Controllers onOpenNewToolModal={handleOpenNewToolModal} />
      <ToolsList
        onOpenRemoveToolConfirmModal={handleOpenRemoveToolConfirmModal}
      />
      <NewToolModal
        isOpen={isNewToolModalOpen}
        onRequestClose={handleCloseModal}
      />
      <RemoveToolConfirmModal
        isOpen={isRemoveToolConfirmModalOpen}
        onRequestClose={handleCloseModal}
        toolName={toolRemoveName}
        toolId={toolRemoveId}
      />
    </div>
  );
}
