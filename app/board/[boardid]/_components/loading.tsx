import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkelton } from "./participants";
import { ToolBarSkeleton } from "./toolbar";

type Props = {};

function Loading({}: Props) {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkelton />
      <ToolBarSkeleton />
    </main>
  );
}

export default Loading;
