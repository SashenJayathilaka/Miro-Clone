"use client";

import { useOrganization } from "@clerk/nextjs";
import { motion } from "framer-motion";
import BoardList from "./_components/board-list";
import EmptyOrg from "./_components/empty-org";

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <EmptyOrg />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <BoardList orgId={organization.id} query={searchParams} />
        </motion.div>
      )}
    </div>
  );
}

export default DashBoardPage;
