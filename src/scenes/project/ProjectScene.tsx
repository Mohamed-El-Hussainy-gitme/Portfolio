import React from "react";
import ScrollScene from "../../components/ScrollScene";
import ProjectSection from "../../components/ProjectSection";
import type { ProjectDefinition } from "../../data/projects";

const ACCENT_COLORS = ["#6366f1", "#22d3ee", "#f97316", "#22c55e", "#06b6d4"];

interface ProjectSceneProps {
  project: ProjectDefinition;
}

const ProjectScene: React.FC<ProjectSceneProps> = ({ project }) => {
  const accent =
    ACCENT_COLORS[
      (project.universe - 1 + ACCENT_COLORS.length) % ACCENT_COLORS.length
    ];

  return (
    <ScrollScene
      id={project.slug}
      backgroundElement={
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 blur-3xl opacity-80 glow-pulse"
            style={{
              background: `
                radial-gradient(circle at 50% 0%, ${accent}40, transparent 60%),
                radial-gradient(circle at 0% 100%, ${accent}26, transparent 60%),
                radial-gradient(circle at 100% 100%, ${accent}40, transparent 65%)
              `,
            }}
          />
        </div>
      }
    >
      <ProjectSection project={project} />
    </ScrollScene>
  );
};

export default ProjectScene;
