"use client";

import RenameModal from "@/components/modal/rename-modal";
import { useEffect, useState } from "react";

type Props = {};

function ModelProvider({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RenameModal />
    </>
  );
}

export default ModelProvider;
