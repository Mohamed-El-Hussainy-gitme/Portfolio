import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  align = "left",
}) => {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  const words = title.split(" ");

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow && (
        <motion.span
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-300"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="mr-2 inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.08 + index * 0.04,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
