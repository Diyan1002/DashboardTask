import React, { Suspense, lazy, useState } from "react";
import { AppProvider, useAppContext } from "./AppContext";
import ProgressBar from "./Componenets/ProgressBar";

const Sidebar = lazy(() => import("./Componenets/Sidebar"));
const Header = lazy(() => import("./Componenets/Header"));
const ProjectList = lazy(() => import("./Componenets/ProgressList"));
const Leaderboard = lazy(() => import("./Componenets/Leaderboard"));
const EditorPanel = lazy(() => import("./Componenets/EditorPanel"));

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { selectedProject, setSelectedProject, user } = useAppContext();

  return (
    <div className="flex h-screen flex-col md:flex-row bg-gray-100">
      <Suspense fallback={<div className="md:block hidden w-64"></div>}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </Suspense>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-h-0">
        <Suspense fallback={<div className="p-4">Loading header...</div>}>
          <Header onMenuClick={() => setSidebarOpen(true)} />
        </Suspense>

        <div className="flex-1 flex flex-col p-4 gap-4 min-h-0 overflow-y-auto hide-scrollbar">
          <ProgressBar progress={user.progress} />

          <div className="flex flex-col lg:flex-row gap-4 min-h-96 flex-shrink-0">
            <div className="flex-1 min-h-0">
              <Suspense fallback={<div className="h-full flex items-center justify-center">Loading projects...</div>}>
                <ProjectList onSelect={setSelectedProject} />
              </Suspense>
            </div>

            <div className="w-full lg:w-1/3 min-h-0">
              <Suspense fallback={<div className="flex min-h-full items-center justify-center">Loading leaderboard...</div>}>
                <Leaderboard />
              </Suspense>
            </div>
          </div>

          {selectedProject && (
            <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xl transition-all duration-300 flex-shrink-0">
              <Suspense fallback={<div>Loading editor...</div>}>
                <EditorPanel project={selectedProject} />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;