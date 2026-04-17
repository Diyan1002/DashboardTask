import React from "react";
import { useAppContext } from "../AppContext";

function ProjectList({ onSelect }) {
  const { projects, selectedProject, projectsLoading, projectsError } = useAppContext();

  return (
    <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-xl h-full flex flex-col overflow-hidden transition-all duration-300 w-full max-w-full">
      <h3 className="text-lg font-bold mb-3 tracking-wide text-gray-800">Project / Test List</h3>

      {projectsLoading ? (
        <div className="flex-1 space-y-3 overflow-hidden">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-24 rounded-3xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : projectsError ? (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-700">
          {projectsError}
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto hide-scrollbar min-h-0 space-y-3">
          {projects.map((project) => {
            const isActive = selectedProject?.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => onSelect(project)}
                className={`p-4 border rounded-3xl cursor-pointer transition duration-300 ease-out ${
                  isActive
                    ? 'bg-blue-50 border-blue-300 shadow-lg scale-[1.002]'
                    : 'border-gray-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-50'
                }`}
              >
                <h4 className="font-semibold text-base sm:text-lg">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProjectList;