type Props = {};

function Info({}: Props) {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      TODO: Build a Real-Time Miro Clone With Nextjs, React, Tailwind (2024)
    </div>
  );
}

export default Info;

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
