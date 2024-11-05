"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  style?: React.ComponentProps<"div">["className"];
};

function Motion({ children, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={style!}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
