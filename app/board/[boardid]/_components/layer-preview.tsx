import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import React, { memo } from "react";

type Props = {
  id: string;
  onLayerPointDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string | null;
};

export const LayerPreview = memo(
  ({ id, onLayerPointDown, selectionColor }: Props) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Rectangle:
        return <div>Rectangle</div>;
      default:
        console.warn("Unknown Layer Type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";

/* 07.10 */
