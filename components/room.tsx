"use client";

import { RoomProvider } from "@/liveblocks.config";
import { Layer } from "@/types/canvas";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { ReactNode } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import Motion from "./motion";

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
        penColor: null,
        pencilDraft: null,
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense
        fallback={
          <Motion style="h-full w-full flex justify-center items-center">
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              //@ts-ignore
              color="#4fa94d"
              ariaLabel="rotating-triangles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </Motion>
        }
      >
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;
