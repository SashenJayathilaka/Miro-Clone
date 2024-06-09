"use client";

import React from "react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

type Props = {
  boardId: string;
};

function Canvas({ boardId }: Props) {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
}

export default Canvas;

/* 05.00 */
