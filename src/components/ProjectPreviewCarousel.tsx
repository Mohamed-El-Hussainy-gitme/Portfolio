import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewCarouselProps {
  images: string[];
  altBase: string;
}

const ProjectPreviewCarousel: React.FC<ProjectPreviewCarouselProps> = ({
  images,
  altBase,
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  const looped = [...images, ...images];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {looped.map((src, index) => (
          <div key={`${src}-${index}`} className="w-full flex-shrink-0">
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`${altBase} screen ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPreviewCarousel;
