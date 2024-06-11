"use client";

import { useSelectionBounce } from "@/hooks/use-selection-bounce";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWM } from "@/types/canvas";
import { memo } from "react";

type Props = {
  onReSizeHandlePointDown: (corner: Side, initialBounce: XYWM) => void;
};

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({ onReSizeHandlePointDown }: Props) => {
  const soleLayeredId = useSelf((me) =>
    me.presence.selection.length === 1 ? me.presence.selection[0] : null
  );

  const isShowHandles = useStorage(
    (root) =>
      soleLayeredId && root.layers.get(soleLayeredId)?.type !== LayerType.Path
  );

  const bounds = useSelectionBounce();

  if (!bounds) {
    return null;
  }

  return (
    <>
      <rect
        className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
        style={{ transform: `translate(${bounds.x}px, ${bounds.y}px` }}
        x={0}
        y={0}
        width={bounds.width}
        height={bounds.height}
      />
    </>
  );
});

SelectionBox.displayName = "SelectionBox";
