import React from "react";
import { motion } from "framer-motion";

export interface StoryBlockProps {
  story: string;
  emphasis?: string;
  align?: "left" | "right";
}

const StoryBlock: React.FC<StoryBlockProps> = ({
  story,
  emphasis,
  align = "left",
}) => {
  const alignClass =
    align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-2 ${alignClass}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <p className="max-w-xl text-sm leading-relaxed text-slate-300">
        {story}
      </p>
      {emphasis && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          {emphasis}
        </p>
      )}
    </motion.div>
  );
};

export default StoryBlock;
