"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Item from "./item";

type Props = {};

function List({}: Props) {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ul className="space-y-4">
        {userMemberships.data?.map((member) => (
          <Item
            key={member.organization.id}
            id={member.organization.id}
            imageUrl={member.organization.imageUrl}
            name={member.organization.name}
          />
        ))}
      </ul>
    </motion.div>
  );
}

export default List;
