import { colorToCss } from "@/lib/utils";
import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import React, { memo } from "react";
import Ellipse from "./ellipse";
import Note from "./note";
import Path from "./path";
import Rectangle from "./rectangle";
import Text from "./text";

type Props = {
  id: string;
  onLayerPointDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
};

export const LayerPreview = memo(
  ({ id, onLayerPointDown, selectionColor }: Props) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            onPointerDown={(e) => onLayerPointDown(e, id)}
            stroke={selectionColor}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn("Unknown Layer Type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
