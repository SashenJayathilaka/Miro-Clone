import Room from "@/components/room";
import Canvas from "./_components/canvas";
import Loading from "./_components/loading";

type Props = {
  params: {
    boardid: string;
  };
};

function BoardIdPage({ params }: Props) {
  return (
    <Room roomId={params.boardid} fallback={<Loading />}>
      <Canvas boardId={params.boardid} />
    </Room>
  );
}

export default BoardIdPage;
