import { cn, colorToCss } from "@/lib/utils";
import { TextLayer } from "@/types/canvas";
import { Kalam } from "next/font/google";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const font = Kalam({ subsets: ["latin"], weight: ["400"] });

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.5;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;

  return Math.min(
    maxFontSize,
    scaleFactor,
    fontSizeBasedOnWidth,
    fontSizeBasedOnHeight
  );
};

type Props = {
  id: string;
  layer: TextLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

function Text({ id, layer, onPointerDown, selectionColor }: Props) {
  const { x, y, width, height, fill, value } = layer;

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
    >
      <ContentEditable
        html={"Text"}
        onChange={() => {}}
        className={cn(
          "h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? colorToCss(fill) : "#000",
        }}
      />
    </foreignObject>
  );
}

export default Text;
