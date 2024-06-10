"use client";

import { pointerEventToCanvasValuePoint } from "@/lib/utils";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
  useStorage,
} from "@/liveblocks.config";
import {
  Camera,
  CanvasMode,
  CanvasState,
  Color,
  LayerType,
  Point,
} from "@/types/canvas";
import { LiveObject } from "@liveblocks/client";
import { nanoid } from "nanoId";
import React, { useCallback, useState } from "react";
import { CursorPresence } from "./cursor-presence";
import Info from "./info";
import { LayerPreview } from "./layer-preview";
import Participants from "./participants";
import Toolbar from "./toolbar";

const MAX_LAYERS = 100;

type Props = {
  boardId: string;
};

function Canvas({ boardId }: Props) {
  const layerIds = useStorage((root) => root.layerIds);
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const [lastUseColor, setLastUseColor] = useState<Color>({
    r: 0,
    g: 0,
    b: 0,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const insertLayer = useMutation(
    (
      { storage, setMyPresence },
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note,
      position: Point
    ) => {
      const liveLayers = storage.get("layers");
      if (liveLayers.size >= MAX_LAYERS) {
        return;
      }

      const liveLayerId = storage.get("layerIds");
      const layerId = nanoid();
      const layer = new LiveObject({
        type: layerType,
        x: position.x,
        y: position.y,
        height: 100,
        width: 100,
        fill: lastUseColor,
      });

      liveLayerId.push(layerId);
      liveLayers.set(layerId, layer);

      setMyPresence({ selection: [layerId] }, { addToHistory: true });
      setCanvasState({ mode: CanvasMode.None });
    },
    [lastUseColor]
  );

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onpointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasValuePoint(e, camera);

      setMyPresence({ cursor: current });
    },
    []
  );

  const onPointerleave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

  const onPointerUp = useMutation(({}, e) => {
    const point = pointerEventToCanvasValuePoint(e, camera);

    if (canvasState.mode === CanvasMode.Inserting) {
      insertLayer(canvasState.layerType, point);
    } else {
      setCanvasState({
        mode: CanvasMode.None,
      });
    }
  }, []);

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.canUndo}
        redo={history.canRedo}
      />
      <svg
        className="h-[100vw] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onpointerMove}
        onPointerLeave={onPointerleave}
        onPointerUp={onPointerUp}
      >
        <g style={{ transform: `translate(${camera.x}px), ${camera.y}px` }}>
          {layerIds.map((layerId) => (
            <LayerPreview
              key={layerId}
              id={layerId}
              onLayerPointDown={() => {}}
              selectionColor="#000"
            />
          ))}
          <CursorPresence />
        </g>
      </svg>
    </main>
  );
}

export default Canvas;
