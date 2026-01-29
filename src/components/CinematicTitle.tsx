import React from "react";
import { motion } from "framer-motion";
import { cn } from "../core/utils/cn";

export interface CinematicTitleProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  tag?: "h1" | "h2" | "h3";
}

function containsArabicLetters(text: string): boolean {
  // Arabic block ranges: https://unicode.org/charts/
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text);
}

export const CinematicTitle: React.FC<CinematicTitleProps> = ({ text, className, as, tag = "h1" }) => {
  const Tag: React.ElementType = as || tag || "h1";

  // For Arabic headings, render as a single run to avoid token flipping and spacing issues.
  if (containsArabicLetters(text)) {
    return (
      <Tag className={cn("text-balance leading-tight font-semibold tracking-tight", className)} style={{ unicodeBidi: "plaintext" }}>
        {text}
      </Tag>
    );
  }

  const words = text.trim().split(/\s+/g);

  return (
    <Tag className={cn("text-balance leading-tight font-semibold tracking-tight", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04, duration: 0.4 }}
          className="inline-block mr-2"
          style={{ unicodeBidi: "plaintext" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export default CinematicTitle;
