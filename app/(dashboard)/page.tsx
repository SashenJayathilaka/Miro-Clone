"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

type Props = {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

function DashBoardPage({ searchParams }: Props) {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}

export default DashBoardPage;
