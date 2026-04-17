import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'User', progress: 70, xp: 800 });
  const [projects, setProjects] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);
  const [leaderboardError, setLeaderboardError] = useState(null);

  // Mock API calls
  useEffect(() => {
    const fetchUser = async () => {
      setUserLoading(true);
      setUserError(null);

      try {
        const response = await fetch('http://localhost:4000/user');
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setUser({ name: 'John Doe', progress: 85, xp: 1200 });
      } finally {
        setUserLoading(false);
      }
    };

    const fetchProjects = async () => {
      setProjectsLoading(true);
      setProjectsError(null);

      try {
        const response = await fetch('http://localhost:4000/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setSelectedProject(data[0] || null);
      } catch (error) {
        const fallbackData = [
          { id: 1, title: 'Project A', description: 'Test project A' },
          { id: 2, title: 'Project B', description: 'Test project B' },
          { id: 3, title: 'Project C', description: 'Test project C' },
          { id: 4, title: 'Project D', description: 'Test project D' },
        ];
        setProjects(fallbackData);
        setSelectedProject(fallbackData[0]);
      } finally {
        setProjectsLoading(false);
      }
    };

    const fetchLeaderboard = async () => {
      setLeaderboardLoading(true);
      setLeaderboardError(null);

      try {
        const response = await fetch('http://localhost:4000/leaderboard');
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard');
        }
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        setLeaderboard([
          { id: 1, name: 'Alice', score: 1500 },
          { id: 2, name: 'Bob', score: 1200 },
          { id: 3, name: 'Charlie', score: 900 },
        ]);
      } finally {
        setLeaderboardLoading(false);
      }
    };

    fetchUser();
    fetchProjects();
    fetchLeaderboard();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        projects,
        leaderboard,
        selectedProject,
        setSelectedProject,
        userLoading,
        userError,
        projectsLoading,
        projectsError,
        leaderboardLoading,
        leaderboardError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};