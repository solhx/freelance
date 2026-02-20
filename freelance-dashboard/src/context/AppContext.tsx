import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project, Activity, UserProfile, DashboardStats } from '../types';

interface AppContextType {
  projects: Project[];
  activities: Activity[];
  userProfile: UserProfile;
  stats: DashboardStats;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Website',
    client: 'Tech Corp',
    status: 'In Progress',
    deadline: '2024-02-15',
    budget: 15000,
    description: 'Build a modern e-commerce platform'
  },
  {
    id: '2',
    name: 'Mobile App Design',
    client: 'StartUp Inc',
    status: 'Completed',
    deadline: '2024-01-20',
    budget: 8000,
    description: 'Design UI/UX for mobile application'
  },
  {
    id: '3',
    name: 'Dashboard Development',
    client: 'Finance Co',
    status: 'On Hold',
    deadline: '2024-03-01',
    budget: 12000,
    description: 'Admin dashboard for financial data'
  },
  {
    id: '4',
    name: 'Logo Redesign',
    client: 'Brand Studio',
    status: 'Pending',
    deadline: '2024-02-10',
    budget: 3000,
    description: 'Modernize company logo'
  }
];

const initialActivities: Activity[] = [
  {
    id: '1',
    message: 'Project "E-commerce Website" milestone completed',
    timestamp: '2 hours ago',
    type: 'project'
  },
  {
    id: '2',
    message: 'Payment of \$8,000 received from StartUp Inc',
    timestamp: '5 hours ago',
    type: 'payment'
  },
  {
    id: '3',
    message: 'New task assigned: Review design mockups',
    timestamp: '1 day ago',
    type: 'task'
  },
  {
    id: '4',
    message: 'Project "Mobile App Design" delivered',
    timestamp: '2 days ago',
    type: 'project'
  },
  {
    id: '5',
    message: 'Meeting scheduled with Tech Corp',
    timestamp: '3 days ago',
    type: 'task'
  }
];

const initialUserProfile: UserProfile = {
  name: 'Hossam Hassan',
  email: 'hossamhassan112003@gmail.com',
  role: 'Full Stack Developer',
  bio: 'Passionate developer with 3+ years of experience in web development.'
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activities] = useState<Activity[]>(initialActivities);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);

  const stats: DashboardStats = {
    totalProjects: projects.length,
    totalEarnings: projects
      .filter(p => p.status === 'Completed')
      .reduce((sum, p) => sum + p.budget, 0),
    tasksDue: projects.filter(p => p.status === 'In Progress').length,
    completedProjects: projects.filter(p => p.status === 'Completed').length
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString()
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: string, updatedProject: Partial<Project>) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, ...updatedProject } : p
    ));
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const updateUserProfile = (profile: Partial<UserProfile>) => {
    setUserProfile({ ...userProfile, ...profile });
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        activities,
        userProfile,
        stats,
        addProject,
        updateProject,
        deleteProject,
        updateUserProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};