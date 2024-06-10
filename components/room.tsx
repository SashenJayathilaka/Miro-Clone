"use client";

import { RoomProvider } from "@/liveblocks.config";
import { Layer } from "@/types/canvas";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
};

function Room({ children, roomId }: Props) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
        selection: [],
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;
