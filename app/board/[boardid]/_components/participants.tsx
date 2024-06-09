type Props = {};

function Participants({}: Props) {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      List Of users
    </div>
  );
}

export default Participants;

Participants.Skeleton = function ParticipantsSkelton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};
