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
      {isShowHandles && (
        <>
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
            ${bounds.x - HANDLE_WIDTH / 2}px, 
            ${bounds.y - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Top + Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ns-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, 
              ${bounds.y - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Top, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
              ${bounds.y - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Top + Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ew-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
              ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nwse-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
              ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Bottom + Side.Right, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ns-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, 
              ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Bottom, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x - HANDLE_WIDTH / 2}px, 
              ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Bottom + Side.Left, bounds);
            }}
          />
          <rect
            className="fill-white stroke-1 stroke-blue-500"
            x={0}
            y={0}
            style={{
              cursor: "ew-resize",
              width: `${HANDLE_WIDTH}px`,
              height: `${HANDLE_WIDTH}px`,
              transform: `translate(
              ${bounds.x - HANDLE_WIDTH / 2}px,
              ${bounds.y - HANDLE_WIDTH / 2 + bounds.height / 2}px)`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              onReSizeHandlePointDown(Side.Left, bounds);
            }}
          />
        </>
      )}
    </>
  );
});

SelectionBox.displayName = "SelectionBox";
